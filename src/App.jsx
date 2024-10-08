import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Cart from "./pages/Cart";
import ProductContextProvider, {
    ProductContext,
} from "./contexts/ProductContext";

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/",
                element: <Cart />,
            },
        ],
    },
]);
function App() {
    return (
        <>
            <ProductContextProvider>
                <RouterProvider router={router} />
            </ProductContextProvider>
        </>
    );
}

export default App;
