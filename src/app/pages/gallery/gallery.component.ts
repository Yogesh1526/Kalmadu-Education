import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  selectedCategory = 'all';

  galleryItems = [
    {
      type: 'image',
      category: 'school',
      src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop&q=80',
      title: 'School Building',
      description: 'Main entrance of Madhyamik Vidyalay Kalmadu'
    },
    {
      type: 'image',
      category: 'school',
      src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop&q=80',
      title: 'Classroom',
      description: 'Well-equipped classrooms'
    },
    {
      type: 'image',
      category: 'facilities',
      src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&q=80',
      title: 'Library',
      description: 'School library with extensive collection'
    },
    {
      type: 'image',
      category: 'activities',
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80',
      title: 'Students Learning',
      description: 'Students engaged in learning activities'
    },
    {
      type: 'image',
      category: 'activities',
      src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&h=600&fit=crop&q=80',
      title: 'Sports Day',
      description: 'Annual sports day celebration'
    },
    {
      type: 'image',
      category: 'facilities',
      src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop&q=80',
      title: 'Playground',
      description: 'Spacious playground for students'
    },
    {
      type: 'image',
      category: 'activities',
      src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop&q=80',
      title: 'School Annual Day',
      description: 'Highlights from our annual day celebration'
    },
    {
      type: 'image',
      category: 'activities',
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80',
      title: 'Sports Events',
      description: 'Various sports competitions and events'
    },
    {
      type: 'image',
      category: 'school',
      src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop&q=80',
      title: 'School Assembly',
      description: 'Morning assembly with students'
    },
    {
      type: 'image',
      category: 'facilities',
      src: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop&q=80',
      title: 'Modern Classroom',
      description: 'Technology-enabled learning space'
    },
    {
      type: 'image',
      category: 'activities',
      src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&q=80',
      title: 'Cultural Events',
      description: 'Cultural programs and celebrations'
    },
    {
      type: 'video',
      category: 'school',
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      title: 'Campus Tour',
      description: 'Virtual tour of our school campus'
    }
  ];

  categories = [
    { id: 'all', name: 'All' },
    { id: 'school', name: 'School' },
    { id: 'facilities', name: 'Facilities' },
    { id: 'activities', name: 'Activities' }
  ];

  get filteredItems() {
    if (this.selectedCategory === 'all') {
      return this.galleryItems;
    }
    return this.galleryItems.filter(item => item.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
