import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  newsItems = [
    {
      id: 1,
      title: 'New Arts College Building Construction Progress',
      date: '2024-01-15',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80',
      excerpt: 'Construction of the new Arts college building is progressing well. The modern facility will include spacious classrooms, library, and computer lab.',
      content: 'We are excited to announce that the construction of our new Arts college building is progressing smoothly. The new facility will provide state-of-the-art infrastructure for our 11th and 12th Arts students. The building will feature modern classrooms, an expanded library, computer lab, and seminar hall.'
    },
    {
      id: 2,
      title: 'Annual Sports Day 2024 - A Grand Success',
      date: '2024-01-10',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80',
      excerpt: 'The annual sports day was celebrated with great enthusiasm. Students participated in various events and showcased their athletic talents.',
      content: 'The Annual Sports Day 2024 was celebrated with great enthusiasm and participation from all students. Various track and field events, team sports, and cultural activities were organized. The event was attended by parents, teachers, and local dignitaries.'
    },
    {
      id: 3,
      title: 'Science College Proposal Approved by Village Committee',
      date: '2024-01-05',
      category: 'Announcements',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop&q=80',
      excerpt: 'The village committee has approved the proposal for establishing a Science college. This will provide more educational opportunities for students.',
      content: 'Great news! The village committee has approved the proposal for establishing a Science college at our institution. This will enable students to pursue Science stream (11th and 12th) without having to travel to distant cities. The college will have well-equipped laboratories for Physics, Chemistry, and Biology.'
    },
    {
      id: 4,
      title: 'Library Expansion - New Books Added',
      date: '2023-12-20',
      category: 'Facilities',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&q=80',
      excerpt: 'Our library has been expanded with 50 new books covering various subjects. Students now have access to more educational resources.',
      content: 'We are pleased to announce that our library has been expanded with 50 new books covering various subjects including literature, science, history, and reference materials. This addition brings our total collection to over 150 books, providing students with more resources for their studies.'
    },
    {
      id: 5,
      title: 'Cultural Program - Republic Day Celebration',
      date: '2023-12-15',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop&q=80',
      excerpt: 'Students performed various cultural programs on Republic Day. The celebration included patriotic songs, dances, and speeches.',
      content: 'Republic Day was celebrated with great patriotic fervor. Students from all classes participated in cultural programs including patriotic songs, traditional dances, and speeches. The program was attended by parents and local community members.'
    },
    {
      id: 6,
      title: 'New Teachers Join Our Faculty',
      date: '2023-12-01',
      category: 'Announcements',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop&q=80',
      excerpt: 'We welcome three new qualified teachers to our faculty. They bring expertise in Mathematics, Science, and Marathi literature.',
      content: 'We are delighted to welcome three new qualified teachers to our faculty. They bring expertise in Mathematics, Science, and Marathi literature. This addition strengthens our teaching staff and will help us provide better education to our students.'
    }
  ];

  selectedNews: any = null;

  openNewsDetail(news: any) {
    this.selectedNews = news;
  }

  closeNewsDetail() {
    this.selectedNews = null;
  }
}

