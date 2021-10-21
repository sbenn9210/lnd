import Connect from "../pages/Connect";
import CreatePost from "../pages/CreatePost";
import PostList from "../pages/PostList";

const routes = [
  {
    path: "/",
    component: PostList,
    protected: false,
  },
  {
    path: "/connect",
    component: Connect,
    protected: false,
  },
  {
    path: "/create",
    component: CreatePost,
    protected: false,
  },
];

export default routes;
