import { Component, OnInit } from '@angular/core';
import {  Routes, Router, ActivatedRoute} from "@angular/router";
import { LoadingController } from '@ionic/angular';
import  { SafetySuit,ServicesService } from '../../services/services.service'


@Component({
  selector: 'app-tools',
  templateUrl: './tools.page.html',
  styleUrls: ['./tools.page.scss'],
})
export class ToolsPage implements OnInit {


  safetysuit: SafetySuit = {
    footware: false,
    helmet: false,
    mask: false,
    gloves: false,
    glasses: false,
    visibilityjacket: false,
    worksuit: false,
    }



  safetysuitId = null;
  constructor(private router: ActivatedRoute, private sService: ServicesService,
    private loadingController: LoadingController, private rout: Router  ) { }

ngOnInit() {
  this.safetysuitId = this.router.snapshot.params['id'];
  if(this.safetysuitId){
    this.loadSafetySuit();
  }
}

backToTools(){
  this.rout.navigate(['/home/tools']);
}
async loadSafetySuit(){
  const loading = await this.loadingController.create({
    message: 'please wait...'
  });

  await loading.present();

  this.sService.getSafetySuit(this.safetysuitId).subscribe(res => {
    loading.dismiss();
    this.safetysuitId = res;
  })
}

async saveSafetySuit(){
  const loading  = await this.loadingController.create({
    message: 'please wait...'
  });
  await loading.present();

    this.sService.addsafetySuit(this.safetysuit).then(() => {
      loading.dismiss();
      this.rout.navigate(['home/tools']);
    });
  }

}
