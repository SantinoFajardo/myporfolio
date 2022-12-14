export type skillsTraduction = {
  title: {
    ES: String;
    EN: String;
  };
  front: {
    ES: String;
    EN: String;
  };
  dataBases: {
    ES: String;
    EN: String;
  };
  others: {
    ES: String;
    EN: String;
  };
};

export type PROJECT = {
  title: string;
  image: string;
  descriptionES: string;
  descriptionEN: string;
  video?: string;
  technologies: TECHNOLOGIE[];
  deploy?: string;
  repository: string;
  props?: any;
};

export type CONTACT = {
  data: string;
  icon: string;
  link: string;
};

export type TECHNOLOGIE = {
  name: string;
  icon: string;
};
