import { PropsWithChildren } from "react";

export default function Card({ children }: PropsWithChildren) {
    return (
        <div className="bg-slate-100 py-2 px-0.5 gap-4 flex flex-col aspect-[1/1.2] border rounded-lg shadow">
            {children}
        </div>
    )
}