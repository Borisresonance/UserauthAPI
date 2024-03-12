import express from 'express'
//uuids are unique identifiers generators
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
//router intialized 

const users = [ ]

//all of the routes from here are starting with /users
router.get('/',(req,res) =>{
    
    res.send(users);
})

//new router send data from client to server
router.post('/', (req, res) => {
   //this will be the var that will store post request
    const user = req.body;
    //using spread operator took the uuid an created a new key
    const userWithId = {...user, id:uuidv4()}
    //push that to users var
    users.push(userWithId);
    res.send(`User with name ${user.firstName} added to the database!`);
    
});

//this route will look up te users by id.  
router.get('/:id',(req,res)=> {
    const { id } = req.params;

    const foundUser = users.find((user) =>user.id === id)

    res.send(foundUser);

})

//this route will delete user
router.delete('/:id',(req,res)=>{
    const {id} = req.params;

    users = users.filter((user)=>user.id != id)
    res.send(`user with ${id} was deleted sucessfully`)
    
})

export default router;
