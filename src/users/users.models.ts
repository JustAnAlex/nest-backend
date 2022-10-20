import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { RolesModels } from "src/roles/roles.models";
import { UsersRolesModels } from "src/users-roles/users-roles.models";

interface UserCreationAttrs {
    email: string,
    password: string
}

@Table({tableName: 'users', createdAt: false, updatedAt: false})
export class UsersModels extends Model<UsersModels, UserCreationAttrs> {

    @ApiProperty({example: 1, description: "Уникальный ID"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'example@mail.ru', description: "Почта пользователя"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: '12gfh3H!', description: "Пароль пользователя"})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: true, description: "Забанен пользователь или нет"})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: 'За флуд', description: "За что пользователь получил бан"})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany(() => RolesModels, () => UsersRolesModels)
    roles: RolesModels[];
}