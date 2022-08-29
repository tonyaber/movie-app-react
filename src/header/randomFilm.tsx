import React from "react";
import { Link } from "react-router-dom";
import { IRandom } from "../dto";

export default function RandomFilm({onRandom}:IRandom) {
    const randomId = Math.floor(Math.random() * (80000 - 10000) + 10000);
    return (
        <Link to={"/movie" + randomId} onClick={()=>onRandom(randomId)}><button>Random Film</button></Link>
     
    )
} 