export interface PosterCategory {
  id: number;
  title: string;
  type: PosterType;
  image?: string;
}

export type PosterType = 'display' | 'promotion' | 'branding' | 'announcement' | 'business';

export type TabType = 'Smart script' | 'Advanced script';

export interface SettingOption {
  label: string;
  value: string;
}