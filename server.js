const express =require('express');
const app=express();

const PORT= process.env.PORT || 5000;

// Define Routes
app.use('/api/users',require('./routes/users'))
app.use('/api/contacts',require('./routes/contact'))
app.use('/api/auth',require('./routes/auth'))

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
})


app.get('/',(request,response)=>{
    response.json({name:"thomposn"})
})