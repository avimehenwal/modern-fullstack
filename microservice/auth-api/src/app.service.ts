import { Injectable } from '@nestjs/common';
import { GetUserRequest } from './get-user-request.dto';
import { User } from './types';

@Injectable()
export class AppService {
  private readonly users: User[] = [
    {
      userId: '123',
      stripeUserId: 's-123456',
    },
    {
      userId: '345',
      stripeUserId: 's-3598709',
    },
  ];

  getHello(): string {
    return 'Hello World!';
  }

  getUser(getUserRequest: GetUserRequest) {
    return this.users.find((user) => user.userId === getUserRequest.userId);
  }
}
