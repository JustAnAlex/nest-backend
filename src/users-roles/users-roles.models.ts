import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany } from "sequelize";
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { RolesModels } from "src/roles/roles.models";
import { UsersModels } from "src/users/users.models";

@Table({tableName: 'users_roles', createdAt: false, updatedAt: false})
export class UsersRolesModels extends Model<UsersRolesModels> {

    @ApiProperty({example: 1, description: "Уникальный ID"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 1, description: "Внешний ключ roleId"})
    @ForeignKey(() => RolesModels)
    @Column({type: DataType.INTEGER})
    roleId: number;

    @ApiProperty({example: 1, description: "Внешний ключ userId"})
    @ForeignKey(() => UsersModels)
    @Column({type: DataType.INTEGER})
    userId: number;
}