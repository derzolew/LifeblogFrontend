import { Profile } from './profile.model';
import { Like } from './like.model';

export class Post {
  id: number;
  date: Date;
  post: string;
  title: string;
  likes: Like[];
  photoName: string;
  photoUrl: string;
  profileDto: Profile;
}
