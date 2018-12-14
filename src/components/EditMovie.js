import React, { Component } from 'react';
import {history} from '../utils/utils';
import {Button} from 'react-bootstrap';
import '../App.css';
import AdminHeader from './AdminHeader';

const editMovieUrl = 'http://localhost:8080/movies/editMovie';


const headers = {
    'Accept': 'application/json'
};


class EditMovie extends Component {

    constructor(props){

        super(props);

        this.editMovieData = {
            
            "title":this.props.editMovieData.title,
            "genre":"",
            "year":"",
            "studio":"",
            "synopsis":"",
            "image_url":"",
            "movie_url":"",
            "actors":"",
            "director":"",
            "country":"",
            "rating":"",
            "availability":"",
            "price":""  

        };

    }


    handleEditMovie(e){

        console.log("handleEditMovie");

        if(!this.editMovieData.genre){
            this.editMovieData.genre = this.props.editMovieData.genre;
        }

        if(!this.editMovieData.year){
            this.editMovieData.year = parseInt(this.props.editMovieData.year);
        }

        if(!this.editMovieData.studio){
            this.editMovieData.studio = this.props.editMovieData.studio;
        }

        if(!this.editMovieData.synopsis){
            this.editMovieData.synopsis = this.props.editMovieData.synopsis;
        }

        if(!this.editMovieData.image_url){
            this.editMovieData.image_url = this.props.editMovieData.image_url;
        }

        if(!this.editMovieData.movie_url){
            this.editMovieData.movie_url = this.props.editMovieData.movie_url;
        }

        if(!this.editMovieData.actors){
            this.editMovieData.actors = this.props.editMovieData.actors;
        }

        if(!this.editMovieData.director){
            this.editMovieData.director = this.props.editMovieData.director;
        }

        if(!this.editMovieData.country){
            this.editMovieData.country = this.props.editMovieData.country;
        }

        if(!this.editMovieData.rating){
            this.editMovieData.rating = this.props.editMovieData.rating;
        }

        if(!this.editMovieData.availability){
            this.editMovieData.availability = this.props.editMovieData.availability;
        }

        if(!this.editMovieData.price){
            this.editMovieData.price = parseInt(this.props.editMovieData.price);
        }

        

        console.log("editMovieData",this.editMovieData);

        this.editMovieData.price = parseInt(this.editMovieData.price);
        this.editMovieData.year = parseInt(this.editMovieData.year);

        //api call
        fetch(`${editMovieUrl}`, {
            method: 'POST',
            credentials:'include',
            mode: 'cors',
            headers: { ...headers,'Content-Type': 'application/json' },
            body: JSON.stringify(this.editMovieData)
        }).then(res => res.json())
        .then(res => {
            if(res){
                console.log("Edit Movie Success!!")
                history.push("/adminMovies");
              }
            else{
                console.log("Edit Movie error!!")
              }
            }).catch(err => {
                console.log("Server error Edit Movie!!!");
                return err;
                });


    }

    handleCancelEditMovie(e){

        console.log("handleCancelEditMovie");

        history.push("/adminMovies");


    }


  render() {
    return (
      <div>

          <div>
            <AdminHeader/>
          </div>

        <form>
            <label>
                <h1 className="text-muted">Edit {this.props.editMovieData.title}</h1>
                <br></br>
                <input type="text" name="title"
                    readOnly
                    value = {this.props.editMovieData.title}
                />

                <br></br>
                <br></br>

                                <input type="text" name="genre"
                    onChange= {(e)=>{this.editMovieData.genre=e.target.value}}
                    defaultValue = {this.props.editMovieData.genre}
                />

<br></br>
                <br></br>

                                <input type="text" name="year"
                    onChange= {(e)=>{this.editMovieData.year=e.target.value}}
                    defaultValue = {this.props.editMovieData.year}
                />

<br></br>
                <br></br>

                                <input type="text" name="studio"
                    onChange= {(e)=>{this.editMovieData.studio=e.target.value}}
                    defaultValue = {this.props.editMovieData.studio}
                />

<br></br>
                <br></br>

                                <input type="text" name="synopsis"
                    onChange= {(e)=>{this.editMovieData.synopsis=e.target.value}}
                    defaultValue = {this.props.editMovieData.synopsis}
                />

<br></br>
                <br></br>

                                                <input type="text" name="image_url"
                    onChange= {(e)=>{this.editMovieData.image_url=e.target.value}}
                    defaultValue = {this.props.editMovieData.image_url}
                />

<br></br>
                <br></br>

                                                <input type="text" name="movie_url"
                    onChange= {(e)=>{this.editMovieData.movie_url=e.target.value}}
                    defaultValue = {this.props.editMovieData.movie_url}
                />

<br></br>
                <br></br>

                                                <input type="text" name="actors"
                    onChange= {(e)=>{this.editMovieData.actors=e.target.value}}
                    defaultValue = {this.props.editMovieData.actors}
                />

<br></br>
                <br></br>

                
                <input type="text" name="director"
                    onChange= {(e)=>{this.editMovieData.director=e.target.value}}
                    defaultValue = {this.props.editMovieData.director}
                />

<br></br>
                <br></br>

                
                <input type="text" name="country"
                    onChange= {(e)=>{this.editMovieData.country=e.target.value}}
                    defaultValue = {this.props.editMovieData.country}
                />
                                <br></br>
                <br></br>

                
                <input type="text" name="rating"
                    onChange= {(e)=>{this.editMovieData.rating=e.target.value}}
                    defaultValue = {this.props.editMovieData.rating}
                />

<br></br>
                <br></br>

                
                <input type="text" name="availability"
                    onChange= {(e)=>{this.editMovieData.availability=e.target.value}}
                    defaultValue = {this.props.editMovieData.availability}
                />

<br></br>
                <br></br>

                
                <input type="text" name="price"
                    onChange= {(e)=>{this.editMovieData.price=e.target.value}}
                    defaultValue = {this.props.editMovieData.price}
                />

            </label>
            <br></br>

            <br></br>

            <Button bsStyle="primary" onClick={()=> {this.handleEditMovie()}}>
                Edit
            </Button>

            <Button bsStyle="primary" style={{marginLeft:15}} onClick={()=> {this.handleCancelEditMovie()}}>
                Cancel
            </Button>

        </form>

      </div>
    );
  }
}

export default EditMovie;



