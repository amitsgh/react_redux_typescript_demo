import { useAppDispatch, useAppSelector } from "../../apps/hooks"
import { ordered, restocked } from "./cakeSlice"

export const CakeView = () => {
    const numberOfCakes = useAppSelector((state) => state.cake.numberOfCakes) 
    const dispatch = useAppDispatch()

    return (
        <div>
            <h2>Number of Cakes - {numberOfCakes}</h2>
            <button onClick={() => dispatch(ordered())}>Order Cakes</button>
            <button onClick={() => dispatch(restocked(11))}>Restock Cakes</button>
        </div>
    )
}