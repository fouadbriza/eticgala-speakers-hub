export interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  photo: string;
  bio: string;
  expertise: string[];
  email: string;
  phone: string;
  location: string;
  website?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  github?: string;
  facebook?: string;
  sessionTitle?: string;
  sessionTime?: string;
  sessionDate?: string;
  achievements?: string[];
  yearsOfExperience?: number;
  language?: string[];
}
