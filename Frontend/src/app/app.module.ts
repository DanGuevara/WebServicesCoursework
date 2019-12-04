import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {NgxSoapModule} from 'ngx-soap';
import {
  MatButtonModule,
  MatError,
  MatFormFieldModule,
  MatIconModule,
  MatMenuModule, MatOptionModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {TobaccoTableComponent} from './components/tobacco-table/tobacco-table.component';
import {RouterModule, Routes} from '@angular/router';
import { CompanyTableComponent } from './components/company-table/company-table.component';
import { CreateCompanyDialogComponent } from './components/create-company-dialog/create-company-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {ConnectionProxyService} from './services/connection-proxy.service';
import {UserRestService} from './services/user-rest.service';
import {UserSoapService} from './services/user-soap.service';
import {UserXmlRpcService} from './services/user-xml-rpc.service';
import {ConnectionTypeService} from './services/connection-type.service';
import { TasteTableComponent } from './components/taste-table/taste-table.component';
import { CreateTasteDialogComponent } from './components/create-taste-dialog/create-taste-dialog.component';
import { CreateTobaccoDialogComponent } from './components/create-tobacco-dialog/create-tobacco-dialog.component';

// определение маршрутов
const appRoutes: Routes = [
  // { path: '', component: AppComponent},
  {path: 'tobaccos', component: TobaccoTableComponent},
  {path: 'companies', component: CompanyTableComponent},
  {path: 'tastes', component: TasteTableComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    TobaccoTableComponent,
    CompanyTableComponent,
    CreateCompanyDialogComponent,
    TasteTableComponent,
    CreateTasteDialogComponent,
    CreateTobaccoDialogComponent
  ],
  entryComponents: [
    CreateCompanyDialogComponent,
    CreateTasteDialogComponent,
    CreateTobaccoDialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSoapModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [ConnectionProxyService, UserRestService, UserSoapService, UserXmlRpcService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
