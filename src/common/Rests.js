import globalRest from './globalRest';
import home from '../features/home/rest';
import auth from '../features/auth/rest';
import post from '../features/post/rest';
import about from '../features/about/rest';
import lab from '../features/lab/rest';
import comment from '../components/comment/rest';

export default {
  ...globalRest,
  ...home,
  ...auth,
  ...post,
  ...about,
  ...comment,
  ...lab,
}