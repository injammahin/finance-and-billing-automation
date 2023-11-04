// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class UserService {}
import { Injectable, HttpException } from '@nestjs/common';
import { DATA } from './registration.data';

@Injectable()
export class UserService {
  data = DATA;
  getuser(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.data);
    });
  }

  getUser(userId): Promise<any> {
    let id = Number(userId);
    return new Promise((resolve) => {
      const user = this.data.find((user) => user.id === id);
      if (!user) {
        throw new HttpException('id does not exist', 404);
      }
      resolve(user);
    });
  }
  addUser(user): Promise<any> {
    return new Promise((resolve) => {
      this.data.push(user);
      resolve(this.data);
    });
  }
  deleteUser(userId): Promise<any> {
    let id = Number(userId);
    return new Promise((resolve) => {
      let index = this.data.findIndex((user) => user.id === id);
      if (index === -1) {
        throw new HttpException('this does not exits', 404);
      }
      this.data.splice(index, 1);
      resolve(this.data);
    });
  }
}
