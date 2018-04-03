import { Profile } from './profile.model';

export class Post {
  id: number;
  date: Date;
  post: string;
  profileDto: Profile;
}
