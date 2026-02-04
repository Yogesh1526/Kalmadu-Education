import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  stats: any[] = [];

  constructor(public translationService: TranslationService) {}

  ngOnInit() {
    this.updateStats();
    this.translationService.getCurrentLanguage().subscribe(() => {
      this.updateStats();
    });
  }

  updateStats() {
    this.stats = [
      { number: '15+', label: this.translationService.translate('home.stats.years'), icon: '📅' },
      { number: '500+', label: this.translationService.translate('home.stats.students'), icon: '👥' },
      { number: '25+', label: this.translationService.translate('home.stats.teachers'), icon: '👨‍🏫' },
      { number: '3', label: this.translationService.translate('home.stats.programs'), icon: '🎓' }
    ];
  }

  get features() {
    return [
      {
        icon: '🏫',
        title: this.translationService.translate('home.features.secondary'),
        description: this.translationService.translate('home.features.secondaryDesc')
      },
      {
        icon: '📚',
        title: this.translationService.translate('home.features.arts'),
        description: this.translationService.translate('home.features.artsDesc')
      },
      {
        icon: '🔬',
        title: this.translationService.translate('home.features.science'),
        description: this.translationService.translate('home.features.scienceDesc')
      },
      {
        icon: '🌳',
        title: this.translationService.translate('home.features.infrastructure'),
        description: this.translationService.translate('home.features.infrastructureDesc')
      }
    ];
  }

  testimonials = [
    {
      name: 'Rajesh Patil',
      role: 'Parent',
      text: 'Madhyamik Vidyalay Kalmadu has provided excellent education to my children. The teachers are dedicated and the facilities are good.',
      rating: 5
    },
    {
      name: 'Priya Deshmukh',
      role: 'Alumni (2020)',
      text: 'I am grateful for the education I received at this school. The supportive teachers helped me excel in my studies.',
      rating: 5
    },
    {
      name: 'Vikram Jadhav',
      role: 'Parent',
      text: 'The school has been a blessing for our village. My son is studying in 11th Arts and the quality of education is excellent.',
      rating: 5
    }
  ];

  latestNews = [
    {
      title: 'New Arts College Building Construction Progress',
      date: '2024-01-15',
      excerpt: 'Construction of the new Arts college building is progressing well...'
    },
    {
      title: 'Annual Sports Day 2024 - A Grand Success',
      date: '2024-01-10',
      excerpt: 'The annual sports day was celebrated with great enthusiasm...'
    },
    {
      title: 'Science College Proposal Approved',
      date: '2024-01-05',
      excerpt: 'The village committee has approved the proposal for establishing a Science college...'
    }
  ];

  upcomingEvents = [
    {
      title: 'Annual Day Celebration',
      date: '2024-03-15',
      location: 'School Auditorium'
    },
    {
      title: 'Science Exhibition',
      date: '2024-02-20',
      location: 'School Grounds'
    },
    {
      title: 'Parent-Teacher Meeting',
      date: '2024-02-10',
      location: 'Classrooms'
    }
  ];
}

