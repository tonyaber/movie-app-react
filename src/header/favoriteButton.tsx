import React from "react";
import { Link } from "react-router-dom";

export default function FavoriteButton() {
  return (
      <Link to='/favorite'>
        <button>Favorite Movies</button>
      </Link>
    )
} 