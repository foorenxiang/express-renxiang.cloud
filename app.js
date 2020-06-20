import express from 'express';

const app = express();
const port = process.env.PORT;

app.set("view engine", "ejs");
app.use(express.static('static'));

app.get('/', (req,res) =>{
  res.render(`index`);  
})

app.listen(port, () => console.log(`Express server hosting personal website running on port ${port}`))