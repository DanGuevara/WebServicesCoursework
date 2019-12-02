import {Injectable} from '@angular/core';
import {UserRestService} from './user-rest.service';
import {UserSoapService} from './user-soap.service';
import {UserXmlRpcService} from './user-xml-rpc.service';
import {ConnectionTypeEnum, ConnectionTypeService} from './connection-type.service';
import {Observable} from 'rxjs';
import {HookahTobaccoModel} from '../models/hookah-tobacco.model';
import {CompanyModel} from '../models/company.model';
import {TasteModel} from '../models/taste.model';

@Injectable()
export class ConnectionProxyService {
  constructor(
    private userRestService: UserRestService,
    private userSoapService: UserSoapService,
    private userXmlRpcService: UserXmlRpcService,
    private currentConnectionService: ConnectionTypeService) {

  }

  public getTobaccosList(): Observable<HookahTobaccoModel[]> {
    switch (this.currentConnectionService.getCurrentConnection()) {
      case ConnectionTypeEnum.REST:
        return this.userRestService.getTobaccosList();
        break;
      case ConnectionTypeEnum.SOAP:
        return this.userSoapService.getAllTobaccos();
        break;
      case ConnectionTypeEnum.XMLRPC:
        return this.userXmlRpcService.getAllTobaccos();
        break;
    }
  }

  public createTobacco(tobacco: HookahTobaccoModel): Observable<any> {
    switch (this.currentConnectionService.getCurrentConnection()) {
      case ConnectionTypeEnum.REST:
        return this.userRestService.createTobacco(tobacco);
        break;
      case ConnectionTypeEnum.SOAP:
        return this.userSoapService.createTobacco(tobacco);
        break;
      case ConnectionTypeEnum.XMLRPC:
        return this.userXmlRpcService.createTobacco(tobacco);
        break;
    }
  }

  public getCompaniesList(): Observable<CompanyModel[]> {
    switch (this.currentConnectionService.getCurrentConnection()) {
      case ConnectionTypeEnum.REST:
        return this.userRestService.getCompaniesList();
        break;
      case ConnectionTypeEnum.SOAP:
        return this.userSoapService.getAllCompanies();
        break;
      case ConnectionTypeEnum.XMLRPC:
        return this.userXmlRpcService.getAllCompanies();
        break;
    }
  }

  public createCompany(company: CompanyModel): Observable<any> {
    switch (this.currentConnectionService.getCurrentConnection()) {
      case ConnectionTypeEnum.REST:
        return this.userRestService.createCompany(company);
        break;
      case ConnectionTypeEnum.SOAP:
        return this.userSoapService.createCompany(company);
        break;
      case ConnectionTypeEnum.XMLRPC:
        return this.userXmlRpcService.createCompany(company);
        break;
    }
  }

  public getTastesList(): Observable<TasteModel[]> {
    switch (this.currentConnectionService.getCurrentConnection()) {
      case ConnectionTypeEnum.REST:
        return this.userRestService.getTastesList();
        break;
      case ConnectionTypeEnum.SOAP:
        return this.userSoapService.getAllTastes();
        break;
      case ConnectionTypeEnum.XMLRPC:
        return this.userXmlRpcService.getAllTastes();
        break;
    }
  }

  public createTaste(taste: TasteModel): Observable<any> {
    switch (this.currentConnectionService.getCurrentConnection()) {
      case ConnectionTypeEnum.REST:
        return this.userRestService.createTaste(taste);
        break;
      case ConnectionTypeEnum.SOAP:
        return this.userSoapService.createTaste(taste);
        break;
      case ConnectionTypeEnum.XMLRPC:
        return this.userXmlRpcService.createTaste(taste);
        break;
    }
  }

}
