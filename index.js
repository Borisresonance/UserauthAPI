import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js'

const app = express();
const PORT = 5000;

// this is just going to say we are going to use JSON data in the whole app 
app.use(bodyParser.json());

app.use('/users',usersRoutes);

app.get('/', (req,res) => res.send('Hello this is home page'));

//thi will make the app listen
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

