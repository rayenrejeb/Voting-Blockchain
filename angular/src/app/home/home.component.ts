import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/serviceUsers'

interface User {
  fName: string,
  lName: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  title: "Home Component"
  users : User[]
  constructor(private ServiceUsers : UserService) { }

  ngOnInit() : void {
    this.ServiceUsers.getAllUsers().subscribe(data => this.users = data)
  }

}
