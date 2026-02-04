import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curriculum',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent {
  curriculumLevels = [
    {
      level: 'Secondary School (8th - 10th)',
      board: 'Maharashtra State Board of Secondary and Higher Secondary Education',
      description: 'Our secondary school curriculum follows the Maharashtra State Board guidelines, providing a strong foundation in core subjects.',
      subjects: [
        {
          name: 'Languages',
          details: ['Marathi (First Language)', 'English (Second Language)', 'Hindi/Sanskrit (Third Language)'],
          hours: '6 hours/week'
        },
        {
          name: 'Mathematics',
          details: ['Algebra', 'Geometry', 'Trigonometry', 'Statistics'],
          hours: '6 hours/week'
        },
        {
          name: 'Science',
          details: ['Physics', 'Chemistry', 'Biology', 'Environmental Science'],
          hours: '6 hours/week'
        },
        {
          name: 'Social Studies',
          details: ['History', 'Geography', 'Civics', 'Economics'],
          hours: '5 hours/week'
        },
        {
          name: 'Physical Education',
          details: ['Sports', 'Yoga', 'Health Education'],
          hours: '2 hours/week'
        }
      ]
    },
    {
      level: 'Arts College (11th - 12th)',
      board: 'Maharashtra State Board of Secondary and Higher Secondary Education',
      description: 'Higher secondary Arts stream offering diverse subjects for students interested in humanities, social sciences, and arts.',
      subjects: [
        {
          name: 'Compulsory Subjects',
          details: ['Marathi', 'English'],
          hours: '5 hours/week each'
        },
        {
          name: 'Optional Subjects (Choose 4)',
          details: ['History', 'Political Science', 'Economics', 'Geography', 'Psychology', 'Sociology', 'Philosophy'],
          hours: '5 hours/week each'
        },
        {
          name: 'Additional',
          details: ['Environmental Education', 'Physical Education'],
          hours: '2 hours/week each'
        }
      ]
    },
    {
      level: 'Science College (11th - 12th)',
      board: 'Maharashtra State Board of Secondary and Higher Secondary Education',
      description: 'Science stream curriculum designed for students aspiring to pursue careers in medicine, engineering, and research. (Coming Soon)',
      subjects: [
        {
          name: 'Compulsory Subjects',
          details: ['Marathi', 'English'],
          hours: '5 hours/week each'
        },
        {
          name: 'Core Science Subjects',
          details: ['Physics', 'Chemistry', 'Biology/Mathematics'],
          hours: '6 hours/week each'
        },
        {
          name: 'Practical Work',
          details: ['Physics Lab', 'Chemistry Lab', 'Biology Lab'],
          hours: '4 hours/week each'
        },
        {
          name: 'Additional',
          details: ['Environmental Education', 'Physical Education'],
          hours: '2 hours/week each'
        }
      ],
      comingSoon: true
    }
  ];

  teachingMethodology = [
    {
      icon: '📚',
      title: 'Interactive Learning',
      description: 'Engaging classroom sessions with discussions, group activities, and hands-on learning'
    },
    {
      icon: '💡',
      title: 'Conceptual Understanding',
      description: 'Focus on building strong conceptual foundation rather than rote learning'
    },
    {
      icon: '📊',
      title: 'Regular Assessments',
      description: 'Continuous evaluation through unit tests, assignments, and projects'
    },
    {
      icon: '🔬',
      title: 'Practical Application',
      description: 'Laboratory work and field visits to connect theory with real-world applications'
    },
    {
      icon: '👥',
      title: 'Individual Attention',
      description: 'Small class sizes ensuring personalized attention to each student'
    },
    {
      icon: '🎯',
      title: 'Exam Preparation',
      description: 'Dedicated preparation for board examinations and competitive tests'
    }
  ];
}

