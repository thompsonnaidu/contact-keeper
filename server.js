const express =require('express');
const app=express();
const connectDB=require('./config/db');
const path=require('path');
//connect to Database
connectDB()




// initialise middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users',require('./routes/users'))
app.use('/api/contacts',require('./routes/contact'))
app.use('/api/auth',require('./routes/auth'))



//server static assets in production
if(process.env.Node_ENV === 'production'){
    console.log("I am inside production ",process.env)
    // set static folder
    app.use(express.static('client/build'));

    app.get('*',(req,res)=>{

        console.log(path.resolve(__dirname, 'client', 'build', 'index.html'));
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))

    })
} 


const PORT= process.env.PORT || 5000;

// Start the server @ port 
app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
})
