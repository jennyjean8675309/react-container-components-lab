// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
    const { reviewObj: {byline, headline, link, multimedia, publication_date, summary_short} } = props
    return (
        <div className="review-list">
            <div className="review">
                <h4>{headline}</h4>
                <h5>by {byline}, on {publication_date}</h5>
                <p>Review summary:</p>
                { summary_short.length > 0 ? <p>{summary_short}</p> : <p>There is no summary provided for this review."</p> }
                <a href={link.url} target="blank">Full review</a>
            </div>
        </div>
    )
}

export default MovieReviews