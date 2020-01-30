import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import  { ToolReport ,ServicesService } from '../../services/services.service';

import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-toolreport',
  templateUrl: './toolreport.page.html',
  styleUrls: ['./toolreport.page.scss'],
})
export class ToolreportPage implements OnInit {

  toolreport: ToolReport = {
    category: '',
    topic: '',
    message: ''
    }
    toolreportId = null;

    constructor(private router: ActivatedRoute, private sService: ServicesService,
      private loadingController: LoadingController, private rout: Router  ) { }
  
  ngOnInit() {
    this.toolreportId = this.router.snapshot.params['id'];
    if(this.toolreportId){
      this.loadToolReport();
    }
  }

  backToTools(){
    this.rout.navigate(['/home/tools']);
  }

  async loadToolReport(){
    const loading = await this.loadingController.create({
      message: 'please wait...'
    });
  
    await loading.present();
  
    this.sService.getToolReport(this.toolreportId).subscribe(res => {
      loading.dismiss();
      this.toolreport = res;
    })
  }

  async saveToolReport(){
    const loading  = await this.loadingController.create({
      message: 'please wait...'
    });
    await loading.present();
  
    
      this.sService.addToolReport(this.toolreport).then(() => {
        loading.dismiss();
        this.rout.navigate(['home/tools']);
      });
    }
}
