import express from 'express';
// ? Import all my controllers
import recipeController from '../controllers/recipeController.js';
import userController from '../controllers/userController.js';
import reviewController from '../controllers/reviewController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

//Routes for recipeController
router.get('/', (req, res) => {
  res.status(200).send('API Running');
});

router.route('/recipes')
  .get(recipeController.index)
  .post(auth, recipeController.create);

router.route('/recipes/:id')
  .get(recipeController.show)
  .delete(auth,recipeController.remove)
  .put(auth,recipeController.update);

router.route('/recipes/recipe-type/:recipeType')
  .get(recipeController.showType);

router.route('/recipes/:id/review')
  .get(auth, reviewController.index)
  .post(auth, reviewController.create);

router.route('/recipes/:id/review/:reviewId')
  .put(auth, reviewController.update)
  .delete(auth, reviewController.remove);

router.route('/users')
  .get(auth, userController.index);

router.route('/register')
  .post(userController.register);
  
router.route('/login')
  .post(userController.login);

export default router;