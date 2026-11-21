export interface Link { label: string; url: string; }

export interface Profile {
  name: string;
  headline: string;
  valueProp: string;
  availability: string;
  available: boolean;
  bio: string;
  timezone: string;
  workMode: string;
  languages: string;
  cvUrl: string;
  email: string;
  links: Link[];
}

export type ThumbKind = 'tree' | 'bars' | 'steps' | 'grid';

export interface Project {
  id: number;
  slug: string;
  title: string;
  nda: boolean;
  scope: string;
  focus: string;
  tags: string[];
  thumb: ThumbKind;
  context: string;
  challenge: string;
  solution: string[];
  role: string[];
  outcome: string[];
  lessons: string[];
}

export interface Pattern { title: string; text: string; }
export interface StackColumn { id: number; title: string; items: string[]; }
