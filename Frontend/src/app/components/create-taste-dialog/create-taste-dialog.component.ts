import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {ConnectionProxyService} from '../../services/connection-proxy.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-taste-dialog',
  templateUrl: './create-taste-dialog.component.html',
  styleUrls: ['./create-taste-dialog.component.scss']
})
export class CreateTasteDialogComponent implements OnInit {

  public name: FormControl = new FormControl('', Validators.required);

  constructor(private dialogRef: MatDialogRef<CreateTasteDialogComponent>,
              private connectionProxyService: ConnectionProxyService) {
  }

  ngOnInit() {
  }

  public onCreateButtonClick(): void {
    this.connectionProxyService.createTaste({Name: this.name.value, Id: ''}).pipe().subscribe((next: any) => {
      this.dialogRef.close();
    });
  }

}
