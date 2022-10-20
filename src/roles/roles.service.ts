import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesModels } from './roles.models';

@Injectable()
export class RolesService {

    constructor(
        @InjectModel(RolesModels)
        private roleTable: typeof RolesModels
    ) {}
    
    async getRoleByValue(value: string) {
        const role = this.roleTable.findOne({where: {value}})
        return role
    }

    async createRole(dto: CreateRoleDto) {
        const role = await this.roleTable.create(dto)
        return role
    }
}
