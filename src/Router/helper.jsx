import AddBlog from "../Components/Pages/Admin/AddBlog";
import Admin from "../Components/Pages/Admin/Admin";
import DashboardHome from "../Components/Pages/Admin/DashboardHome";
import Home from "../Components/Pages/Home/Home";
import BlogDetail from "../Components/Pages/Blogs/BlogDetail";
import Blogs from "../Components/Pages/Admin/Blogs";

export const publicRoutes = [
    {
        path: "/",
        element: <Home />,
    }, {
        path: "/admin",
        element: <Admin />,
    }, {
        path: "/admin/blogs",
        element: <Blogs />,
    }, {
        path: "/admin/blog/create",
        element: <AddBlog />,
    }, 
    {
        path: "/admin/dashboard",
        element: <DashboardHome />,
    },
    {
        path: "/news",
        element: <BlogDetail />,
    },
]