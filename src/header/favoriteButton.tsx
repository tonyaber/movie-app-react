import React from "react";
import { Link } from "react-router-dom";
import { IFavorite } from "../dto";



export default function FavoriteButton({onFavoriteClick}:IFavorite) {
  return (
      <Link to='/favorite'>
        <button  onClick={()=>onFavoriteClick()}>Favorite Movies</button>
      </Link>
    )
} 