import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            searchedReviews: [],
            searchText: ''
        }
    }

    handleOnChange = (event) => {
        this.setState({
            searchText: event.target.value
        })
    }

    fetchReviews = (event) => {
        event.preventDefault()
        fetch(`${URL}&query=${this.state.searchText}`)
        .then(resp => resp.json())
        .then(searchedReviews => this.setState({
            searchedReviews: searchedReviews.results
        }))
    }

    displaySearchedReviews = (reviews) => {
        return reviews.map(review => {
            return (
                <MovieReviews 
                key={review.display_title}
                reviewObj={review}
                />
            )
        })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <h3>Search for Reviews</h3>
                <form onSubmit={this.fetchReviews}>
                    <input type="text" value={this.state.searchText} onChange={this.handleOnChange} />
                    <input type="submit" />
                </form>
                {this.displaySearchedReviews(this.state.searchedReviews)}
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer