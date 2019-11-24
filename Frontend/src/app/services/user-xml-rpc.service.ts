import {Injectable} from '@angular/core';
import {UserModel} from '../models/user.model';
import * as xmlrpc from 'xmlrpc';
import {Observable, Observer} from 'rxjs';
import {Client} from 'xmlrpc';

@Injectable()
export class UserXmlRpcService {

  private xmlRpcClient: Client;

  constructor() {
    this.xmlRpcClient = xmlrpc.createClient({host: '127.0.0.1', port: 5678, path: '/'});
  }

  public getUserById(id: string): Observable<UserModel> {
    return new Observable<UserModel>((observer: Observer<UserModel>) => {
      this.xmlRpcClient.methodCall('getById', ['5'], (error, value) => {
        observer.next(value);
        observer.complete();
      });
    });
  }

  public getListUsers(): Observable<UserModel[]> {
    return new Observable<UserModel[]>((observer: Observer<UserModel[]>) => {
      this.xmlRpcClient.methodCall('getAll', [], (error, value) => {
        observer.next(value);
        observer.complete();
      });
    });
  }
}
