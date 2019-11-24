import {Injectable} from '@angular/core';
import {UserModel} from '../models/user.model';
import * as xmlrpc from 'xmlrpc';

@Injectable()
export class UserXmlRpcService {

  public getUserById(id: string): void {
    const client = xmlrpc.createClient({host: '127.0.0.1', port: 5678, path: '/'});

    client.methodCall('getById', ['5'], (error, value) => {
      console.log(value);
    });
  }

  public getListUsers(): void {
    const client = xmlrpc.createClient({host: '127.0.0.1', port: 5678, path: '/'});

    client.methodCall('getAll', [], (error, value) => {
      console.log(value);
    });
  }
}
