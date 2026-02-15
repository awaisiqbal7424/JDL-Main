export interface NavItem {
  label: string;
  path: string;
  isButton?: boolean;
}

export interface Publication {
  id: string;
  title: string;
  type: 'Report' | 'Policy Brief' | 'Case Study' | 'Blog';
  date: string;
  description: string;
  link: string;
}

export interface FocusArea {
  id: string;
  title: string;
  description: string;
  icon: 'chart' | 'book' | 'heart' | 'shield';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'system' | 'ai';
  content: string;
  timestamp: Date;
}