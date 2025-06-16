import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";
import UsersPage from "../pages/UsersPage";
import IncomingPage from "../pages/IncomingPage";
import OutgoingPage from "../pages/OutgoingPage";
import MatchesPage from "../pages/MatchesPage";

export const publicRoutes = [
    {
        path: '/login',
        Component: LoginPage
    },
    {
        path: '/register',
        Component: RegisterPage
    },
]

export const authRoutes = [
    {
        path: '/profile',
        Component: ProfilePage
    },
    {
        path: '/users',
        Component: UsersPage
    },
    {
        path: '/requests/incoming',
        Component: IncomingPage
    },
    {
        path: '/requests/outgoing',
        Component: OutgoingPage
    },
    {
        path: '/matches',
        Component: MatchesPage
    }
]