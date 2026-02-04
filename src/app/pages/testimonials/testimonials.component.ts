import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Rajesh Patil',
      role: 'Parent',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80',
      text: 'Madhyamik Vidyalay Kalmadu has provided excellent education to my children. The teachers are dedicated and the facilities are good. My daughter completed her 10th standard here and is now pursuing higher studies.',
      rating: 5
    },
    {
      name: 'Priya Deshmukh',
      role: 'Alumni (2020)',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80',
      text: 'I am grateful for the education I received at this school. The supportive teachers and good infrastructure helped me excel in my studies. Now I am studying in a college in Pune.',
      rating: 5
    },
    {
      name: 'Vikram Jadhav',
      role: 'Parent',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&q=80',
      text: 'The school has been a blessing for our village. My son is studying in 11th Arts and the quality of education is excellent. The new building will make it even better.',
      rating: 5
    },
    {
      name: 'Anjali Kulkarni',
      role: 'Current Student (12th Arts)',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&q=80',
      text: 'I love studying here. The teachers are very helpful and the environment is conducive for learning. The library has good books and the playground is spacious.',
      rating: 5
    },
    {
      name: 'Suresh Gaikwad',
      role: 'Village Head',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80',
      text: 'This school has transformed education in our village. Many students have gone on to achieve great things. The addition of Arts college and upcoming Science college will benefit our community greatly.',
      rating: 5
    },
    {
      name: 'Meera Pawar',
      role: 'Teacher',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&q=80',
      text: 'Teaching at this school has been a rewarding experience. The students are eager to learn and the management is supportive. We are committed to providing quality education to rural students.',
      rating: 5
    }
  ];
}

