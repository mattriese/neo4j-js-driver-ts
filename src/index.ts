import app from './app';
import { APP_PORT } from './constants';

// Listen
const port = APP_PORT;

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}/`);
});
