import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { RxJsDemo } from '../components/rxjs-demo/rxjs-demo.component';
import { ObjDemoComponent } from '../components/obj-demo/obj-demo.component';

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent, RxJsDemo, ObjDemoComponent],
	bootstrap: [AppComponent],
})
export class AppModule {}
