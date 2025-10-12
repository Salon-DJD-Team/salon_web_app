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
  video?: Video;
  localizations?: AboutEventData[];
}

export interface Description {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface Video {
  id: number;
  documentId: string;
  name: string;
  alternativeText: null;
  caption: null;
  width: null;
  height: null;
  formats: null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
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
  image: Image;
}

export interface Image {
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
