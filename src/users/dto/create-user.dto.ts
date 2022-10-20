import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({example: 'example@mail.ru', description: "Почта пользователя"})
    readonly email: string;

    @ApiProperty({example: '12gfh3H!', description: "Пароль пользователя"})
    readonly password: string;
}