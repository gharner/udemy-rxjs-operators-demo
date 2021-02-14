import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule, SETTINGS } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { firebase } from '../../environments/environment';
import { AppComponent } from '../app.component';
import { ContentProjectionComponent } from '../components/content/content-projection/content-projection.component';
import { ContentComponent } from '../components/content/content.component';
import { FirecloudComponent } from '../components/firecloud/firecloud.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { ObjDemoComponent } from '../components/obj-demo/obj-demo.component';
import { RxJsDemo } from '../components/rxjs-demo/rxjs-demo.component';
import { StartComponent } from '../components/start/start.component';
import { AppRoutingModule } from '../routings/app.routing.module';
import { MaterialModule } from './material.module';
import { NGPrimeModule } from './ngprime.module';

@NgModule({
	imports: [
		AngularFireAuthModule,
		AngularFireModule.initializeApp(firebase.Cfg, 'afs'),
		AngularFirestoreModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		FormsModule,
		MaterialModule,
		NGPrimeModule,
	],
	declarations: [
		AppComponent,
		ContentComponent,
		ContentProjectionComponent,
		FirecloudComponent,
		LayoutComponent,
		ObjDemoComponent,
		RxJsDemo,
		StartComponent,
	],
	providers: [{ provide: SETTINGS, useValue: {} }],
	bootstrap: [AppComponent],
})
export class AppModule {}
