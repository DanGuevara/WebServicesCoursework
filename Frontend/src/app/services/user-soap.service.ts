import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {UserModel} from '../models/user.model';
import {map} from 'rxjs/operators';
import {Client, NgxSoapService} from 'ngx-soap';
import {HookahTobaccoModel} from '../models/hookah-tobacco.model';
import {CompanyModel} from '../models/company.model';
import {TasteModel} from '../models/taste.model';

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

  public getAllTobaccos(): Observable<HookahTobaccoModel[]> {
    return (this.soapClient.getValue() as any).GetAllTobaccos('stub').pipe(
      map((result: any) => {
        return result.result.GetAllTobaccosResult.HookahTobacco.map((tobacco: any) => {
          return <HookahTobaccoModel> {
            Name: tobacco.Name,
            Company: tobacco.Company,
            Id: tobacco.Id,
            Rate: tobacco.Rate,
            Tastes: tobacco.Tastes.Taste
          };
        });
      })
    );
  }

  public createTobacco(tobacco: HookahTobaccoModel): Observable<any> {
    const soapTobacco: any = {
      ...tobacco,
      Tastes: {Taste: tobacco.Tastes}
    };
    return (this.soapClient.getValue() as any).CreateTobacco({tobacco: soapTobacco}).pipe(
      map((result: any) => {
        return of('');
      })
    );
  }

  public getAllCompanies(): Observable<CompanyModel[]> {
    return (this.soapClient.getValue() as any).GetAllCompanies('stub').pipe(
      map((result: any) => {
        return result.result.GetAllCompaniesResult.Company;
      })
    );
  }

  public createCompany(company: CompanyModel): Observable<any> {
    return (this.soapClient.getValue() as any).CreateCompany({company: company}).pipe(
      map((result: any) => {
        return of('');
      })
    );
  }

  public getAllTastes(): Observable<TasteModel[]> {
    return (this.soapClient.getValue() as any).GetAllTastes('stub').pipe(
      map((result: any) => {
        return result.result.GetAllTastesResult.Taste;
      })
    );
  }

  public createTaste(taste: TasteModel): Observable<any> {
    return (this.soapClient.getValue() as any).CreateTaste({taste: taste}).pipe(
      map((result: any) => {
        return of('');
      })
    );
  }
}
