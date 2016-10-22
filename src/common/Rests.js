import home from '../features/home/rest';
import auth from '../features/auth/rest';
import post from '../features/post/rest';
import about from '../features/about/rest';

export default {
  ...home,
  ...auth,
  ...post,
  ...about,
}