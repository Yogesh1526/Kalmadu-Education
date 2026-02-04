import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  upcomingEvents = [
    {
      title: 'Annual Day Celebration',
      date: '2024-03-15',
      time: '6:00 PM',
      location: 'School Auditorium',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop&q=80',
      description: 'Join us for our annual day celebration featuring cultural programs, award ceremonies, and student performances.',
      category: 'Cultural'
    },
    {
      title: 'Science Exhibition',
      date: '2024-02-20',
      time: '10:00 AM - 4:00 PM',
      location: 'School Grounds',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop&q=80',
      description: 'Students will showcase their science projects and experiments. Open to all students and parents.',
      category: 'Academic'
    },
    {
      title: 'Parent-Teacher Meeting',
      date: '2024-02-10',
      time: '2:00 PM - 5:00 PM',
      location: 'Classrooms',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop&q=80',
      description: 'Quarterly parent-teacher meeting to discuss student progress and academic performance.',
      category: 'Academic'
    },
    {
      title: 'Sports Tournament',
      date: '2024-02-25',
      time: '8:00 AM - 6:00 PM',
      location: 'School Playground',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80',
      description: 'Inter-school sports tournament featuring cricket, football, and athletics competitions.',
      category: 'Sports'
    },
    {
      title: 'Career Guidance Workshop',
      date: '2024-03-05',
      time: '11:00 AM - 1:00 PM',
      location: 'Seminar Hall',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80',
      description: 'Workshop for 10th and 12th students on career options and higher education opportunities.',
      category: 'Academic'
    },
    {
      title: 'Environment Day Celebration',
      date: '2024-06-05',
      time: '9:00 AM - 12:00 PM',
      location: 'School Campus',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop&q=80',
      description: 'Tree plantation drive and awareness programs on environmental conservation.',
      category: 'Social'
    }
  ];

  getEventsByCategory(category: string) {
    return this.upcomingEvents.filter(event => event.category === category);
  }
}

