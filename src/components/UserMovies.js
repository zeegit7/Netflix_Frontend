import React, { Component } from 'react';
import UserHeader from './UserHeader';
import FooterMainPage from './FooterMainPage';
import {Button , Table} from 'react-bootstrap';
//import {history} from '../utils/utils';
import '../App.css';

const headers = {
  'Accept': 'application/json'
};

var year = 0;
var avgStars = parseFloat(0.0);
var genreUrl = '';
var genre = '';
var actorsUrl = '';
var actors = '';
var directorUrl = '';
var director = '';
var ratingUrl = '';
var rating = '';

const getUserInventoryUrl = 'http://localhost:8080/movies/getAllMovies';

var filterMoviesUrl = 'http://localhost:8080/movies/filter?year='+year+'&avgStars='+avgStars+genreUrl+genre+actorsUrl+actors+directorUrl+director+ratingUrl+rating;

var keywordSearchMovieUrl = 'http://localhost:8080/movies/search/';

class UserMovies extends Component {

    constructor(props){

        super(props);
 
        this.state = {
    
          user_inventory: [],
          filterGenre : false,
          filterActors : false,
          filterDirector : false,
          filterRating : false,
          filterStars : false,
          filterYear : false,
          errors : [],
          showErrorMessages:false,
          messageType : "alert alert-light" 

        };

        this.keywordSearchMovie = {

          "keyword":""

      };

      this.filterSearchMovie = {

        "stars":"",
        "actors":"",
        "director":"",
        "genre":"",
        "year":"",
        "mpaa_rating":""

    };
    
      }


      get_user_inventory(){

          //api call

          fetch(`${getUserInventoryUrl}`, {
            method: 'GET',
            credentials:'include',
            mode: 'cors',
            headers: { ...headers,'Content-Type': 'application/json'}
          }).then(res => res.json())
            .then(res => {
                if(res){
                  console.log("res", res);
                  this.setState({user_inventory: res})
                }
                else{
                    console.log("no data!")
                  }
            }).catch(err => {
                console.log("Server error!!!",err);
                return err;
                });



      }

      componentWillMount(){

        this.get_user_inventory();
      
      }

      handlePlayMovie(i){

        console.log("View clicked")

        console.log(this.state.user_inventory[i].title)

        this.props.handleMoviePlay(this.state.user_inventory[i]);


      }



      handleKeywordSearchMovies(){

        this.state.errors  = [];

        console.log("Keyword Search clicked")

        console.log(this.keywordSearchMovie.keyword)

        if(this.keywordSearchMovie.keyword.length<=0){
          console.log("empty keyword field")
          this.state.errors.push("Please enter keyword");
          this.setState({messageType:"alert alert-danger"})
          return
        }

        keywordSearchMovieUrl = keywordSearchMovieUrl + this.keywordSearchMovie.keyword;

                   // api call
            fetch(`${keywordSearchMovieUrl}`, {
                method: 'GET',
                credentials:'include',
                mode: 'cors',
                headers: { ...headers,'Content-Type': 'application/json' }
            }).then(res => res.json())
            .then(res => {
              console.log("res",res)
                if(res){
                    console.log("keyword search movie Success!!")
                    this.state.errors=[];
                    this.setState({user_inventory: res,messageType:"alert alert-light"})
                    
                  }
                else{
                    console.log("keyword search error!!")
                    
                  }
                }).catch(err => {
                    console.log("Server error keyword search movie");
                    return err;
                    });

          keywordSearchMovieUrl = 'http://localhost:8080/movies/search/';

      }

