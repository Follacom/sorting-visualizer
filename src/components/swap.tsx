import { ReactNode, useState } from "react"

type SwapProps = {
    type?: "base" | "rotate" | "flip";
    on: ReactNode;
    off: ReactNode;
    onClick?: (state: "on" | "off") => void;
    defaultValue?: "on" | "off"
}

const SwapVariants = {
    base: "",
    rotate: "swap-rotate",
    flip: "swap-flip"
}

export default function Swap({ type = "base", on, off, onClick = () => { }, defaultValue = "off" }: SwapProps) {
    const [state, setState] = useState<"on" | "off">(defaultValue)

    return (
        <div
            className={`group relative inline-grid select-none place-content-center cursor-pointer [&>*]:col-start-1 [&>*]:row-start-1 [&>*]:duration-300 [&>*]:ease-out [&>*]:transition-[transform, opacity] ${SwapVariants[type]} ${state}`}
            onClick={() => {
                setState(previousState => previousState === "off" ? "on" : "off")
                onClick(state);
            }}
        >
            <div className="group-[.on]:opacity-100 opacity-0">{on}</div>
            <div className="group-[.on]:opacity-0">{off}</div>
        </div>
    )
}