/* eslint-disable react/button-has-type */
// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {presentPage: 0}

  previousBtn = () => {
    const {presentPage} = this.state
    if (presentPage > 0) {
      this.setState(prevState => ({presentPage: prevState.presentPage - 1}))
    }
  }

  nextBtn = () => {
    const {presentPage} = this.state
    if (presentPage < 3) {
      this.setState(prevState => ({presentPage: prevState.presentPage + 1}))
    }
  }

  render() {
    const {presentPage} = this.state
    const {reviewsList} = this.props

    const {imgUrl, username, companyName, description} = reviewsList[
      presentPage
    ]

    return (
      <div className="bg-card">
        <h1 className="heading">Reviews</h1>
        <div className="review-card">
          <button
            onClick={this.previousBtn}
            type="button"
            className="left-arrow-btn"
            data-testid="leftArrow"
          >
            <img
              className="arrow-img"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="review-text-card">
            <img className="rev-img" src={imgUrl} alt={username} />
            <p className="name">{username}</p>
            <p className="role">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button
            onClick={this.nextBtn}
            className="left-arrow-btn"
            type="button"
            data-testid="rightArrow"
          >
            <img
              className="arrow-img"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
