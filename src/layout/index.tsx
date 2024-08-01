import { PropsWithChildren } from "react";
import Navbar from "./navbar";
import Drawer from "./drawer";
import Content from "./content";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Navbar />
            <div className="mt-20 overflow-auto flex flex-grow bg-inherit">
                <Drawer />
                <Content>
                    {children}
                </Content>
            </div>
        </>
    )
}