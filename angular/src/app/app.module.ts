import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { UserService } from './services/serviceUsers';
import { BoxComponent } from './components/box/box.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { IdComponent } from './components/id/id.component';
import { RegComponent } from './components/reg/reg.component'
import { WebCamModule } from 'ack-angular-webcam';
import { WebcamComponent } from './components/webcam/webcam.component';
 


const appRoutes: Routes= [
  {path:'',component:WelcomeComponent},
  {path:'id',component:IdComponent},
  {path:'reg',component:RegComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    WelcomeComponent,
    IdComponent,
    RegComponent,
    WebcamComponent,
    
  ],
  imports: [
    BrowserModule,
    WebCamModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpClientModule,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
