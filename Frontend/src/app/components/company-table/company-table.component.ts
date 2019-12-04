import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {CompanyModel} from '../../models/company.model';
import {ConnectionProxyService} from '../../services/connection-proxy.service';
import {CreateCompanyDialogComponent} from '../create-company-dialog/create-company-dialog.component';
import {MatDialog} from '@angular/material';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.scss']
})
export class CompanyTableComponent implements OnInit {

  public companies: Observable<CompanyModel[]> = of([]);
  private refresh$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private proxyService: ConnectionProxyService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.companies = this.refresh$.pipe(
      switchMap((stub: boolean) => {
        return this.proxyService.getCompaniesList();
      })
    );
  }

  public onCreateButtonClick() {
    const dialogRef = this.dialog.open(CreateCompanyDialogComponent, {
      height: '400px',
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refresh$.next(true);
    });
  }

}
