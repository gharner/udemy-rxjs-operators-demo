import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentProjectionComponent } from '../components/content/content-projection/content-projection.component';
import { FirecloudComponent } from '../components/firecloud/firecloud.component';
import { LoginComponent } from '../components/login/login.component';
import { ObjDemoComponent } from '../components/obj-demo/obj-demo.component';
import { RxJsDemo } from '../components/rxjs-demo/rxjs-demo.component';
import { StartComponent } from '../components/start/start.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
	{ path: '', component: StartComponent, canActivate: [AuthGuard] },
	{ path: 'contentProjection', component: ContentProjectionComponent, canActivate: [AuthGuard] },
	{ path: 'firecloudDemo', component: FirecloudComponent, canActivate: [AuthGuard] },
	{ path: 'objectDemo', component: ObjDemoComponent, canActivate: [AuthGuard] },
	{ path: 'rxjsDemo', component: RxJsDemo, canActivate: [AuthGuard] },
	{ path: 'login', component: LoginComponent },
	{ path: '**', redirectTo: '/login' },
];
@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forRoot(routes)],
	providers: [AuthGuard],
})
export class AppRoutingModule {}
