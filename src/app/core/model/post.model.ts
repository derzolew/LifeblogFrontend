import { Profile } from './profile.model';

export class Post {
  id: number;
  date: Date;
  post: string;
  title: string;
  photoName: string;
  photoUrl: string;
  profileDto: Profile;
}
