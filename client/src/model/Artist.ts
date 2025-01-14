import { PageInfo } from './Common';

export interface ArtistData {
  artistId: 1;
  artistname: string;
  artistImg?: string;
  snslink: string;
  content: string;
}

export interface ArtistDataProps {
  artistname: string;
  artistImg?: string;
  snslink: string;
  content: string;
}

// 실제 API 응답으로부터 얻은 타입
export interface Artist {
  artistId: number;
  artistName: string;
  category: string;
  content: string;
  createdAt: string;
  imageUrl: string;
  memberId: number;
  profileImageUrl?: string;
  snsLink: string;
}

export interface ArtistList {
  data: Artist[];
  pageInfo: PageInfo;
}

export interface ArtistReview {
  nickName: string;
  reviewTitle: string;
  artistId?: number;
  content: string;
  createdAt: string;
}
