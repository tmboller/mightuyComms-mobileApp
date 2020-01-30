import { Component, OnInit } from '@angular/core';
import {  Routes, Router} from "@angular/router";
@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  routerToTeamMembers(){
    this.router.navigate(['teammembers']);
  }
  routerToReport(){
    this.router.navigate(['teamreport']);
  }
  routerToProfile(){
    this.router.navigate(['profile']);

  }

  routerToSettings(){
    this.router.navigate(['settings']);
  }

}
