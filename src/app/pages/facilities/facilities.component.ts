import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent {
  facilities = [
    {
      icon: '🏫',
      title: 'Classrooms',
      description: 'Well-ventilated and spacious classrooms with modern furniture. 1 dedicated classroom for instructional purposes and 2 additional rooms for non-teaching activities.',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop'
    },
    {
      icon: '📚',
      title: 'Library',
      description: 'A well-stocked library with approximately 100 books covering various subjects, reference materials, and educational resources to support student learning.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop'
    },
    {
      icon: '⚽',
      title: 'Playground',
      description: 'Spacious playground area for students to engage in sports and physical activities, promoting physical fitness and overall well-being.',
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&h=600&fit=crop'
    },
    {
      icon: '🚰',
      title: 'Drinking Water',
      description: 'Clean and safe tap water facility available throughout the school premises, ensuring students have access to fresh drinking water.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
    },
    {
      icon: '💡',
      title: 'Electricity',
      description: 'Functional electric connection providing adequate lighting and power supply for classrooms and other facilities, enabling modern teaching methods.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
    },
    {
      icon: '🚻',
      title: 'Sanitation',
      description: 'Separate functional toilets for boys and girls, maintaining hygiene standards and ensuring student comfort and safety.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
    },
    {
      icon: '🛣️',
      title: 'Accessibility',
      description: 'Located in a rural area with easy access via all-weather roads, making the school easily reachable for students from surrounding villages.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
    },
    {
      icon: '🏗️',
      title: 'New Building',
      description: 'A new Arts college building is currently under construction, which will provide modern facilities and expanded capacity for higher secondary education.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop'
    }
  ];
}

