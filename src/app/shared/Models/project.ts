export interface Project {
  id: number;
  image: string;
  keywordsNames: keywordsNames[];
  title: string;
  description: string;
  videoLink: string;
  facebookLink: string;
  instagramLink: string;
  youtubeLink: string;
  tiktokLink: string
}

export interface keywordsNames { id: number, title: string }
export interface ProjectImage {
  id: number;
  image: string;
  title: string;
  projectId: number
}
