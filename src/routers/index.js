import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import { HeaderOnly } from '~/components/Layout';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/@:nickname', component: Profile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
