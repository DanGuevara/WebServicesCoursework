import {Component, Input, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HookahTobaccoModel} from '../../models/hookah-tobacco.model';
import {UserSoapService} from '../../services/user-soap.service';

@Component({
  selector: 'app-tobacco-table',
  templateUrl: './tobacco-table.component.html',
  styleUrls: ['./tobacco-table.component.scss']
})
export class TobaccoTableComponent implements OnInit {

  public tobaccos: Observable<HookahTobaccoModel[]> = of([]);

  constructor(
    private userSoapService: UserSoapService
  ) {
  }

  ngOnInit() {

  }

  public onGetUserWithRestClick() {
    this.tobaccos = this.userSoapService.getAllTobaccos();
  }

}
