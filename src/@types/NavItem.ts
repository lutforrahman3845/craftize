import { type LucideIcon } from 'lucide-react';

export interface NavItem {
  id: string;
  title?: string;
  icon?: LucideIcon;
  path?: string;
  new?: {
    tooltip: string;
    path: string;
  };
}

export type NavConfig = NavItem[];