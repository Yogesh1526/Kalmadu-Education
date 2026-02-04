import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  contactInfo = {
    address: 'Kalmadu, Chalisgaon Block, Jalgaon District, Maharashtra, India',
    phone: '+91 XXXXX XXXXX',
    email: 'info@kalmaduschool.edu.in',
    hours: 'Monday - Saturday: 8:00 AM - 5:00 PM'
  };

  onSubmit() {
    console.log('Form submitted:', this.contactForm);
    alert('Thank you for your message! We will get back to you soon.');
    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  }
}

