import React from "react";
import {Plus,Moins,Reset} from "../actions/plus-moin";
import { useDispatch, useSelector} from 'react-redux'

function Dez(){

    const dispatch = useDispatch()
     const value = useSelector(state=>state)
     
     const incriment = ()=> {
        dispatch(Plus())}

     const decriment = ()=>{
        dispatch(Moins())}

     const reset = ()=>{
        dispatch(Reset())}

return (
    <div>
       
        <h1>{value}</h1>
        <button onClick={()=>incriment()}>Plus</button>
        <button onClick={decriment}>Moins</button>
        <button onClick={reset}>Fasa5</button>

    </div>
)

}

export default Dez