import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  i:number;
  itemNext:string;
  itemBack:string;

    constructor() { 
    
  }

  ngOnInit() {
    this.i = 0 ;
    var backBtn = document.getElementById("back");
    var nextBtn = document.getElementById("next");
    backBtn.style.display = "none";
    this.itemNext= "id"
    this.itemBack = ""



  }
  next(){
    var id = document.getElementById("id");
    var wlcm = document.getElementById("wlcm");
    var reg = document.getElementById("reg");
    var vote = document.getElementById("vote");
    var cast = document.getElementById("cast");
    var confirm = document.getElementById("confirm");
    var backBtn = document.getElementById("back");
    var nextBtn = document.getElementById("next");
 
    this.i++;
    console.log(this.i);
    switch(this.i)
    {
        case 1: id.classList.add("active");
                this.itemNext = "reg"
                this.itemBack = ""
                break;
        case 2: reg.classList.add("active");
                this.itemBack = "id"
                break;
        case 3: vote.classList.add("active");
                this.itemBack = "reg"
                break;
        case 4: cast.classList.add("active");
                break;
        case 5: confirm.classList.add("active");
                break;
              
    }
    if(this.i==0)
    {
        backBtn.style.display = "none";
    }
    else if(this.i==5)
    {
        nextBtn.style.display = "none";
    }
    else
    {
        backBtn.style.display = "inline-block";
        nextBtn.style.display = "inline-block";
    }
    }
    back()
    {
    var id = document.getElementById("id");
    var wlcm = document.getElementById("wlcm");
    var reg = document.getElementById("reg");
    var vote = document.getElementById("vote");
    var cast = document.getElementById("cast");
    var confirm = document.getElementById("confirm");
    var backBtn = document.getElementById("back");
    var nextBtn = document.getElementById("next");
            this.i--;
            console.log(this.i);
            switch(this.i)
            {
                case 0: id.classList.remove("active");
                        this.itemNext = "id"
                        break;
                case 1: reg.classList.remove("active");
                        this.itemNext = "reg"
                        this.itemBack = "";
                        break;
                case 2: vote.classList.remove("active");
                        this.itemBack = "id ";
                        break;
                case 3: cast.classList.remove("active");
                        break;
                case 4: confirm.classList.remove("active");
                        break;
                
                      
            }
            if(this.i==0)
            {
                backBtn.style.display = "none";
            }
            else if(this.i==5)
            {
                nextBtn.style.display = "none";
            }
            else
            {
                backBtn.style.display = "inline-block";
                nextBtn.style.display = "inline-block";
            }
        
    }
 }
