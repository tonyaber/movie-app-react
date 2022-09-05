import React from 'react';
import { IActor } from '../dto';
import { Actor } from './actor';

interface IActors {
  items: IActor[];
}
export default function Actors({ items }: IActors) {
  return (
    <>
      {items.map((it) => <Actor key={it.id} name={ it.name} url={it.profile_path} />)}
    </>
  )
  
}