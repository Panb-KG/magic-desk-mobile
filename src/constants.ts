import { LucideIcon, Home, BookOpen, Trophy, User, Calendar, Zap, Sparkles, Camera, Mic, Scroll, Castle, Brain, FlaskConical, Languages, Palette, History } from 'lucide-react';

export type View = 
  | 'home' 
  | 'chat' 
  | 'achievements' 
  | 'library' 
  | 'practice' 
  | 'schedule' 
  | 'tasks' 
  | 'archive' 
  | 'scanner' 
  | 'portal' 
  | 'camera' 
  | 'analysis' 
  | 'gateway' 
  | 'enrollment'
  | 'hub'
  | 'lesson'
  | 'spellbook'
  | 'store'
  | 'settings';

export interface NavItem {
  id: View;
  label: string;
  icon: LucideIcon;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: '魔法屋', icon: Home },
  { id: 'library', label: '图书馆', icon: BookOpen },
  { id: 'schedule', label: '课表', icon: Calendar },
  { id: 'achievements', label: '荣誉殿堂', icon: Trophy },
  { id: 'archive', label: '档案室', icon: User },
];

export const CATEGORIES = [
  { id: 'science', label: '魔法科学', icon: FlaskConical, color: 'text-emerald-400' },
  { id: 'literature', label: '文学咒语', icon: History, color: 'text-amber-200' },
  { id: 'math', label: '数学奥秘', icon: Brain, color: 'text-blue-300' },
  { id: 'languages', label: '异世界语言', icon: Languages, color: 'text-purple-300' },
  { id: 'art', label: '艺术炼金', icon: Palette, color: 'text-rose-300' },
];

export const TUTORS = [
  { id: 'hermione', name: '赫敏', role: '百科全书专家', avatar: 'https://picsum.photos/seed/hermione/200/200' },
  { id: 'dumbledore', name: '邓布利多', role: '人生智慧导师', avatar: 'https://picsum.photos/seed/dumbledore/200/200' },
  { id: 'hagrid', name: '海格', role: '温暖陪伴助手', avatar: 'https://picsum.photos/seed/hagrid/200/200' },
  { id: 'luna', name: '卢娜', role: '创意灵感大师', avatar: 'https://picsum.photos/seed/luna/200/200' },
];
