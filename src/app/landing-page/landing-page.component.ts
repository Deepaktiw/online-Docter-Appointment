import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { NotificationService } from 'src/app/services/notification.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor( private location: Location, private notification: NotificationService, private spinner: NgxSpinnerService, private http: HttpClient ,private router :Router) { }

  @ViewChild(MatPaginator) notificationPaginator: MatPaginator;
  @ViewChild(MatSort) notificationSort: MatSort;

  Columns = ['Sno','Patient', 'Contact', 'Appointment', 'Waiting', 'Action'];
  index=0;
  dm: any = {
    date: new Date()
  }
  firstName = "Deepak"
  appointmentList: MatTableDataSource<DataType>;

  ngOnInit() {
    this.getAppointment();
  }

  //Used to get List of booked appointments.
  getAppointment() {
    this.spinner.show();
    this.http.get(`${environment.consumerDomain}/appointmentList`).subscribe(res => {
      if (res['status'] =='Success' ) {
        // this.notification.showNotification('success', res['message']);
        this.appointmentList = new MatTableDataSource(res['data']);
        this.appointmentList.paginator = this.notificationPaginator;
        this.appointmentList.sort = this.notificationSort;
      }else if(res['status'] ==  'Failed' ){
        this.notification.showNotification('success', res['message']);
      } else {
        this.notification.showNotification('success', res['message']);
      }
    }, err => {
      this.spinner.hide();
      Swal.fire(
        'ERROR:',
        'Something went wrong! Please try after sometime.',
        'error'
      )
    })
  }

  applyFilter(filterValue: string) {
    this.appointmentList.filter = filterValue.trim().toLowerCase();
  }

  navigateBack() {
    this.location.back();
  }

  RedirectUrl(id){
   this.router.navigate(['/vendor/quantity',id]);
  }

}


export interface DataType {
  Id:Number,
  Patient: string,
  Contact: Number,
  Appointment: string,
  Waiting: string,
  Active: string,
}