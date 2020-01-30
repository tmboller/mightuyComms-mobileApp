import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  routeToProfile(){
  this.router.navigate(['profile']);
  }

  routeToSettings(){
    this.router.navigate(['settings']);
  }

  routeToTeams(){
    this.router.navigate(['/home/teams']);
  }

  routeToTools(){
    this.router.navigate(['/home/tools']);
  }

  routeToScanner(){
    this.router.navigate(['/home/scanner']);
  }

  routeToSales(){
    this.router.navigate(['/home/sales']);
  }

}
