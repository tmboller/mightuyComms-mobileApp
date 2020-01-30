import { Component, OnInit } from '@angular/core';
import {Router } from "@angular/router";
import  { TeamMember,ServicesService } from '../../services/services.service'
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-teammembers',
  templateUrl: './teammembers.page.html',
  styleUrls: ['./teammembers.page.scss'],
})
export class TeammembersPage implements OnInit {

 teammember: TeamMember = {
    
    teamNum:'',
    Leader: '',
    teammembers:''
    
    }

    teammemberId = null;
    constructor(private router: ActivatedRoute, private sService: ServicesService,
      private loadingController: LoadingController, private rout: Router  ) { }

  ngOnInit() {
    this.teammemberId = this.router.snapshot.params['id'];
    if(this.teammemberId){
      this.loadTeamMember();
    }
  }

  backToTeams(){
    this.rout.navigate(['/home/teams']);
  }
  async loadTeamMember(){
    const loading = await this.loadingController.create({
      message: 'please wait...'
    });
  
    await loading.present();
  
    this.sService.getTeams(this.teammemberId).subscribe(res => {
      loading.dismiss();
      this.teammember = res;
    })
  }

  async saveTeam(){
    const loading  = await this.loadingController.create({
      message: 'please wait...'
    });
    await loading.present();
  
    
      this.sService.addTeam(this.teammember).then(() => {
        loading.dismiss();
        this.rout.navigate(['home/teams']);
      });
    }
  

}
