import AddBlog from "../Components/Pages/Admin/AddBlog";
import Admin from "../Components/Pages/Admin/Admin";
import Home from "../Components/Pages/Home/Home";

export const publicRoutes = [
    {
        path: "/",
        element: <Home />,
    }, {
        path: "/admin",
        element: <Admin />,
    }, {
        path: "/admin/blogs",
        element: <AddBlog />,
    },
]