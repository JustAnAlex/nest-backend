import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RolesModels } from 'src/roles/roles.models';
import { RolesService } from 'src/roles/roles.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersModels } from './users.models';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(UsersModels)
        private userTable: typeof UsersModels,
        private roleService: RolesService
    ) {}

    flatAnswer(answer: UsersModels[]) {
        return answer.map(user => Object.assign(JSON.parse(JSON.stringify(user)), {roles: user?.roles?.[0]?.value}))
    }

    async getAllUsers() {
        const users = await this.userTable.findAll({
            // include: {all: true}
            attributes: {exclude: ['banReason']},
            include: [
                {
                    model: RolesModels,
                    // required: true,
                    attributes: ['value'],
                    through: {
                        attributes: [],
                    },
                }
            ]
        })
        return this.flatAnswer(users)
    }

    async getUserByEmail(email: string) {
        const user = await this.userTable.findOne({where: {email}, include: {all:true}})
        return user
    }

    async createUser(dto: CreateUserDto) {
        const user = await this.userTable.create(dto)
        const role = await this.roleService.getRoleByValue("USER")
        await user.$set('roles', [role.id])
        return user
    }
}
