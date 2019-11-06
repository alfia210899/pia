import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tab6Page } from '../pages/tab6/tab6.page';
import { Tab7Page } from '../pages/tab7/tab7.page';
import { Tab8Page } from '../pages/tab8/tab8.page';
import { Tab9Page } from '../pages/tab9/tab9.page';
import { Tab10Page } from '../pages/tab10/tab10.page';
import { Tab11Page } from '../pages/tab11/tab11.page';
import { Tab13Page } from '../pages/tab13/tab13.page';
import { Tab12Page } from '../pages/tab12/tab12.page';

import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private modalController : ModalController, public router : Router) {}

  async openPL(){
    // const pl = await this.modalController.create({
    //   component : Tab6Page
    // });
    // pl.present();

    this.router.navigate(['./tab6']);
  }
  async openMS(){
    // const ms = await this.modalController.create({
    //   component : Tab7Page
    // });
    // ms.present();
    this.router.navigate(['./tab7']);
  }
  async openCA(){
    //  const ca = await this.modalController.create({
    //    component : Tab8Page
    //  });
    //  ca.present();
    this.router.navigate(['./tab8']);
  }
  async openDBMS(){
    // const dbms = await this.modalController.create({
    //   component : Tab9Page
    // });
    // dbms.present();
    this.router.navigate(['./tab9']);
  }
  async openHI(){
    // const hi = await this.modalController.create({
    //   component : Tab10Page
    // });
    // hi.present();
    this.router.navigate(['./tab10']);
  }
  async openISAD(){
    // const isad = await this.modalController.create({
    //   component : Tab11Page
    // });
    // isad.present();
    this.router.navigate(['./tab11']);
  }
  async openDD(){
    // const dd = await this.modalController.create({
    //   component : Tab12Page
    // });
    // dd.present();
    this.router.navigate(['./tab12']);
  }
  async openALGO(){
    // const algo = await this.modalController.create({
    //   component : Tab13Page
    // });
    // algo.present();
    this.router.navigate(['./tab13']);
  }

  ngOnInit() {
  }

}
