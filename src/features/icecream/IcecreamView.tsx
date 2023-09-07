import { useAppDispatch, useAppSelector } from "../../apps/hooks"
import { ordered, restored } from "./icecreamSlice"

export const IcecreamView = () => {
    const numberOfIcecreams = useAppSelector((state) => state.icecream.numberOfIcecreams) 
    const dispatch = useAppDispatch()

    return (
        <div>
            <h2>Number of Icecreams - {numberOfIcecreams}</h2>
            <button onClick={() => dispatch(ordered())}>Order Icecreams</button>
            <button onClick={() => dispatch(restored(1))}>Restock Icecreams</button>
        </div>
    )
}