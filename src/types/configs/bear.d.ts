export interface BearMdData {
  id: string;
  title: string;
  file: string;
  excerpt: string;
  link?: string;
}

export interface BearData {
  id: string;
  title: string;
  icon: JSX.Element;
  md: BearMdData[];
}
