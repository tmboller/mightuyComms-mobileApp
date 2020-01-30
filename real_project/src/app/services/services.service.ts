import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { ActionSequence } from 'protractor';
import {  Observable } from 'rxjs' ;
import { map } from 'rxjs/operators';


export interface TeamReport {
  id?: string;
  teammember: string;
  topic: string;
  message: string;
  }
  export interface TeamMember {
    id?: string;
    teamNum: string;
    Leader: string;
    teammembers: string;
    
    }
  export interface ToolReport {
    id?: string;
    category: string;
    topic: string;
    message: string;
    }
  
  export interface SalesProcess {
    id?: string;
    name: string;
    phone_number: string;
    id_number: string;
    email: string;
    contract: string;
    }
  
  export interface SiteProcess {
      id?: string;
      Team: string;
      siteNum: string;
     
      }
      
  export interface SafetySuit {
        id?: string;
        footware: boolean;
        helmet: boolean;
        mask: boolean;
        gloves: boolean;
        glasses: boolean;
        visibilityjacket: boolean;
        worksuit: boolean;
       
        }

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

   private teamreportCollection: AngularFirestoreCollection<TeamReport>;
   private teamreport: Observable<TeamReport[]>;

   private teammemberCollection: AngularFirestoreCollection<TeamMember>;
   private teammember: Observable<TeamMember[]>;

   private toolreportCollection: AngularFirestoreCollection<ToolReport>;
   private toolreport: Observable<ToolReport[]>;

   private siteprocessCollection: AngularFirestoreCollection<SiteProcess>;
   private siteprocess: Observable<SiteProcess[]>;

   private salesprocessCollection: AngularFirestoreCollection<SalesProcess>;
   private salesprocess: Observable<SalesProcess[]>;

   private safetysuitCollection: AngularFirestoreCollection<SafetySuit>;
   private safetysuit: Observable<SafetySuit[]>;

  constructor(db: AngularFirestore) {

    this.teamreportCollection = db.collection<TeamReport>('teamreport');
    this.teamreport = this.teamreportCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data };
      });
    })
    ); 

    this.toolreportCollection = db.collection<ToolReport>('toolreport');
    this.toolreport = this.toolreportCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data };
      });
    })
    ); 

    this.teammemberCollection = db.collection<TeamMember>('teammember');
    this.teammember = this.teammemberCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data };
      });
    })
    ); 
      
    this.salesprocessCollection = db.collection<SalesProcess>('salesprocess');
    this.salesprocess = this.salesprocessCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data };
      });
    })
    ); 

    this.siteprocessCollection = db.collection<SiteProcess>('siteprocess');
    this.siteprocess = this.siteprocessCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data };
      });
    })
    );
    
    this.safetysuitCollection = db.collection<SafetySuit>('safetysuit');
    this.safetysuit = this.safetysuitCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data };
      });
    })
    ); 

   }

   getTeamReports(){
    return this.teamreport;
   }
   getTeamReport(id){
    return this.teamreportCollection.doc<TeamReport>(id).valueChanges();
   }
   updateTeamReport(teamreport: TeamReport, id: string){
    return this.teamreportCollection.doc(id).update(teamreport);
   }
   addTeamReport(teamreport: TeamReport){
    return this.teamreportCollection.add(teamreport);
   }

   getToolReports(){
    return this.toolreport;
   }
   getToolReport(id){
    return this.toolreportCollection.doc<ToolReport>(id).valueChanges();
   }
   updateToolReport(teamreport: ToolReport, id: string){
    return this.teamreportCollection.doc(id).update(teamreport);
   }
   addToolReport(toolreport: ToolReport){
    return this.toolreportCollection.add(toolreport);
   }



   getSalesProcesss(){
    return this.salesprocess;
   }
   getSalesProcess(id){
    return this.salesprocessCollection.doc<SalesProcess>(id).valueChanges();
   }
   updateSalesProcess(salesprocess: SalesProcess, id: string){
    return this.salesprocessCollection.doc(id).update(salesprocess);
   }
   addSalesProcess(salesprocess: SalesProcess){
    return this.salesprocessCollection.add(salesprocess);
   }

   getSiteProcesss(){
    return this.salesprocess;
   }
   getSiteProcess(id){
    return this.siteprocessCollection.doc<SiteProcess>(id).valueChanges();
   }
   updateSiteProcess(siteprocess: SiteProcess, id: string){
    return this.siteprocessCollection.doc(id).update(siteprocess);
   }
   addSiteProcess(siteprocess:SiteProcess){
    return this.siteprocessCollection.add(siteprocess);
   }


   getTeam(){
    return this.teammember;
   }
   getTeams(id){
    return this.teammemberCollection.doc<TeamMember>(id).valueChanges();
   }
   updateTeam(teammember: TeamMember, id: string){
    return this.teammemberCollection.doc(id).update(teammember);
   }
   addTeam(teammember:TeamMember){
    return this.teammemberCollection.add(teammember);
   }

   getSafetySuits(){
    return this.safetysuit;
   }
   getSafetySuit(id){
    return this.safetysuitCollection.doc<SafetySuit>(id).valueChanges();
   }
   updateSafetySuit(safetysuit: SafetySuit, id: string){
    return this.safetysuitCollection.doc(id).update(safetysuit);
   }

   addsafetySuit(safetysuit: SafetySuit){
    return this.safetysuitCollection.add(safetysuit);
   }

}
