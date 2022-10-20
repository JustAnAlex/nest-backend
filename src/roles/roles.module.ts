import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersRolesModels } from 'src/users-roles/users-roles.models';
import { UsersModels } from 'src/users/users.models';
import { RolesController } from './roles.controller';
import { RolesModels } from './roles.models';
import { RolesService } from './roles.service';

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [
    SequelizeModule.forFeature([RolesModels, UsersModels, UsersRolesModels])
  ],
  exports: [RolesService]
})
export class RolesModule {}
