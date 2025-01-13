import { Component, inject } from '@angular/core';
import { Messaging } from '@angular/fire/messaging';
import { MessagingService } from './messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'poc-apa';

  private messaging = inject(Messaging);

  constructor(public msgService: MessagingService) {

  }

  getMessages() {
    console.log("Getting Messages");
    this.msgService.receiveMessage().subscribe((payload) => { 
      console.log("new message received. ", payload);
    });
  }

 
}
