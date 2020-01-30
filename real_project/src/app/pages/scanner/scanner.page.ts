import { Component, OnInit } from '@angular/core';
import {BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import {Base64ToGallery} from '@ionic-native/base64-to-gallery/ngx'
import {ToastController } from '@ionic/angular';
import {  Router} from "@angular/router";
@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {


  qrData='';
  scannedCode = null;
  elementType: 'url' | 'canvas' | 'img' = 'canvas';
  constructor(private barcodeScanner:BarcodeScanner  ,private base64ToGallery:Base64ToGallery,
    private toastCtrl:ToastController , private router: Router) { }

    routerToSettings(){
      this.router.navigate(['settings']);
    }
    
    routerToProfile(){
      this.router.navigate(['profile']);
    }


    scanCode(){
      this.barcodeScanner.scan().then(
        barcodeData => {
          this.scannedCode = barcodeData.text;
        }
      );
    }

    downloadQR(){
      const convas = document.querySelector('canvas') as HTMLCanvasElement;
      const imageData = convas.toDataURL('image/jpeg').toString();
      console.log('data: ',imageData);

      let data = imageData.split(',')[1];

      this.base64ToGallery.base64ToGallery(data,{
        prefix: '_img' , mediaScanner: true})
        .then(async res => {
          let toast = await this.toastCtrl.create({
           header: 'QR Code saved in your PhotoLibrary' 
          });
          toast.present();
        },err => console.log('err:', err)
        );
    }


  ngOnInit() {
  }

}
