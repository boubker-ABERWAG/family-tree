import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MembreComponent } from './membre/membre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatDatepicker, MatDatepickerModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatNativeDateModule,
  MatRadioModule, MatSelectModule,
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
import {AgmCoreModule} from '@agm/core';
import {DraggableDirective} from './d3/directives/draggable.directive';
import {ZoomableDirective} from './d3/directives/zoomable.directive';
import {D3Service} from './d3/d3.service';
import {GraphComponent} from './d3/visuals/graph/graph.component';
import {LinkVisualComponent} from './d3/visuals/shared/link-visual/link-visual.component';
import {NodeVisualComponent} from './d3/visuals/shared/node-visual/node-visual.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MembreComponent,
    CardComponent,
    FormComponent,
    AddDialogComponent,
    UpdateComponent,
    CreateComponent,
    DraggableDirective,
    ZoomableDirective,
    GraphComponent,
    LinkVisualComponent,
    NodeVisualComponent,
    HomeComponent,
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
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAaL5zyGxcps8z3GPxXiF_Or0qDPhuNVdU'
    }),
  ],
  providers: [
    HttpClient,
    MembreService,
    MatDatepicker,
    D3Service,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
