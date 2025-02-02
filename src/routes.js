import Home from './components/home'
import { lazy } from 'react';

const Users = lazy(() => import("./components/users"));
const AboutUs = lazy(() => import("./components/about"));
const NotFound = lazy(() => import("./components/notFound"));
const UserProfile = lazy(() => import("./components/userProfile"));
const SearchUser = lazy(() => import("./components/searchUser"));
const Login = lazy(() => import("./components/login"));
const AuthProfile = lazy(() => import("./components/authProfile"));
const RepoDetail = lazy(() => import("./components/repoDetail"));


export const  Approutes = [
  {
    path: "/",
    component: Home,
    required: false,
  },
  {
    path: "/users",
    component: Users,
    required: false,
  },
  {
    path: "/users/user/:username",
    component: UserProfile,
    required: false,
  },
  {
    path: "/about",
    component: AboutUs,
    required: false,
  },
  {
    path: "/search",
    component: SearchUser,
    required: false,
  },
  {
    path: "/login",
    component: Login,
    required: false,
  },
  {
    path: "/authProfile",
    component: AuthProfile,
    required: true,
  },
  {
    path: "/repoDetails/:name/:username",
    component: RepoDetail,
    required: false,
  },
  {
    path: "*",
    component: NotFound,
    required: false,
  },
];