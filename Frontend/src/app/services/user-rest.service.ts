import {Injectable} from '@angular/core';
import {UserModel} from '../models/user.model';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {HookahTobaccoModel} from '../models/hookah-tobacco.model';
import {CompanyModel} from '../models/company.model';
import {TasteModel} from '../models/taste.model';

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

  public getTobaccosList(): Observable<HookahTobaccoModel[]> {
    return this.httpClient.get<HookahTobaccoModel[]>('http://localhost:54379/api/rest/user/GetAllTobaccos');
  }

  public createTobacco(tobacco: HookahTobaccoModel): Observable<any> {
    return this.httpClient.post('http://localhost:54379/api/rest/user/CreateTobacco', tobacco);
  }

  public getCompaniesList(): Observable<CompanyModel[]> {
    return this.httpClient.get<HookahTobaccoModel[]>('http://localhost:54379/api/rest/user/GetAllCompanies');
  }

  public createCompany(company: CompanyModel): Observable<any> {
    return this.httpClient.post('http://localhost:54379/api/rest/user/CreateCompany', company);
  }

  public getTastesList(): Observable<TasteModel[]> {
    return this.httpClient.get<TasteModel[]>('http://localhost:54379/api/rest/user/GetAllTastes');
  }

  public createTaste(taste: TasteModel): Observable<any> {
    return this.httpClient.post('http://localhost:54379/api/rest/user/CreateTaste', taste);
  }
}
