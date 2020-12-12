import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';


import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule,
  MatPaginator,
  MatPaginatorModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';


import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotificationService } from './services/notification.service';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
// Routes
const routes: Routes = [
  {
    path : 'booking',
    component: ManageBookingComponent
  }
];



@NgModule({
  declarations: [
    AppComponent,
    ManageBookingComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatSelectModule,
    MatListModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forRoot(routes, { useHash: true }),


  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }