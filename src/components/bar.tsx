export type BarProps = {
    value: number;
    color?: string;
}

export default function Bar({ value, color }: BarProps) {
    return (
        <div
            className="h-full bg-slate-100 flex flex-col flex-1 justify-end hover:scale-x-125 border rounded-lg hover:ring"
            title={`${value}`}
        >
            <div
                style={{ height: `${value}%` }}
                className={`${color ?? "bg-red-400"} transition-[height] duration-500 ease-out overflow-clip rounded-lg`}
            />
        </div>
    )
}