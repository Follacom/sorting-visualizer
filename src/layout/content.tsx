import { PropsWithChildren } from "react";
import useDrawerStore from "../store/useDrawerStore";

export default function Content({ children }: PropsWithChildren) {
    const [open, width] = useDrawerStore(store => [store.open, store.width])

    return (
        <>
            <div className={`${width[open ? "expanded" : "collapsed"]} transition-[width] duration-300 ease-in-out`}></div>
            <div className={`relative flex flex-col flex-grow ${open ? "before:absolute before:inset-0 before:z-10 before:pointer-events-none before:backdrop-blur-sm" : ""}`}>
                <div className={`flex-grow mx-4 my-2 ${open ? "overflow-hidden" : "overflow-auto"} max-w-6xl w-full mx-auto px-4 py-2`}>
                    {children}
                </div>
            </div >
        </>
    )
}