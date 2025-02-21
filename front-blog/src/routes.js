import { About } from "./page/AboutPage";
import { Admin } from "./component/AdminTemplates";
import { ArticleBlog } from "./page/BlogArticle";
import { ContactMe } from "./page/ContactMePage";
import { Home } from "./page/HomePage";
import { ABOUT_ROUTE, ADMIN_ROUTE, ARTICLE_BLOG_ROUTE, CONTACT_ME_ROUTE, HOME_ROUTE, HOME_START_ROUTE } from "./utils/constsRouter";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  
];

export const publicRoutes = [
  {
    path: HOME_START_ROUTE,
    Component: Home,
  },
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: ABOUT_ROUTE,
    Component: About,
  },
  {
    path: CONTACT_ME_ROUTE,
    Component: ContactMe,
  },
  {
    path: ARTICLE_BLOG_ROUTE,
    Component: ArticleBlog,
  },
];