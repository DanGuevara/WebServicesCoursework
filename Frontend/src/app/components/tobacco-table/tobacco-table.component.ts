import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HookahTobaccoModel} from '../../models/hookah-tobacco.model';
import {UserSoapService} from '../../services/user-soap.service';
import {CreateTasteDialogComponent} from '../create-taste-dialog/create-taste-dialog.component';
import {ConnectionProxyService} from '../../services/connection-proxy.service';
import {MatDialog} from '@angular/material';
import {map, switchMap} from 'rxjs/operators';
import {TasteModel} from '../../models/taste.model';
import {CreateTobaccoDialogComponent} from '../create-tobacco-dialog/create-tobacco-dialog.component';

@Component({
  selector: 'app-tobacco-table',
  templateUrl: './tobacco-table.component.html',
  styleUrls: ['./tobacco-table.component.scss']
})
export class TobaccoTableComponent implements OnInit {

  public tobaccos: Observable<HookahTobaccoModel[]> = of([]);
  private refresh$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private proxyService: ConnectionProxyService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.tobaccos = this.refresh$.pipe(
      switchMap((stub: boolean) => {
        return this.proxyService.getTobaccosList();
      })
    );
  }

  public onCreateButtonClick() {
    const dialogRef = this.dialog.open(CreateTobaccoDialogComponent, {
      height: '400px',
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refresh$.next(true);
    });
  }

  public getTastesAsString(tastes: TasteModel[]): string {
    if (tastes) {
      return tastes.map((taste: TasteModel) => taste.Name).join(',');
    }
  }

}
