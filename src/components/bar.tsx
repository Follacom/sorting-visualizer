export type BarProps = {
    id: string;
    value: number;
    color?: string;
}

export default function Bar({ id, value, color }: BarProps) {
    return (
        <div
            className="h-full bg-slate-100 flex flex-col flex-1 justify-end hover:scale-x-125 border rounded-lg hover:ring"
            title={`${id}`}
        >
            <div
                style={{ height: `${value}%` }}
                className={`${color ?? "bg-red-400"} transition-[height] duration-500 ease-out overflow-clip rounded-lg`}
                title={`${value}`}

            />
        </div>
    )
}