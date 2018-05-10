import { Component, OnInit } from '@angular/core';
import { Http, Request ,Response } from '@angular/http';
import { WebCamComponent } from 'ack-angular-webcam';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../services/serviceUsers';


@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebcamComponent implements OnInit {
  webcam:WebCamComponent//will be populated by <ack-webcam [(ref)]="webcam">
  base64
  data : any = {};
  constructor(public http:Http, private userService:UserService){
   
  }
 
  genBase64(){
    this.webcam.getBase64()
    .then( base=>this.base64=base)
    .catch( e=>console.error(e) )
  }
 
  //get HTML5 FormData object and pretend to post to server
  genPostData(){
    this.webcam.captureAsFormData({fileName:'file.jpg'})
    .then( formData=>this.postFormData(formData) )
    .catch( e=>console.error(e) )
  }
 
  //a pretend process that would post the webcam photo taken
  postFormData(formData){
    console.log(formData);
    this.http.get('http://localhost:8000/api/ba3').map(res => res.json().data);
 
  }

 
  onCamError(err){}
 
  onCamSuccess(){}


  ngOnInit() {
    this.userService.getAllUsers().subscribe((users => {
      console.log(users);
    }))
  }

}
