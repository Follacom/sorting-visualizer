import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import ErrorBoundary from "./components/errorBoundary";

export default function createRouter() {
    return createBrowserRouter([
        {
            path: "/",
            Component: Root,
            ErrorBoundary: ErrorBoundary
        },
    ])
}