import { app } from './app.js';
import ConectDB from './config/db.js';
const port = 8000;
app.listen(port, (err) => {
  if (err) {
    console.log('Error', err.message);
  }
  console.log(`Server is running on the port ${port}`);
  ConectDB();
});
