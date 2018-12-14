import React, { Component } from 'react';
import '../App.css'
import {Button} from 'react-bootstrap';

const addMovieUrl= 'http://localhost:8080/movies/addMovie';
const headers = {
    'Accept': 'application/json'
};


class AddMovie extends Component {

    constructor(){

        super();

        this.state={

          errors : [],
          showErrorMessages:false,
          messageType : "alert alert-light" 

        };

        this.newMovie = {

            "genre":"",
            "actors":"",
            "studio":"",
            "synopsis":"",
            "image_url":"",
            "movie_url":"",
            "director":"",
            "country":"",
            "title":"",
            "availability":"",
            "price":"" ,
            "rating":"",
            "year":"" 

        };

    }

    resetAddForm(){

        document.getElementById("add-movie-form").reset();

    }


    handleAddMovie(e){

        this.state.errors=[];
        this.setState({messageType:"alert-alert-light"})

        console.log(" In handleAddMovie")

        this.newMovie.year = parseInt(this.newMovie.year);

        this.newMovie.price = parseInt(this.newMovie.price);

        console.log("newMovie",this.newMovie);

        if(isNaN(this.newMovie.year)){
            console.log("enter valid year")
          this.state.errors.push("Enter valid year!");
        }

        if(isNaN(this.newMovie.price)){
          this.state.errors.push("Enter valid price!");
        }


        if(!this.newMovie.title || !this.newMovie.actors || !this.newMovie.director  || !this.newMovie.year
             || !this.newMovie.rating || !this.newMovie.genre || !this.newMovie.studio || !this.newMovie.synopsis || !this.newMovie.image_url || !this.newMovie.movie_url
             || !this.newMovie.country || !this.newMovie.availability || !this.newMovie.price){
            this.state.errors.push("All fields are mandatory!");
            console.log("errros",this.state.errors)
            console.log("All fields are mandatory!");
        }




          if(this.state.errors.length>0){
            this.setState({messageType:"alert alert-danger"})
            return
          }
    




            //api call
        fetch(`${addMovieUrl}`, {
            method: 'POST',
            credentials:'include',
            mode: 'cors',
            headers: { ...headers,'Content-Type': 'application/json' },
            body: JSON.stringify(this.newMovie)
        }).then(res => res.json())
        .then(res => {
            console.log("res",res)
                console.log("AddMovie Success!!")
                this.state.errors=[];
                this.setState({messageType:"alert alert-light"})
                this.props.handleAddMovie();
            }).catch(err => {
                console.log("AddMovie server error");
                return err;
                });


        this.resetAddForm();

    }


  render() {

    let errors = this.state.errors.map((error, i)=>{
        return(

            <div className="alert alert-danger" role="alert">
                {error}
            </div>

    )});

    return (
      <div >

        <div className = "container">

            <div className={this.state.messageType}>

                {errors}

            </div>

        </div>

        <br></br>

            <form id="add-movie-form">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-12">
                            <input  className="inp" name="title" placeholder ="Enter title" required = {true} onChange= {(e)=>{this.newMovie.title=e.target.value}}/>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="col-md-12">
                            <input name="genre" className="inp" placeholder ="Enter genre" onChange= {(e)=>{this.newMovie.genre=e.target.value}}/>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="col-md-12">
                            <input name="year" className="inp" placeholder ="Enter year" onChange= {(e)=>{this.newMovie.year=e.target.value}}/>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="col-md-12">
                            <input name="studio" className="inp" placeholder ="Enter studio" required = {true} onChange= {(e)=>{this.newMovie.studio=e.target.value}}/>   
                        </div>
                        <br></br>
                        <br></br>
                        <div className="col-md-12">
                            <input name="synopsis" className="inp" placeholder ="Enter synopsis" onChange= {(e)=>{this.newMovie.synopsis=e.target.value}}/>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="col-md-12">
                        <input name="image_url" className="inp" placeholder ="Enter image_url" onChange= {(e)=>{this.newMovie.image_url=e.target.value}}/>

                        </div>
                        <br></br>
                        <br></br>
                        <div className="col-md-12">
                        <input name="movie_url" className="inp" placeholder ="Enter movie_url" onChange= {(e)=>{this.newMovie.movie_url=e.target.value}}/>

                        </div>
                        <br></br>
                        <br></br>
                        <div className="col-md-12">
                        <input name="actors" className="inp" placeholder ="Enter actors" onChange= {(e)=>{this.newMovie.actors=e.target.value}}/>

                        </div>
                        <br></br>
                        <br></br>
                        <div className="col-md-12">
                        <input name="director" className="inp" placeholder ="Enter director" onChange= {(e)=>{this.newMovie.director=e.target.value}}/>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="col-md-12">
                        <input name="country" className="inp" placeholder ="Enter country" onChange= {(e)=>{this.newMovie.country=e.target.value}}/>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="col-md-12">
                        <input name="rating" className="inp" placeholder ="Enter rating" onChange= {(e)=>{this.newMovie.rating=e.target.value}}/>

                        </div>
                        <br></br>
                        <br></br>
                        <div className="col-md-12">
                        <input name="availability" className="inp" placeholder ="Enter availability" onChange= {(e)=>{this.newMovie.availability=e.target.value}}/>
                        </div>
                        <br></br>
                        <br></br>
                            <div className="col-md-12">
                            <input name="price" className="inp" placeholder ="Enter price" onChange= {(e)=>{this.newMovie.price=e.target.value}}/>
                            </div>
                            
                      </div>

                      <br></br>
                      
                            <Button bsStyle="primary" onClick={()=> {this.handleAddMovie()}}>
                                Add
                            </Button>

                    </div>
              
            </form>


            
      </div>
    );
  }
}

export default AddMovie;



