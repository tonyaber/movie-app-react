import React from "react";
import Model from '../model/model'
import MovieService from "../service/movieService";

export default class Controller{
  constructor(model: Model, server: MovieService) {
    server.getPopularMovie().then(data => {
      model.popularMovie = data;
      console.log(model.popularMovie)
    })
  }

  
}