      handleFilterMovies(){

        this.state.errors  = [];

        console.log("Filter Search clicked")

        filterMoviesUrl = 'http://localhost:8080/movies/filter?year='+year+'&avgStars='+avgStars+genreUrl+genre+actorsUrl+actors+directorUrl+director+ratingUrl+rating;

        console.log("filterMoviesUrl",filterMoviesUrl);

        if(!this.filterSearchMovie.stars && !this.filterSearchMovie.actors && !this.filterSearchMovie.director && !this.filterSearchMovie.genre && !this.filterSearchMovie.year && !this.filterSearchMovie.mpaa_rating){
            this.state.errors.push("Please select at least 1 filter parameter!");
        }


        if(this.state.filterYear){
          if(isNaN(parseFloat(this.filterSearchMovie.year))){
            this.state.errors.push("Enter valid year for filter!");
          }
        }



        if(this.state.filterStars){
          if(isNaN(parseFloat(this.filterSearchMovie.stars))){
            this.state.errors.push("Enter valid stars for filter!");
          }
        }


        if(this.state.filterActors){
          if(this.filterSearchMovie.actors.length<1){
            this.state.errors.push("Enter actors!");
          }
        }

        if(this.state.filterDirector){
          if(this.filterSearchMovie.director.length<1){
            this.state.errors.push("Enter director!");
          }
        }

        if(this.state.filterGenre){
          if(this.filterSearchMovie.genre.length<1){
            this.state.errors.push("Enter genre!");
          }
        }

        if(this.state.filterRating){
          if(this.filterSearchMovie.mpaa_rating.length<1){
            this.state.errors.push("Enter rating!");
          }
        }

        if(this.state.errors.length>0){
          this.setState({messageType:"alert alert-danger"})
          return
        }



                     // api call
            fetch(`${filterMoviesUrl}`, {
                method: 'GET',
                credentials:'include',
                mode: 'cors',
                headers: { ...headers,'Content-Type': 'application/json' }
            }).then(res => res.json())
            .then(res => {
              console.log("res",res)
                if(res){
                    console.log("filter movie Success!!")
                    this.state.errors=[];
                    this.setState({user_inventory: res,messageType:"alert alert-light"})
                    
                  }
                else{
                    console.log("filter movie error!!")
                    
                  }
                }).catch(err => {
                    console.log("Server error filter movie");
                    return err;
                    });



      }

      checkStarsFilter(){

        if(this.state.filterStars === false){

          console.log("checkStarsFilter set to True");

          this.state.filterStars = true;

          avgStars = parseFloat(this.filterSearchMovie.stars);

        }else if(this.state.filterStars === true){

          console.log("checkStarsFilter set to False");

          this.state.filterStars = false;

          avgStars = parseFloat(0.0);

        }



      }

      checkYearFilter(){

        if(this.state.filterYear === false){

          console.log("checkYearFilter set to True");

          this.state.filterYear = true;

          year = parseInt(this.filterSearchMovie.year);

        }else if(this.state.filterYear === true){

          console.log("checkYearFilter set to False");

          this.state.filterYear = false;

          year = parseInt(0);

        }

      }

      checkRatingFilter(){

        if(this.state.filterRating === false){

          console.log("checkRatingFilter set to True");

          this.state.filterRating = true;

          ratingUrl = '&rating=';

          console.log("updated rating",this.filterSearchMovie.mpaa_rating)

          rating = this.filterSearchMovie.mpaa_rating;

          console.log("rating=",rating)

        }else if(this.state.filterRating === true){

          console.log("checkRatingFilter set to False");

          this.state.filterRating = false;

          ratingUrl = '';
          rating = '';

        }

      }

      checkActorsFilter(){

        if(this.state.filterActors === false){

          console.log("checkActorsFilter set to True");

          this.state.filterActors = true;

          actorsUrl = '&actors=';
          actors = this.filterSearchMovie.actors;

        }else if(this.state.filterActors === true){

          console.log("checkActorsFilter set to False");

          this.state.filterActors = false;

          actorsUrl = '';
          actors = '';

        }

      }

      checkDirectorFilter(){

        if(this.state.filterDirector === false){

          console.log("checkDirectorFilter set to True");

          this.state.filterDirector = true;

          directorUrl = '&director=';
          director = this.filterSearchMovie.director;

        }else if(this.state.filterDirector === true){

          console.log("checkDirectorFilter set to False");

          this.state.filterDirector = false;

          directorUrl = '';
          director = '';

        }

      }

      checkGenreFilter(){

        if(this.state.filterGenre === false){

          console.log("checkGenreFilter set to True");

          this.state.filterGenre = true;

          genreUrl = '&genre=';
          genre = this.filterSearchMovie.genre;

        }else if(this.state.filterGenre === true){

          console.log("checkGenreFilter set to False");

          this.state.filterGenre = false;

          genreUrl = '';
          genre = '';

        }

      }


