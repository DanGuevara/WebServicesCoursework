import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, RequiredValidator, Validators, ReactiveFormsModule} from '@angular/forms';
import {ConnectionProxyService} from '../../services/connection-proxy.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-create-company-dialog',
  templateUrl: './create-company-dialog.component.html',
  styleUrls: ['./create-company-dialog.component.scss'],
})
export class CreateCompanyDialogComponent implements OnInit {

  public name: FormControl = new FormControl('', Validators.required);

  constructor(
    private dialogRef: MatDialogRef<CreateCompanyDialogComponent>,
    private connectionProxyService: ConnectionProxyService
  ) {
  }

  ngOnInit() {
  }

  public onCreateButtonClick(): void {
    this.connectionProxyService.createCompany({Name: this.name.value, Id: ''}).pipe().subscribe((next: any) => {
      this.dialogRef.close();
    });
  }

}
