import { NgModule } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';

@NgModule({
	imports: [ButtonModule, MessageModule, MessagesModule, ToastModule],
	exports: [ButtonModule, MessageModule, MessagesModule, ToastModule],
	providers: [MessageService],
})
export class NGPrimeModule {}
