import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login'
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { CvPage } from '../pages/cv/cv';
import { AboutPage } from '../pages/about/about';
import { SkillPage } from '../pages/skill/skill';

/**
 * Claire Gizard - 1106363
 */
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used to have a menu in the appbar
    this.pages = [
      { title: 'About', component: AboutPage},      
      { title: 'Contact', component: ContactPage},
      { title: 'CV', component: CvPage},
      { title: 'Skills', component: SkillPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
