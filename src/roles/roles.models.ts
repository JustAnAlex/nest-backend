import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { UsersRolesModels } from "src/users-roles/users-roles.models";
import { UsersModels } from "src/users/users.models";

interface RoleCreationAttrs {
    value: string,
    description: string
}

@Table({tableName: 'roles', createdAt: false, updatedAt: false})
export class RolesModels extends Model<RolesModels, RoleCreationAttrs> {

    @ApiProperty({example: 1, description: "Уникальный ID"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'ADMIN', description: "Уникальное значение роли пользователя"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @ApiProperty({example: 'Администратор', description: "Описание роли"})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @BelongsToMany(() => UsersModels, () => UsersRolesModels)
    users: UsersModels[];
}