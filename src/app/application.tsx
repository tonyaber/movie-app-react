import React, { useState } from "react";
import Header from '../header/header';
import Preview from '../preview/preview';
import List from '../list/list';



export default function Application() {
 
    return (
      <>
        <Header />
        <Preview/>
        <List/>
      </>
    )
} 