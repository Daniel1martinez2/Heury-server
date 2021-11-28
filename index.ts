import express from 'express';
import bodyParser from 'body-parser';
import projectsRoutes from './routes/projects'; 
const cors = require('cors');


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(projectsRoutes)


app.listen(3333, () => {
  console.log('Server init');
})