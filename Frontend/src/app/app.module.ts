import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {NgxSoapModule} from 'ngx-soap';
import {MatButtonModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {TobaccoTableComponent} from './components/tobacco-table/tobacco-table.component';
import {RouterModule, Routes} from '@angular/router';

// определение маршрутов
const appRoutes: Routes = [
  // { path: '', component: AppComponent},
  {path: 'tobaccos', component: TobaccoTableComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    TobaccoTableComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
