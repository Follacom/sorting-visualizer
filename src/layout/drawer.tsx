import useDrawerStore from "../store/useDrawerStore"

export default function Drawer() {
    const [open, width] = useDrawerStore(store => [store.open, store.width])

    return (
        <div className={`fixed h-full transition-[width] duration-300 ease-in-out z-20 ${width[open ? "expanded" : "collapsed"]} shadow overflow-hidden border-r bg-inherit`}>
            <div className="mx-4 my-2">
                Drawer
            </div>
        </div>
    )
}