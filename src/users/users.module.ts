import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RolesModels } from 'src/roles/roles.models';
import { RolesModule } from 'src/roles/roles.module';
import { UsersRolesModels } from 'src/users-roles/users-roles.models';
import { UsersController } from './users.controller';
import { UsersModels } from './users.models';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService,
    //RolesService
  ],
  imports: [
    SequelizeModule.forFeature([UsersModels, RolesModels, UsersRolesModels]),
    RolesModule
  ]
})
export class UsersModule {}
