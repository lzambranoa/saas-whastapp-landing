export interface TestimonialItem {
    name: string;
    role?: string;
    message: string;
    avatarUrl?: string;
  }
  
  export interface TestimonialsProps {
    sectionTitle: string;
    items: TestimonialItem[];
  }
  