import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

function Review({ review }) {
    const fullStars = Math.floor(review.rating);
    const halfStar = review.rating % 1 !== 0;
    const messageLines = review.message.split("\n");

    return (
        <div className="review">
            <div className="review-name">{review.name}</div>
            <div className="review-rating">
                {[...Array(fullStars)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="icon" />
                ))}
                {halfStar && <FontAwesomeIcon icon={faStarHalfStroke} className="icon" />}
                <span className="review-date">{review.date}</span>
            </div>
            <p>
                {messageLines.map((line, index) => (
                    <span key={index}>
                        {line}
                        <br />
                    </span>
                ))}
            </p>
        </div>
    );
}

Review.propTypes = {
    review: PropTypes.shape({
        rating: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
    })
}

export default Review;