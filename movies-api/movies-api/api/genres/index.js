import express from 'express';
import { getGenres} from '../tmdb-api';

const router = express.Router();
 
// eslint-disable-next-line no-unused-vars
router.get('/', (req, res,next) => {
  getGenres().then(movies => res.status(200).send(movies))
  .catch((error) => next(error));
});

export default router;