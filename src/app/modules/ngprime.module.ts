import { NgModule } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';

@NgModule({
	imports: [ButtonModule, CardModule, MessageModule, MessagesModule, ToastModule],
	exports: [ButtonModule, CardModule, MessageModule, MessagesModule, ToastModule],
	providers: [MessageService],
})
export class NGPrimeModule {}
