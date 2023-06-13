import express from 'express';
const app = express();
const port = 3001;

// Set up routes and middleware here

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
