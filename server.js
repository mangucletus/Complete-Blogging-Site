const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;
const articlesInfo = {
    "Learn-react": {
        comments: [],
    },
    "Javascript": {
        comments: [],
    },
    "Make-Money-Online": {
        comments: [],
    },
    "Distributed": {
        comments: [],
    }
}


//initialize middleware
app.use(express.json({extended: false}));

app.post("/api/articles/:name/add-comments", (req, res)=>{
    const {username, text} = req.body;
    const articleName = req.params.name;
    articlesInfo[articleName].comments.push({username, text});
    res.status(200).send(articlesInfo[articleName]);

});

// app.post("/", (req, res)=>res.send(`Hello ${req.body.name}`));
// app.get("/hello/:name", (req, res)=> res.send(`Hello ${req.params.name}`));





// app.listen(8000, ()=> console.log("Server started at port 8000"));
app.listen(PORT, ()=> console.log(`Server started at port ${PORT}`))