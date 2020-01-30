import { Component, OnInit } from '@angular/core';
import { SalesProcess,SiteProcess, ServicesService } from 'src/app/services/services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
})
export class SalesPage implements OnInit {

 siteProcess: SiteProcess ={
    Team: '',
    siteNum: ''
    }

  salesprocess: SalesProcess = {
    name: '',
    phone_number: '',
    id_number: '',
    email: '',
    contract: ''

  }

  siteprocessId = null;

  salesprocessId = null;
 
  constructor(private router: ActivatedRoute, private sService: ServicesService,
    private loadingController: LoadingController, private rout: Router  ) { }

  ngOnInit() {
    this.salesprocessId = this.router.snapshot.params['id'];
      if(this.salesprocessId){
        this.loadSalesReport();
      }

      this.siteprocessId = this.router.snapshot.params['id'];
      if(this.siteprocessId){
        this.loadSalesReport();
      }
}

async loadSalesReport(){
  const loading = await this.loadingController.create({
    message: 'please wait...'
  });

  await loading.present();

  this.sService.getSalesProcess(this.salesprocessId).subscribe(res => {
    loading.dismiss();
    this.salesprocess = res;
  })
}

async saveSalesProcessReport(){
  const loading  = await this.loadingController.create({
    message: 'please wait...'
  });
  await loading.present();

  
    this.sService.addSalesProcess(this.salesprocess).then(() => {
      loading.dismiss();
      this.rout.navigate(['home/sales']);
    });
  }

  async saveSiteProcessReport(){
    const loading  = await this.loadingController.create({
      message: 'please wait...'
    });
    await loading.present();
  
    
      this.sService.addSiteProcess(this.siteProcess).then(() => {
        loading.dismiss();
        this.rout.navigate(['home/sales']);
      });
    }



}