    render() {

      let errors = this.state.errors.map((error, i)=>{
        return(

            <div className="alert alert-danger" role="alert">
                {error}
            </div>

    )});

        let user_inventory = this.state.user_inventory.map((inventoryItem, i)=>{
            return(

                <tr key={i}>
     
                <td>{inventoryItem.title}</td>
      
                <td>{inventoryItem.genre}</td>
      
                <td>{inventoryItem.year}</td>
      
                <td>{inventoryItem.studio}</td>

                <td>{inventoryItem.actors}</td>
      
                <td>{inventoryItem.director}</td>
      
                <td>{inventoryItem.rating}</td>

                <td>{inventoryItem.avgStars}</td>

                <td>{inventoryItem.price}</td>
      
                <td><Button bsStyle="primary" onClick={()=>{this.handlePlayMovie(i)}}>{inventoryItem.availability}</Button></td>
      
              </tr>
      
        )});

      return (

        <div>

            <div>
                <UserHeader/>
            </div>

            <br/><br/>


          <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">



            <div className={this.state.messageType}>

              {errors}

            </div>

              <br></br>

              <h3 className="text-muted">Search Movie:</h3>
              <br></br>



              <form id="search-movie-form">
              <div className="container-fluid">
                  <div className="row">

                      <div className="col-md-11">

                        <input name="keyword" className="inp" placeholder ="Enter keyword" required = {true} onChange= {(e)=>{this.keywordSearchMovie.keyword=e.target.value}}/> 
                        
                      </div>

                      <Button bsStyle="primary" onClick={()=> {this.handleKeywordSearchMovies()}}>
                        Search
                      </Button>
                      
                    </div>

              </div>
              </form>

              <br></br>
              <br></br>




              <form id="filter-movie-form">
              <div className="container-fluid">
                  <div className="row">


                  <div className="col-md-2">

                  <input name="synopsis" className="inp" placeholder ="Filter on stars" onChange= {(e)=>{this.filterSearchMovie.stars=e.target.value}}/>

                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" onChange={() => this.checkStarsFilter()}/>
                            <label className="form-check-label">
                              Stars
                            </label>
                          </div>
                  </div>


                  <div className="col-md-2 ">

                  <input name="actors" className="inp" placeholder ="Filter on actors" onChange= {(e)=>{this.filterSearchMovie.actors=e.target.value}}/>

                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" onChange={() => this.checkActorsFilter()}/>
                            <label className="form-check-label">
                              Actors
                            </label>
                          </div>
                  </div>


                  <div className="col-md-2">
                  <input name="director" className="inp" placeholder ="Filter on director" onChange= {(e)=>{this.filterSearchMovie.director=e.target.value}}/>

                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" onChange={() => this.checkDirectorFilter()}/>
                            <label className="form-check-label">
                              Director
                            </label>
                          </div>

                  </div>

                  <div className="col-md-2">

                  <input name="genre" className="inp" placeholder ="Filter on genre" onChange= {(e)=>{this.filterSearchMovie.genre=e.target.value}}/>

                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" onChange={() => this.checkGenreFilter()}/>
                            <label className="form-check-label">
                              Genre
                            </label>
                          </div>
                  </div>


                  <div className="col-md-2">
                  <input name="year" className="inp" placeholder ="Filter on year" onChange= {(e)=>{this.filterSearchMovie.year=e.target.value}}/>

                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" onChange={() => this.checkYearFilter()}/>
                            <label className="form-check-label">
                              Year
                            </label>
                          </div>
                  </div>

                  {/* <div className="col-md-2"></div> */}

                  <div className="col-md-2">

                  <input name="mpaa_rating" className="inp" placeholder ="Filter MPAA rating" onChange= {(e)=>{this.filterSearchMovie.mpaa_rating=e.target.value}}/>

                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" onChange={() => this.checkRatingFilter()}/>
                            <label className="form-check-label">
                              MPAA_Rating
                            </label>
                          </div>

                  </div>

                  <br></br>

                  <div style = {{float:'right'}}>

                  </div>

                    </div>

                </div>
              </form>

              <Button bsStyle="primary" onClick={()=> {this.handleFilterMovies()}}>
                    Filter
              </Button>
                        
              <br></br>
              <br></br>

                            <br></br>
              <br></br>

              <div className="container-fluid">
                <Table className = "table table-striped" striped bordered condensed hover responsive>
                <thead className="thead-dark">
                    <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Year</th>
                    <th>Studio</th>
                    <th>Actors</th>
                    <th>Director</th>
                    <th>Mpaa_Rating</th>
                    <th>Stars</th>
                    <th>Price</th>
                    <th>Play</th>
                    </tr>
                </thead>
                <tbody>
                {user_inventory}
                </tbody>
                </Table>
              </div>



 



          </div>
          <div className="col-sm-1"></div>
        </div>

             


            <br/><br/>

            <div>
                <FooterMainPage/>
            </div>
            
  
        </div>

      );
    }
  }
  
  export default UserMovies;