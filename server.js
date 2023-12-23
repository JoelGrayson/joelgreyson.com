const express=require('express');
const app=express();
const port=process.env.PORT || 3000;

// Public folder
app.use(express.static('public'));

app.get('*', (req, res)=>{
    res.sendFile(__dirname+'/index.html');

    // Report instance to DB
    fetch('https://joelgrayson.com/api/log-error/joelgreyson.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            url: req.url
        })
    })
})

app.listen(port,()=>console.log(`Listening on port ${port}...`));

