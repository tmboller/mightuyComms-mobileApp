import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  routerToLoginPage(){
    this.router.navigate(['login'])
  }

}
