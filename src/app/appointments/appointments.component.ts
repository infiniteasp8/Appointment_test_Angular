import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  
  appointment: Appointment [] = []

  appointmentTitle: string = "";
  appointmentDate: Date = new Date();
  ngOnInit(): void {
    let savedAppointments = localStorage.getItem("appointments")
    this.appointment = savedAppointments? JSON.parse(savedAppointments): []
  }

  addAppointment(){
    if(this.appointmentTitle.length && this.appointmentDate){
     let app = {
        id: Date.now(),
        title: this.appointmentTitle,
        date: this.appointmentDate
      }
      this.appointment.push(app);

      this.appointmentTitle = "",
      this.appointmentDate = new Date;
      localStorage.setItem("appointments", JSON.stringify(this.appointment))
    }
  }
  deleteAppointment(index: number) {
    this.appointment.splice(index,1)
    localStorage.setItem("appointments", JSON.stringify(this.appointment))
  }
}
