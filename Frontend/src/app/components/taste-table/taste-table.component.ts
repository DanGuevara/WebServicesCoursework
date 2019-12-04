import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {TasteModel} from '../../models/taste.model';
import {ConnectionProxyService} from '../../services/connection-proxy.service';
import {MatDialog} from '@angular/material';
import {map, switchMap, tap} from 'rxjs/operators';
import {CreateTasteDialogComponent} from '../create-taste-dialog/create-taste-dialog.component';

@Component({
  selector: 'app-taste-table',
  templateUrl: './taste-table.component.html',
  styleUrls: ['./taste-table.component.scss']
})
export class TasteTableComponent implements OnInit {

  public tastes: Observable<TasteModel[]> = of([]);
  private refresh$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private proxyService: ConnectionProxyService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.tastes = this.refresh$.pipe(
      switchMap((stub: boolean) => {
        return this.proxyService.getTastesList();
      })
    );
  }

  public onCreateButtonClick() {
    const dialogRef = this.dialog.open(CreateTasteDialogComponent, {
      height: '400px',
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refresh$.next(true);
    });
  }

}
