import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-academics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.css']
})
export class AcademicsComponent {
  programs = [
    {
      title: 'Secondary School (8th - 10th)',
      grades: '8th, 9th, 10th',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop&q=80',
      description: 'Comprehensive secondary education following Maharashtra State Board curriculum',
      subjects: ['Marathi', 'English', 'Mathematics', 'Science', 'Social Studies', 'Hindi/Sanskrit'],
      features: [
        'Well-structured curriculum aligned with state board',
        'Regular assessments and progress tracking',
        'Focus on conceptual understanding',
        'Preparation for board examinations',
        'Extra-curricular activities integration'
      ]
    },
    {
      title: 'Arts College (11th - 12th)',
      grades: '11th, 12th',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&q=80',
      description: 'Higher secondary education in Arts stream with diverse subject options',
      subjects: ['Marathi', 'English', 'History', 'Political Science', 'Economics', 'Geography', 'Psychology', 'Sociology'],
      features: [
        'Wide range of Arts subjects',
        'Experienced faculty members',
        'Modern teaching methodologies',
        'Career guidance and counseling',
        'Preparation for competitive exams',
        'New building with enhanced facilities'
      ]
    },
    {
      title: 'Science College (11th - 12th)',
      grades: '11th, 12th (Coming Soon)',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop&q=80',
      description: 'Science stream education with well-equipped laboratories (Proposed)',
      subjects: ['Marathi', 'English', 'Physics', 'Chemistry', 'Biology', 'Mathematics'],
      features: [
        'State-of-the-art science laboratories',
        'Physics, Chemistry, and Biology labs',
        'Modern equipment and apparatus',
        'Experienced science faculty',
        'Preparation for medical and engineering entrance',
        'Computer science facilities'
      ],
      comingSoon: true
    }
  ];

  academicFeatures = [
    {
      icon: '📚',
      title: 'Quality Curriculum',
      description: 'Following Maharashtra State Board curriculum with additional enrichment programs'
    },
    {
      icon: '👨‍🏫',
      title: 'Experienced Faculty',
      description: 'Qualified and dedicated teachers committed to student success'
    },
    {
      icon: '📖',
      title: 'Library Resources',
      description: 'Well-stocked library with books, reference materials, and digital resources'
    },
    {
      icon: '📊',
      title: 'Regular Assessments',
      description: 'Continuous evaluation through tests, assignments, and projects'
    },
    {
      icon: '🎯',
      title: 'Career Guidance',
      description: 'Counseling and guidance for higher education and career choices'
    },
    {
      icon: '💻',
      title: 'Digital Learning',
      description: 'Integration of technology in teaching and learning processes'
    }
  ];
}

