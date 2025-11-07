import { Speaker } from "../types/speaker";

export const speakers: Record<string, Speaker> = {
  "1": {
    id: "1",
    name: "Dr. Sarah Johnson",
    title: "Chief Technology Officer",
    company: "TechVision Inc.",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    bio: "Dr. Sarah Johnson is a visionary leader in artificial intelligence and machine learning with over 15 years of experience. She has pioneered innovative solutions in healthcare technology and has been recognized globally for her contributions to ethical AI development.",
    expertise: [
      "Artificial Intelligence",
      "Machine Learning",
      "Healthcare Tech",
      "Ethical AI",
      "Data Science",
    ],
    email: "sarah.johnson@techvision.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    website: "https://sarahjohnson.tech",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    twitter: "https://twitter.com/sarahjohnson",
    instagram: "https://instagram.com/sarahjohnson",
    github: "https://github.com/sarahjohnson",
    sessionTitle: "The Future of AI in Healthcare",
    sessionTime: "10:00 AM - 11:30 AM",
    sessionDate: "February 15, 2026",
    achievements: [
      "Forbes 30 Under 30 in Technology",
      "Published 50+ research papers",
      "Founded AI for Good Initiative",
      "TEDx Speaker (5M+ views)",
    ],
    yearsOfExperience: 15,
    language: ["English", "French", "Spanish"],
  },
  "2": {
    id: "2",
    name: "Ahmed Ben Amor",
    title: "Senior Software Architect",
    company: "Digital Innovations Algeria",
    photo:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    bio: "Ahmed Ben Amor is a passionate software architect specializing in cloud infrastructure and microservices. With a strong background in enterprise solutions, he has led multiple digital transformation projects across North Africa and Europe.",
    expertise: [
      "Cloud Computing",
      "Microservices",
      "DevOps",
      "System Architecture",
      "Blockchain",
    ],
    email: "ahmed.benamor@digitalinnovations.dz",
    phone: "+213 555 123 456",
    location: "Algiers, Algeria",
    website: "https://ahmedbenamor.dev",
    linkedin: "https://linkedin.com/in/ahmedbenamor",
    twitter: "https://twitter.com/ahmedbenamor",
    github: "https://github.com/ahmedbenamor",
    sessionTitle: "Building Scalable Cloud Solutions",
    sessionTime: "2:00 PM - 3:30 PM",
    sessionDate: "February 15, 2026",
    achievements: [
      "AWS Certified Solutions Architect",
      "Led 20+ enterprise migrations",
      "Author of 'Cloud Native Algeria'",
      "Community organizer",
    ],
    yearsOfExperience: 12,
    language: ["Arabic", "French", "English"],
  },
  "3": {
    id: "3",
    name: "Maria Rodriguez",
    title: "UX Design Director",
    company: "CreativeFlow Studio",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    bio: "Maria Rodriguez is an award-winning UX designer who believes in human-centered design. She has worked with Fortune 500 companies to create accessible and inclusive digital experiences that delight millions of users worldwide.",
    expertise: [
      "UX Design",
      "Product Strategy",
      "Design Systems",
      "Accessibility",
      "User Research",
    ],
    email: "maria.rodriguez@creativeflow.com",
    phone: "+34 612 345 678",
    location: "Barcelona, Spain",
    website: "https://mariarodriguez.design",
    linkedin: "https://linkedin.com/in/mariarodriguez",
    twitter: "https://twitter.com/mariarodriguez",
    instagram: "https://instagram.com/mariarodriguez",
    sessionTitle: "Designing for Inclusivity and Impact",
    sessionTime: "11:45 AM - 1:15 PM",
    sessionDate: "February 15, 2026",
    achievements: [
      "Red Dot Design Award Winner",
      "Lead designer for 100M+ user products",
      "Keynote at UXDX Conference",
      "Published UX design book",
    ],
    yearsOfExperience: 10,
    language: ["Spanish", "English", "Catalan"],
  },
  "4": {
    id: "4",
    name: "Youssef Mansouri",
    title: "Startup Founder & CEO",
    company: "InnovateDZ",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Youssef Mansouri is a serial entrepreneur who founded three successful tech startups in the MENA region. His current venture, InnovateDZ, is revolutionizing e-commerce in Algeria through innovative payment solutions and logistics.",
    expertise: [
      "Entrepreneurship",
      "E-commerce",
      "Fintech",
      "Business Strategy",
      "Startup Growth",
    ],
    email: "youssef@innovatedz.com",
    phone: "+213 770 123 456",
    location: "Oran, Algeria",
    website: "https://innovatedz.com",
    linkedin: "https://linkedin.com/in/youssefmansouri",
    twitter: "https://twitter.com/youssefmansouri",
    instagram: "https://instagram.com/youssefmansouri",
    facebook: "https://facebook.com/youssefmansouri",
    sessionTitle: "Building Startups in Emerging Markets",
    sessionTime: "3:45 PM - 5:15 PM",
    sessionDate: "February 15, 2026",
    achievements: [
      "Raised $5M in Series A funding",
      "Forbes 30 Under 30 MENA",
      "Scaled to 100K+ customers",
      "Mentor at Y Combinator",
    ],
    yearsOfExperience: 8,
    language: ["Arabic", "French", "English"],
  },
  /*
  "": {
    id: "",
    name: "",
    title: "",
    company: "",
    photo: "",
    bio: "",
    expertise: ["", "", "", "", ""],
    email: "",
    phone: "",
    location: "",
    website: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    github: "",
    sessionTitle: "",
    sessionTime: "",
    sessionDate: "",
    achievements: [
      "",
      "",
      "",
      ""
    ],
    yearsOfExperience: ,
    language: ["", "", ""]
  }
    */

  /*
  "": {
    id: "",
    name: "",
    title: "",
    company: "",
    photo: "",
    bio: "",
    expertise: ["", "", "", "", ""],
    email: "",
    phone: "",
    location: "",
    website: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    github: "",
    sessionTitle: "",
    sessionTime: "",
    sessionDate: "",
    achievements: [
      "",
      "",
      "",
      ""
    ],
    yearsOfExperience: ,
    language: ["", "", ""]
  }
    */
};

export function getSpeakerById(id: string): Speaker | undefined {
  return speakers[id];
}

export function getAllSpeakers(): Speaker[] {
  return Object.values(speakers);
}
