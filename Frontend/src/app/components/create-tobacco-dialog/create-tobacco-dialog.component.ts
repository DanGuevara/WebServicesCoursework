import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {TasteModel} from '../../models/taste.model';
import {CompanyModel} from '../../models/company.model';
import {MatDialogRef} from '@angular/material';
import {ConnectionProxyService} from '../../services/connection-proxy.service';
import {HookahTobaccoModel} from '../../models/hookah-tobacco.model';

@Component({
  selector: 'app-create-tobacco-dialog',
  templateUrl: './create-tobacco-dialog.component.html',
  styleUrls: ['./create-tobacco-dialog.component.scss']
})
export class CreateTobaccoDialogComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    company: new FormControl({}, Validators.required),
    tastes: new FormControl([], Validators.required),
    rate: new FormControl(0, Validators.required)
  });

  public tastes$: Observable<TasteModel[]>;
  public companies$: Observable<CompanyModel[]>;

  constructor(private dialogRef: MatDialogRef<CreateTobaccoDialogComponent>,
              private connectionProxyService: ConnectionProxyService) {
  }

  ngOnInit() {
    this.tastes$ = this.connectionProxyService.getTastesList();
    this.companies$ = this.connectionProxyService.getCompaniesList();
  }

  public onCreateButtonClick(): void {
    const tobacco: HookahTobaccoModel = <HookahTobaccoModel> {
      Id: '',
      Name: this.form.get('name').value,
      Company: this.form.get('company').value,
      Tastes: this.form.get('tastes').value,
      Rate: this.form.get('rate').value as number
    };
    this.connectionProxyService.createTobacco(tobacco).pipe().subscribe((next: any) => {
      this.dialogRef.close();
    });
  }

}
