import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { RxJsDemo } from '../components/rxjs-demo/rxjs-demo.component';
import { ObjDemoComponent } from '../components/obj-demo/obj-demo.component';
import { ContentProjectionComponent } from '../components/content-projection/content-projection.component';

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent, RxJsDemo, ObjDemoComponent, ContentProjectionComponent],
	bootstrap: [AppComponent],
})
export class AppModule {}
