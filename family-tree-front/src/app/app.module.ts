import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MembreComponent } from './membre/membre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatRadioModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CardComponent } from './shared/membre/card/card.component';
import { FormComponent } from './shared/membre/form/form.component';
import {FormsModule} from '@angular/forms';
import {APP_ROUTES} from './app.routes';
import { AddDialogComponent } from './membre/add-dialog/add-dialog.component';
import { UpdateComponent } from './membre/update/update.component';
import {MembreService} from './service/membre.service';
import { CreateComponent } from './membre/create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    MembreComponent,
    CardComponent,
    FormComponent,
    AddDialogComponent,
    UpdateComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    HttpClientModule,
    APP_ROUTES,
    FormsModule,
  ],
  providers: [
    HttpClient,
    MembreService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
