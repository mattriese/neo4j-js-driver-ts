import { Router } from 'express';
import movies from './movies.routes';
import genres from './genres.routes';
import auth from './auth.routes';
import account from './account.routes';
import people from './people.routes';
import status from './status.routes';

const router = Router();

router.use('/movies', movies);
router.use('/genres', genres);
router.use('/auth', auth);
router.use('/account', account);
router.use('/people', people);
router.use('/status', status);

export default router;
