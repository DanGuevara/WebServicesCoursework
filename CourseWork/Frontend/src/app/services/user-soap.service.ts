import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserModel} from '../models/user.model';
import {map} from 'rxjs/operators';
import {Client, NgxSoapService} from 'ngx-soap';

@Injectable()
export class UserSoapService {

  private soapClient: BehaviorSubject<Client> = new BehaviorSubject<Client>(null);

  constructor(private soap: NgxSoapService) {
    this.soap.createClient('http://localhost:54379/api/soap/user.asmx', {disableCache: false})
      .then(client => {
        this.soapClient.next(client);
      });
  }

  public getUserById(id: string): Observable<UserModel> {
    return (this.soapClient.getValue() as any).GetById(id).pipe(
      map((result: any) => {
        return result.result.GetByIdResult;
      })
    );
  }

  public getAllUsers(): Observable<UserModel[]> {
    return (this.soapClient.getValue() as any).GetAll('stub').pipe(
      map((result: any) => {
        return result.result.GetAllResult.UserModel;
      })
    );
  }
}
