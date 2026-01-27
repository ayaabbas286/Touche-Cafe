import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-contact',
    imports: [CommonModule, FormsModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css'
})
export class ContactComponent {
  model = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  sendMessage() {
    // هنا يمكنك ربط EmailJS لاحقاً
    console.log('Form Submitted!', this.model);
    alert('Thank you! Your message has been sent.');

    // Reset form
    this.model = { name: '', email: '', subject: '', message: '' };
  }
}
