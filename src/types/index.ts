export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
}

export interface Skills {
  Frontend: string[];
  Backend: string[];
  Database: string[];
  Tools: string[];
}

export interface Tab {
  id: string;
  name: string;
  icon: React.ReactNode;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
