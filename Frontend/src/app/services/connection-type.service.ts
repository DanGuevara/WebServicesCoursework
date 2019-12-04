import {Injectable} from '@angular/core';

export enum ConnectionTypeEnum {
  REST = 'REST',
  SOAP = 'SOAP',
  XMLRPC = 'XMLRPC'
}

@Injectable({
  providedIn: 'root',
})
export class ConnectionTypeService {

  private _currentConnection: ConnectionTypeEnum = ConnectionTypeEnum.REST;


  public getCurrentConnection(): ConnectionTypeEnum {
    return this._currentConnection;
  }

  public setCurrentConnection(connection: ConnectionTypeEnum) {
    this._currentConnection = connection;
  }

}
