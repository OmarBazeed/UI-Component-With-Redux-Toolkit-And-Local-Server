// Calling All Libraries Or Packages We Installed In Terminal When We Say (npm i express cors nodemon) Ok We Import Or Call Them By Using --> const AnyVar = require('Name Of The Liberary')
const express = require('express');
const cors = require('cors');

// Creating The App By Using The express Liberary --> const app = express();
const app = express();

// Avoiding Errors By Using --> app.use( cors() , express.json() ) 
app.use(cors());
app.use(express.json());


// Making A Small Api Server On A Particular Place By Using ---> post( 'URL Of The Place' , (request,response)=> { res.send(req.body) } ) Method And We Can Use It In A setTimeout(()=>{},Time) To Avoid The Time Of Sending The Request And Using The Respose In The Body 
app.post('/api/users', (req, res) => {

    setTimeout(() => {
        res.send(req.body)
    }, 1500)

})



// Taking A Port For Your Server Or Api On A Port By Using ===> App.listen( 'Port Number', ()=> { Any Action You Want } )
app.listen('5000', () => {
    console.log('Your Server Is On Port 5000');
    console.log("server Created");
})