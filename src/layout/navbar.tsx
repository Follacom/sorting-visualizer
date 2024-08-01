import { MenuIcon, XIcon } from "lucide-react";
import Swap from "../components/swap";
import useDrawerStore from "../store/useDrawerStore";

export default function Navbar() {
    const [open, toggleDrawer] = useDrawerStore(store => [store.open, store.toggleDrawer])

    return (
        <nav className="fixed h-20 z-20 inset-0 flex px-7 space-x-6 border-b bg-inherit shadow">
            <div className="flex items-center">
                <Swap
                    off={<MenuIcon size="2rem" />}
                    on={<XIcon size="2rem" />}
                    onClick={() => toggleDrawer()}
                    defaultValue={open ? "on" : "off"}
                />
            </div>
            <div className="flex flex-grow items-center">
                <h1 className="text-2xl">
                    <a href="/">
                        Sorting Visualizer
                    </a>
                </h1>
            </div>
        </nav>
    )
}