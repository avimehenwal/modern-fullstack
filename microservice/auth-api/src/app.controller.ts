import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { GetUserRequest } from './get-user-request.dto';
import { User } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern('get_user')
  getUser(data: GetUserRequest): User {
    console.log(`Fetching stripeUserId for ${data.userId}`);
    return this.appService.getUser(data);
  }
}
