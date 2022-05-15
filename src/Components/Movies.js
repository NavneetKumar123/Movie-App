import React, { Component } from 'react'
//import { movies } from './getMovies'
import axios from 'axios';

export default class Movies extends Component {
  constructor(){
    super();
    this.state={
      hover:'',
      parr:[1],
      currPage:1,
      movies:[],
    }
  }
   async componentDidMount(){
    //side effect
    const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=8b513897af008ef62de3fe7ff231f052&page=${this.state.currPage}`)
    let data=res.data
    //console.log(data);
    this.setState({
      movies:[...data.results]
    })
    
  }
   changeMovies=async() =>{
    const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=8b513897af008ef62de3fe7ff231f052&page=${this.state.currPage}`)
    let data=res.data
    //console.log(data);
    this.setState({
      movies:[...data.results]
    })
  }
  handleRight=()=>{
    let temparr =[]
    for(let i=1;i<=this.state.parr.length+1;i++){
        temparr.push(i);
    }
    this.setState({
        parr:[...temparr],
        currPage:this.state.currPage+1
    },this.changeMovies)
    
}
handleLeft=()=>{
  if(this.state.currPage!=1){
    this.setState({
      currPage:this.state.currPage-1

    },this.changeMovies)
  }
}
handleClick=(value)=>{
  if(value!=this.state.currPage){
      console.log("i am called")
      this.setState({
          currPage:value
      },this.changeMovies)
  }
}
  render() {
    //let movie = movies.results;
    //console.log('render')
    
    return (
     <>
     {
       this.state.movies.length==0?
       <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
          </div> :
          <div>
            <h3 className="text-center"><strong>Trending</strong></h3>
            <div  className="movies-list">
              {
                this.state.movies.map((movieObj) => (
                  <div className="card movies-card" onMouseEnter={() =>this.setState({hover:movieObj.id})} onMouseLeave={()=> this.setState({hover:""})}>
               <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} style={{height:'40vh',width:'20vw'}}   alt={movieObj.title} className="card-img-top banner-img"/>
            
           {/* <div className="card-body">*/}
              <h5 className="card-title movies-title">{movieObj.original_title}</h5>
              {/*<p className="card-text movies-text">{movieObj.overview}</p>*/}
              <div className="button-wrapper" style={{display:'flex',width:'100%',justifyContent:'center'}}>
                {
                  this.state.hover == movieObj.id &&
                   <a className="btn btn-primary movies-button">Add to favourite</a>
                }
              </div>
             
          </div> 
                ))
              }
               <div style={{display:'flex',justifyContent:'center'}}> 
                         <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item"><a className="page-link" onClick={this.handleLeft}>Previous</a></li>
                                {
                                    this.state.parr.map((value)=>(
                                        <li class="page-item"><a class="page-link" onClick={()=>this.handleClick(value)}>{value}</a></li>
                                    ))
                                }
                                <li class="page-item"><a class="page-link" onClick={this.handleRight}>Next</a></li>
                            </ul>
                        </nav> 
                         </div> 
            </div>
          </div>
     }
     </>
    )
  }
}

