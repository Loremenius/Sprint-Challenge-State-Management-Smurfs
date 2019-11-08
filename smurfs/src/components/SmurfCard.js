import React from "react";
import {useDispatch} from "react-redux";
import {removeSmurf} from "../actions";

const SmurfCard = ({name,height,age, id}) => {
    const dispatch = useDispatch();
    return(
        <div className="smurf">
            <h1>{name}</h1>
            <p>Height: {height}</p>
            <p>Age: {age}</p>
            <button onClick={()=>dispatch(removeSmurf(id))}>Remove</button>
        </div>
    )
}

export default SmurfCard;