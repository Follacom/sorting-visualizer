import { useMemo, useState } from "react";
import randomBars from "../lib/randomBars";
import shuffle from "../lib/shuffle";
import Bar from "./bar";

export type SortProps = {
    range?: number;
    title?: string;
    sort?: (bars: Array<{ id: string; value: number }>) => Array<{ id: string; value: number }>
}

export default function Sort({ range = 10, title = "Sorting Algorithm", sort = (bars) => {
    const tmp = [...bars]
    tmp.sort((a, b) => a.value - b.value)
    return bars.map((bar, index) => ({ ...bar, value: tmp[index].value }))
} }: SortProps) {
    const bars = useMemo(() => randomBars(range), [range])
    const [barValues, setBarValues] = useState(Object.fromEntries(bars.map(bar => [bar.id, bar.value])))

    return (
        <>
            <div className="flex justify-center underline bold text-xl">{title}</div>
            <div className="flex justify-around">
                <button
                    className="px-2 py-0.5 border rounded"
                    type="button"
                    onClick={() => setBarValues(Object.fromEntries(sort(bars).map(bar => [bar.id, bar.value])))}
                >Start</button>
                <button
                    className="px-2 py-0.5 border rounded"
                    type="button"
                    onClick={() => setBarValues(Object.fromEntries(shuffle(bars).map(bar => [bar.id, bar.value])))}
                >Shuffle</button>
            </div>
            <div className="flex flex-grow items-end justify-around mx-2">
                {
                    bars.map(
                        bar => <Bar key={bar.id} value={barValues[bar.id]} />
                    )
                }
            </div>
        </>
    )
}