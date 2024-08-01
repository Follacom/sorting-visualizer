import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import ErrorBoundary from "./components/errorBoundary";
import BubbleSort from "./routes/bubble";

export default function createRouter() {
    return createBrowserRouter([
        {
            path: "/",
            Component: Root,
            ErrorBoundary: ErrorBoundary,
        },
        {
            path: "/bubble",
            Component: BubbleSort
        }
    ])
}