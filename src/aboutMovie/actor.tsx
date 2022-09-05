import React from "react";

interface IActor {
  url: string;
  name: string;
}
export function Actor({ url, name }: IActor) {
  return (
    <p>{name}</p>
  )
}