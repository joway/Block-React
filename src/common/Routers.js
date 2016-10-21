import App from './App';
import PageNotFound from '../components/PageNotFound';
import Login from '../features/auth/containers/Login';
import homeRoute from '../features/home/router';
import postRoute from '../features/post/router';
import aboutRoute from '../features/about/router';
import timelineRoute from '../features/timeline/router';
import labRoute from '../features/lab/router';
import photoRoute from '../features/photo/router';
import bullshitRoute from '../features/bullshit/router';
import { requireAuthentication } from '../utils/auth';

export default [{
  path: '',
  component: App,
  childRoutes: [
    homeRoute,
    timelineRoute,
    labRoute,
    aboutRoute,
    bullshitRoute,
    postRoute,
    photoRoute,
    { path: 'login', name: 'Login', component: Login },
    { path: '*', name: 'Page not found', component: PageNotFound },
    // { path: '404', name: 'Page not found', component: requireAuthentication(PageNotFound) },
  ],
}];