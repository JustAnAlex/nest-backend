import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersModels } from './users.models';
import { UsersService } from './users.service';

@ApiTags('Пользователи')
@Controller('/users')
export class UsersController {
    
    constructor(private usersService: UsersService) {}

    @ApiOperation({summary: 'Получение всех пользователей'})
    @ApiResponse({status: 200, type: [UsersModels]})
    @Get()
    getAll() {
        return this.usersService.getAllUsers()
    }

    @ApiOperation({summary: 'Создание пользователя'})
    @ApiResponse({status: 200, type: UsersModels})
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto)
    }
}
