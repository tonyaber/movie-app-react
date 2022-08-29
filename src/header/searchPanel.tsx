import React from "react";
import { ISearchPanel } from "../dto";

export default function SearchPanel({onSearchPanel}:ISearchPanel){
    return (
      <>
        <input onChange= {(e)=>onSearchPanel(e.target.value)} type="text"/>
      </>
    )
} 