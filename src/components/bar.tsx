export type BarProps = {
    value: number;
}

export default function Bar({ value }: BarProps) {
    return (
        <div style={{ height: `${value}%` }} className="bg-red-400 transition-[height] duration-500 ease-out overflow-clip flex-1 text-center">{value}</div>
    )
}