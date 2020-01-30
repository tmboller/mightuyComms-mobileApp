import  { TeamReport ,ServicesService } from '../../services/services.service'
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-teamreport',
  templateUrl: './teamreport.page.html',
  styleUrls: ['./teamreport.page.scss'],
})



export class TeamreportPage implements OnInit {
  
  teamreport: TeamReport = {
  teammember: '',
  topic: '',
  message: ''
  }
  
  teamreportId = null;
 
  constructor(private router: ActivatedRoute, private sService: ServicesService,
    private loadingController: LoadingController, private rout: Router  ) { }

  ngOnInit() {
    this.teamreportId = this.router.snapshot.params['id'];
      if(this.teamreportId){
        this.loadTeamReport();
      }
}


 async loadTeamReport(){
  const loading = await this.loadingController.create({
    message: 'please wait...'
  });

  await loading.present();

  this.sService.getTeamReport(this.teamreportId).subscribe(res => {
    loading.dismiss();
    this.teamreport = res;
  })
}

async saveReport(){
  const loading  = await this.loadingController.create({
    message: 'please wait...'
  });
  await loading.present();

  
    this.sService.addTeamReport(this.teamreport).then(() => {
      loading.dismiss();
      this.rout.navigate(['home/teams']);
    });
  }





  




}