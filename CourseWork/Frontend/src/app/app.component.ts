import {Component, OnInit} from '@angular/core';
import {UserRestService} from './services/user-rest.service';
import {UserModel} from './models/user.model';
import {UserSoapService} from './services/user-soap.service';
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
    this.userSoapService.getUserById('5').subscribe((res: UserModel) => {
      console.log(res);
    });
  }

  public onGetListUsersWithSoapClick() {
    this.userSoapService.getAllUsers().subscribe((res: UserModel[]) => {
      console.log(res);
    });
  }

  public onGetUserWithXmlRpcClick() {
    this.userXmlRpcService.getUserById('5').subscribe((res: UserModel) => {
      console.log(res);
    });
  }

  public onGetListUsersWithXmlRpcClick() {
    this.userXmlRpcService.getListUsers().subscribe((res: UserModel[]) => {
      console.log(res);
    });
  }
}
