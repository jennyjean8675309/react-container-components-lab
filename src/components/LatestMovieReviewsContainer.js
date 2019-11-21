import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            latestReviews: []
        }
    }

    componentDidMount() {
        fetch(URL)
        .then(resp => resp.json())
        .then(nytData => this.setState({
            latestReviews: nytData.results
        }))
    }

    displayLatestReviews = (latestReviews) => {
        return latestReviews.map(review => {
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
            <div className="latest-movie-reviews">
                <h3>Latest Movie Reviews from The New York Times:</h3>
                {this.displayLatestReviews(this.state.latestReviews)}
            </div>
        )
    }
}

export default LatestMovieReviewsContainer
