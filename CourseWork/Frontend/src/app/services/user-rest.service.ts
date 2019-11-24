import {Injectable} from '@angular/core';
import {UserModel} from '../models/user.model';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserRestService {

  constructor(private httpClient: HttpClient) {
  }

  public getUserById(id: string): Observable<UserModel> {
    return this.httpClient.get<UserModel>(`http://localhost:54379/api/rest/user/${id}`).pipe(
      tap((res: UserModel) => {
        return res;
      }),
    );
  }

  public getListUsers(): Observable<UserModel[]> {
    return this.httpClient.get<UserModel[]>('http://localhost:54379/api/rest/user/getall').pipe(
      tap((res: UserModel[]) => {
        return res;
      })
    );
  }
}
