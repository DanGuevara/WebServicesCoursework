import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UserModel} from '../models/user.model';
import {tap} from 'rxjs/operators';
import {ISoapMethodResponse, NgxSoapService} from 'ngx-soap';
import {Client, createClientAsync} from 'soap';

@Injectable()
export class UserSoapService {

  constructor(private soap: NgxSoapService) {
  }

  public getUserById(id: string): void {
    this.soap.createClient('http://localhost:54379/api/soap/user.asmx', {disableCache: false})
      .then(client => {
         (client as any).GetById(id)
          .subscribe((result: ISoapMethodResponse) => {
            console.log(result.result);
          });
      });
  }

  public getAllUsers(): void {
    this.soap.createClient('http://localhost:54379/api/soap/user.asmx', {disableCache: false})
      .then(client => {
        (client as any).GetAll('stub')
          .subscribe((result: ISoapMethodResponse) => {
            console.log(result.result);
          });
      });
  }
}
