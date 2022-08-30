import React from "react";
import { Link } from "react-router-dom";
import { IFavorite } from "../dto";



export default function FavoriteButton({onFavoriteClick}:IFavorite) {
    return (
       <button  onClick={()=>onFavoriteClick()}>Favorite Movies</button>
     
    )
} 