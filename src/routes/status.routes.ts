import { Router } from 'express';
import { getDriver } from '../neo4j';

const router = Router();

/**
 * @GET /status
 *
 * This route returns some basic information about the status of the API,
 * including whether the API has been defined and whether a transaction
 * has been bound to the request.
 *
 * This is for debugging purposes only and isn't used within the course
 */
router.get('/', (req, res) => {
  const driver = getDriver() !== undefined;
  const transactions = req.transaction !== undefined;
  const register = false;
  const handleConstraintErrors = false;
  const authentication = false;
  const apiPrefix = process.env.API_PREFIX;

  res.json({
    status: 'OK',
    driver,
    transactions,
    register,
    handleConstraintErrors,
    authentication,
    apiPrefix,
  });
});

export default router;
