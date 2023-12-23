const express=require('express');
const app=express();
const port=process.env.PORT || 3000;
const path=require('path');
const axios=require('axios');

// Public folder
app.use(express.static('public'));

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));

    // Report instance to DB
    axios.post('https://joelgrayson.com/api/log-error/joelgreyson.com', {
        url: req.url
    });
})

app.listen(port,()=>console.log(`Listening on port ${port}...`));

