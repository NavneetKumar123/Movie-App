import React, { Component } from 'react'
import { movies } from './getMovies'

export default class Movies extends Component {
  render() {
    let movie = movies.results;
    
    return (
     <>
     {
       movie.length == 0?
       <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
          </div> :
          <div>
            <h3 className="text-center"><strong>Trending</strong></h3>
            <div  className="movies-list">
              {
                movie.map((movieObj) => (
                  <div className="movies-card banner-card">
               <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} style={{height:'40vh',width:'20vw'}}   alt={movieObj.title} className="card-img-top banner-img"/>
            
           {/* <div className="card-body">*/}
              <h5 className="card-title movies-title">{movieObj.original_title}</h5>
              {/*<p className="card-text movies-text">{movieObj.overview}</p>*/}
              <div className="button-wrapper" style={{display:'flex',width:'100%',justifyContent:'center'}}>
              <a href="#" className="btn btn-primary movies-button">Add to favourite</a>
              </div>
             
          </div> 
                ))
              }
            </div>
          </div>
     }
     </>
    )
  }
}

