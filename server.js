const express =require('express');
const app=express();
const connectDB=require('./config/db');
const PORT= process.env.PORT || 5000;
//connect to Database
connectDB()


// initialise middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users',require('./routes/users'))
app.use('/api/contacts',require('./routes/contact'))
app.use('/api/auth',require('./routes/auth'))




// Start the server @ port 
app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
})


app.get('/',(request,response)=>{
    response.json({name:"thomposn"})
})