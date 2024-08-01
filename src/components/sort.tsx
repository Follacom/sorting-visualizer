import { useCallback, useMemo, useRef, useState } from "react";
import randomBars, { Bars } from "../lib/randomBars";
import shuffle from "../lib/shuffle";
import Bar from "./bar";

export type SortProps = {
    range?: number;
    title?: string;
    delay?: number;
    href?: string;
    sort: (arr: Array<Bars>) => Generator<
        Array<Bars>,
        void,
        [Bars, Bars]
    >
}

export default function Sort({ range = 10, delay = 100, href = "#", title = "Sorting Algorithm", sort }: SortProps) {
    const bars = useMemo(() => randomBars(range), [range])
    const [barValues, setBarValues] = useState<{ [k: string]: Omit<Bars, "id"> }>(Object.fromEntries(bars.map(bar => [bar.id, { value: bar.value }])))
    const intervalRef = useRef<number>()
    const algo = useRef(sort(bars))

    const display = useCallback(() => {
        const { value, done } = algo.current.next()

        if (done) {
            clearInterval(intervalRef.current)
            setBarValues(previousValue => {
                Object.values(previousValue).forEach(b => b.color = "bg-green-400")
                return { ...previousValue }
            })
            return
        }

        if (value) {
            const [first, second] = value
            setBarValues(previousValue => {
                previousValue[first.id].color = "bg-green-400"
                previousValue[second.id].color = "bg-green-400"
                return { ...previousValue }
            })
            setTimeout(() => {
                setBarValues(previousValue => ({
                    ...previousValue,
                    [first.id]: { ...first, color: "bg-green-400" },
                    [second.id]: { ...second, color: "bg-green-400" }
                }))
            }, delay)
            setTimeout(() => {
                setBarValues(previousValue => ({
                    ...previousValue,
                    [first.id]: { ...first, color: undefined },
                    [second.id]: { ...second, color: undefined }
                }))
            }, delay * 2)
        }
    }, [algo, delay])

    const start = useCallback(() => {
        algo.current = sort(bars)
        setTimeout(() => {
            intervalRef.current = setInterval(display, delay * 3)
        }, delay)

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [bars, delay, display, sort])

    return (
        <>
            <div className="flex justify-center underline bold text-xl"><a href={href}>{title}</a></div>
            <div className="flex justify-around">
                <button
                    className="px-2 py-0.5 border rounded"
                    type="button"
                    onClick={() => start()}
                >Start</button>
                <button
                    className="px-2 py-0.5 border rounded"
                    type="button"
                    onClick={() => clearInterval(intervalRef.current)}
                >Stop</button>
                <button
                    className="px-2 py-0.5 border rounded"
                    type="button"
                    onClick={() => setBarValues(Object.fromEntries(shuffle(bars).map(bar => [bar.id, { value: bar.value }])))}
                >Shuffle</button>
            </div>
            <div className="flex flex-grow items-end justify-around mx-2 gap-1">
                {
                    bars.map(
                        bar => <Bar key={bar.id} value={barValues[bar.id]?.value || 0} color={barValues[bar.id]?.color} />
                    )
                }
            </div>
        </>
    )
}