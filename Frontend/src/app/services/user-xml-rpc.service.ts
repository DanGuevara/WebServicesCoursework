import {Injectable} from '@angular/core';
import {UserModel} from '../models/user.model';
import * as xmlrpc from 'xmlrpc';
import {Observable, Observer, of} from 'rxjs';
import {Client} from 'xmlrpc';
import {HookahTobaccoModel} from '../models/hookah-tobacco.model';
import {map} from 'rxjs/operators';
import {CompanyModel} from '../models/company.model';
import {TasteModel} from '../models/taste.model';

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

  public getAllTobaccos(): Observable<HookahTobaccoModel[]> {
    return new Observable<HookahTobaccoModel[]>((observer: Observer<HookahTobaccoModel[]>) => {
      this.xmlRpcClient.methodCall('GetAllTobaccos', [], (error, value) => {
        observer.next(value);
        observer.complete();
      });
    });
  }

  public createTobacco(tobacco: HookahTobaccoModel): Observable<any> {
    return new Observable<HookahTobaccoModel[]>((observer: Observer<HookahTobaccoModel[]>) => {
      this.xmlRpcClient.methodCall('CreateTobacco', [tobacco], (error, value) => {
        observer.next(value);
        observer.complete();
      });
    });
  }

  public getAllCompanies(): Observable<CompanyModel[]> {
    return new Observable<CompanyModel[]>((observer: Observer<CompanyModel[]>) => {
      this.xmlRpcClient.methodCall('GetAllCompanies', [], (error, value) => {
        observer.next(value);
        observer.complete();
      });
    });
  }

  public createCompany(company: CompanyModel): Observable<any> {
    return new Observable<CompanyModel>((observer: Observer<CompanyModel>) => {
      this.xmlRpcClient.methodCall('CreateCompany', [company], (error, value) => {
        observer.next(value);
        observer.complete();
      });
    });
  }

  public getAllTastes(): Observable<TasteModel[]> {
    return new Observable<TasteModel[]>((observer: Observer<TasteModel[]>) => {
      this.xmlRpcClient.methodCall('GetAllTastes', [], (error, value) => {
        observer.next(value);
        observer.complete();
      });
    });
  }

  public createTaste(taste: TasteModel): Observable<any> {
    return new Observable<TasteModel>((observer: Observer<TasteModel>) => {
      this.xmlRpcClient.methodCall('CreateTaste', [taste], (error, value) => {
        observer.next(value);
        observer.complete();
      });
    });
  }
}
