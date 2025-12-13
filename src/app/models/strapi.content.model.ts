export interface StrapiHomepageModel {
  data: HomePageData;
  meta: Meta;
}

export interface HomePageData {
  id: number;
  documentId: string;
  title: string;
  subtitle: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  localizations?: HomePageData[];
}

export interface StrapiAboutEventModel {
  data: AboutEventData;
  meta: Meta;
}

export interface AboutEventData {
  id: number;
  documentId: string;
  title: string;
  subtitle: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  descriptions?: Description[];
  video?: Media;
  localizations?: AboutEventData[];
}

export interface Description {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface StrapiPavilionModel {
  data: ListWithTitleData;
  meta: Meta;
}
export interface StrapiSectorActivityModel {
  data: ListWithTitleData;
  meta: Meta;
}
export interface StrapiPartnersModel {
  data: ListWithTitleImageData;
  meta: Meta;
}

export interface StrapiNewsletterContentModel {
  data: StrapiNewsLetterData;
  meta: Meta;
}
export interface StrapiSpeakersContentModel {
  data: StrapiSpeakersData;
  meta: Meta;
}

export interface StrapiJobPostsContentModel {
  data: StrapiJobPostsData;
  meta: Meta;
}

export interface StrapiFaqsContentModel {
  data: StrapiFaqsData;
  meta: Meta;
}

export interface StrapiFaqsData {
  id: number;
  documentId: string;
  title: string;
  subtitle: string;
  list: FaqItem[];
}

export interface FaqItem {
  id: number;
  documentId: string;
  question: string;
  answer: string;
}

export interface StrapiJobPostsData {
  id: number;
  documentId: string;
  title: string;
  subtitle: string;
  job_posts: JobPostItem[];
}

export interface JobPostItem {
  id: number;
  documentId: string;
  title: string;
  company: string;
  description: string;
  location: string;
  type: string;
  companyLogo: Media;
  requirements: string[];
  postedDate: string;
  externalLink: string;
}

export interface StrapiSpeakersData {
  id: number;
  documentId: string;
  title: string;
  subtitle: string;
  list: SpeakerItem[];
}

export interface SpeakerItem {
  id: number;
  documentId: string;
  name: string;
  designation: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  image: Media;
  socials: SocialLink[];
}

export interface SocialLink {
  id: number;
  url: string;
  icon: string;
}

export interface StrapiNewsLetterData {
  id: number;
  documentId: string;
  title: string;
  subtitle: string;
  magazines: Magazine[];
}

export interface Magazine {
  id: number;
  documentId: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  file: Media;
  poster: Media;
}

export interface ListWithTitleData {
  id: number;
  documentId: string;
  title: string;
  subtitle: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  items?: Item[];
  localizations?: ListWithTitleData[];
}
export interface ListWithTitleImageData {
  id: number;
  documentId: string;
  title: string;
  subtitle: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  items?: ItemWithImage[];
  localizations?: ListWithTitleData[];
}

export interface Item {
  id: number;
  icon: string;
  title: string;
  description: string;
}
export interface ItemWithImage {
  id: number;
  icon: string;
  title: string;
  image: Media;
}

export interface Media {
  id: number;
  documentId: string;
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  hash: string;
  size: number;
  url: string;
  previewUrl: null;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface StrapiFooterContentModel {
  data: FooterContentData;
  meta: Meta;
}

export interface FooterContentData {
  id: number;
  documentId: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  leftSide: Side;
  centerSide: Side;
  social_networks: SocialNetwork[];
}

export interface Side {
  id: number;
  icon?: string;
  title: string;
  description: null | string;
  image?: Media;
}

export interface SocialNetwork {
  id: number;
  documentId: string;
  icon: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Meta {}
