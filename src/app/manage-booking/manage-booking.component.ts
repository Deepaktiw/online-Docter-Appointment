import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { NotificationService } from 'src/app/services/notification.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';
import { Moment } from 'moment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-booking',
  templateUrl: './manage-booking.component.html',
  styleUrls: ['./manage-booking.component.css']
})
export class ManageBookingComponent implements OnInit {
  
  timings = {
    
    morning : ['9:00 AM' ,'9:00 AM' ,'9:00 AM' ,'9:00 AM' ,'9:00 AM' ,'9:00 AM' ,'9:00 AM' ,'9:00 AM' ,'9:00 AM'],
    evening : ['9:00 PM' ,'9:00 PM' ,'9:00 PM' ,'9:00 PM' ,'9:00 PM' ,'9:00 PM' ,'9:00 PM' ,'9:00 PM' ,'9:00 PM'],
  };

  selectedDate: Moment;  

  constructor( private notification: NotificationService, private spinner: NgxSpinnerService , private httpCall : HttpClient) { }

  ngOnInit() {
    
  }

  

  onSelect(event){
    this.selectedDate= event;
    console.log("-----41 -------" , this.selectedDate)
  }


  addDeliverySlot(dm) {
    this.spinner.show();
    const dateFormat = "YYYY-MM-DD";
    let data = {

    };
    this.httpCall.post(`${environment.consumerDomain}/addSlot`,data).subscribe(res => {
      if (res['code'] == 200 || res['code'] == 201) {
        this.notification.showNotification('success', res['response']);
        // this.getDeliveryDate();
        location.reload();
      }else if(res['code'] ==  204 ){
        this.notification.showNotification('success', res['response']);
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
      // this.notification.showNotification('error', err);
    })
  }

  
}

export interface DataType {
  Date: string,
}
