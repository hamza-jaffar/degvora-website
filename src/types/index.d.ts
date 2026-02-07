export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface WayOfBuildingSoftware {
  id: number;
  title: string;
  long_description: string;
  short_description: string;
  comment: string;
  image: string;
}

export interface OurDesignAndDevelopmentProcess {
  id: number;
  title: string;
  description: string;
  icon_url: string;
  gradient_from: string;
  gradient_to: string;
}
