import { NgModule } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';

@NgModule({
	imports: [MessageModule, MessagesModule, ToastModule],
	exports: [MessageModule, MessagesModule, ToastModule],
	providers: [MessageService],
})
export class NGPrimeModule {}
