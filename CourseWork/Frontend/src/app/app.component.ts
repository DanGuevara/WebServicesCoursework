import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {NgxSoapService, Client, ISoapMethodResponse} from 'ngx-soap';
import * as xmlrpc from 'xmlrpc';
import {UserRestService} from './services/user-rest.service';
import {UserModel} from './models/user.model';
import {UserSoapService} from './services/user-soap.service';
import {async} from 'rxjs/internal/scheduler/async';
import {UserXmlRpcService} from './services/user-xml-rpc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    UserRestService,
    UserSoapService,
    UserXmlRpcService,
  ]
})
export class AppComponent implements OnInit {
  title = 'course-work-app';

  constructor(
    private userRestService: UserRestService,
    private userSoapService: UserSoapService,
    private userXmlRpcService: UserXmlRpcService) {
  }

  ngOnInit(): void {

  }

  public onGetUserWithRestClick() {
    this.userRestService.getUserById('5').pipe().subscribe((next: UserModel) => {
      console.log(next);
    });
  }

  public onGetListUsersWithRestClick() {
    this.userRestService.getListUsers().pipe().subscribe((next: UserModel[]) => {
      console.log(next);
    });
  }

  public onGetUserWithSoapClick() {
    this.userSoapService.getUserById('5');
  }

  public onGetListUsersWithSoapClick() {
    this.userSoapService.getAllUsers();
  }

  public onGetUserWithXmlRpcClick() {
    this.userXmlRpcService.getUserById('5');
  }

  public onGetListUsersWithXmlRpcClick() {
    this.userXmlRpcService.getListUsers();
  }
}
