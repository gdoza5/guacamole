import express from 'express'
import MoviesController from './movies.controller.js'
import ReviewsController from './reviews.controller.js'

const router = express.Router()
router.route('/').get(MoviesController.apiGetMovies)
router
	.rout("/review")
	.post(ReviewsController.apiPostReview)
	.put(ReviewsController.apiUpdateReview)
	.delete(ReviewsController.apiDeleteReview)
export default router