import { Photo } from "./photo";

export interface User {
  id: number;
  username: string;
  knownAs: string;
  age: number;
  gender: string;
  city: string;
  country: string;
  photoUrl: string;
  created?: Date;
  lastActive?: Date;
  interests?: string;
  introduction: string;
  lookingFor?: string;
  photos?: Photo[];
}
