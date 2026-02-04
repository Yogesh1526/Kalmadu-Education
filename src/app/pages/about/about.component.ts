import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  schoolInfo = {
    name: 'Madhyamik Vidyalay Kalmadu',
    established: '2008',
    location: 'Kalmadu, Chalisgaon Block, Jalgaon District, Maharashtra',
    type: 'Private Aided',
    medium: 'Marathi',
    gender: 'Co-educational (Boys and Girls)',
    accessibility: 'Accessible by all-weather roads'
  };

  programs = [
    {
      title: 'Secondary School',
      grades: '8th to 10th',
      description: 'Comprehensive secondary education with focus on academic excellence and holistic development.',
      status: 'Active',
      icon: '🏫'
    },
    {
      title: 'Arts College',
      grades: '11th and 12th',
      description: 'Higher secondary education in Arts stream with dedicated faculty and modern curriculum.',
      status: 'Active (New Building in Progress)',
      icon: '📚'
    },
    {
      title: 'Science College',
      grades: '11th and 12th',
      description: 'Science stream education with well-equipped laboratories and experienced teachers.',
      status: 'Coming Soon',
      icon: '🔬'
    }
  ];

  values = [
    { icon: '🎯', title: 'Excellence', description: 'Striving for academic and personal excellence in all endeavors' },
    { icon: '🤝', title: 'Community', description: 'Building strong connections with the local community and parents' },
    { icon: '💡', title: 'Innovation', description: 'Embracing modern teaching methods and educational technology' },
    { icon: '❤️', title: 'Care', description: 'Nurturing each student with personalized attention and support' }
  ];
}

