import { Component, OnInit } from '@angular/core';
import * as script from 'script.js';


@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css']
})
export class IdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    console.log(script);

}


}