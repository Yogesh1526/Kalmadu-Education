import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-announcements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent {
  announcements = [
    {
      id: 1,
      title: 'New Arts College Building - Construction Update',
      date: '2024-01-20',
      category: 'Infrastructure',
      priority: 'high',
      content: 'The construction of the new Arts college building is progressing well. The foundation work is complete and we are now working on the superstructure. The building is expected to be ready by mid-2024. This will provide enhanced facilities for our 11th and 12th Arts students.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'Admission Open for Academic Year 2024-25',
      date: '2024-01-18',
      category: 'Admissions',
      priority: 'high',
      content: 'Admissions are now open for the academic year 2024-25. We are accepting applications for 8th, 9th, 10th, 11th Arts, and 12th Arts. Interested parents and students can visit the school office or contact us for more information. Last date for submission: March 31, 2024.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'Science College Proposal - Community Meeting',
      date: '2024-01-15',
      category: 'General',
      priority: 'medium',
      content: 'A community meeting will be held on February 5, 2024, to discuss the proposal for establishing a Science college. All parents, students, and community members are invited to attend and share their views. The meeting will be held at the school premises at 4:00 PM.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop&q=80'
    },
    {
      id: 4,
      title: 'Library Timings Extended',
      date: '2024-01-12',
      category: 'Facilities',
      priority: 'medium',
      content: 'The school library will now remain open from 8:00 AM to 5:00 PM on all working days. Students can use the library for study, reference, and borrowing books. New books have been added to the collection.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&q=80'
    },
    {
      id: 5,
      title: 'Parent-Teacher Meeting Schedule',
      date: '2024-01-10',
      category: 'Academic',
      priority: 'high',
      content: 'The next parent-teacher meeting is scheduled for February 10, 2024, from 2:00 PM to 5:00 PM. Parents are requested to attend to discuss their child\'s academic progress. Please bring your child\'s report card and previous meeting notes.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop&q=80'
    },
    {
      id: 6,
      title: 'Holiday List - Academic Year 2024-25',
      date: '2024-01-08',
      category: 'Academic',
      priority: 'medium',
      content: 'The holiday list for the academic year 2024-25 has been published. Please check the school notice board or contact the office for the complete list. Important dates include Diwali vacation, winter break, and summer vacation.',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop&q=80'
    },
    {
      id: 7,
      title: 'New Teaching Staff Appointments',
      date: '2024-01-05',
      category: 'General',
      priority: 'low',
      content: 'We are pleased to announce the appointment of three new teachers: Mrs. Sunita Patil (Mathematics), Mr. Rajesh Deshmukh (Science), and Ms. Priya Kulkarni (Marathi Literature). They bring valuable experience and expertise to our faculty.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop&q=80'
    },
    {
      id: 8,
      title: 'Scholarship Applications Open',
      date: '2024-01-03',
      category: 'Financial',
      priority: 'high',
      content: 'Scholarship applications for economically disadvantaged students are now open. Eligible students can apply for various government and private scholarships. Application forms are available at the school office. Last date: February 15, 2024.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80'
    }
  ];

  selectedAnnouncement: any = null;

  openAnnouncement(announcement: any) {
    this.selectedAnnouncement = announcement;
  }

  closeAnnouncement() {
    this.selectedAnnouncement = null;
  }

  getPriorityClass(priority: string) {
    return `priority-${priority}`;
  }
}

