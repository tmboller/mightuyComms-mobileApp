import  { TeamReport ,ServicesService } from '../../services/services.service'

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements   OnInit {

  teamreports: TeamReport[];


  constructor(private router: Router, private sService: ServicesService) { }

  ngOnInit() {
    this.sService.getTeamReports().subscribe(res => {
      this.teamreports = res;
    });
  }


  
  

routerToChangePassword(){
  this.router.navigate(['changepassword']);
}

login(){

  this.router.navigate(['/home/dashboard']);
}

}
