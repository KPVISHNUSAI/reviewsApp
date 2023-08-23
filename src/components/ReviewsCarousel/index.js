// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReview: 0,
  }

  render() {
    const {reviewsList} = this.props
    const {activeReview} = this.state
    return (
      <div className="app-container">
        <div className="main-container">
          <h1>Reviews</h1>
        </div>
      </div>
    )
  }

  // const {imgUrl,username,companyName,description} = reviewDetails
}

export default ReviewsCarousel
