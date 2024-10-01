import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  users: { userId: number; username: string; password: string; }[];
  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'test12',
        password: '1234',
      },
      {
        userId: 2,
        username: 'maria',
        password: 'guess',
      },
    ];
  }

  async findOne(username:string) {
    return this.users.find(user => user.username === username);
  }
}