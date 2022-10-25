const express= require('express');
const cors = require('cors');

const app= express();

const prot= process.env.PORT || 5000;
 
app.use(cors());

const categories= require('./data/categories.json');
const course = require('./data/course.json');

app.get('/', (req,res)=>{
    res.send('learning-course-server is running')
});

app.get('/course-categories',(req,res)=>{
    res.send(categories)
})

app.get('/category/:id', (req ,res)=>{
    const id = req.params.id;
    const category_course= course.filter( co=>co.id === id);
    res.send(category_course);
})

app.get('/course',(req, res)=>{
    res.send(course);
});

app.get('/course/:id',(req, res)=>{
    const id =  parseInt(req.params.id);
    const courses= course.find(cou => cou.id === id);
    console.log("id", id,courses);
    res.send(courses);
});

app.listen(prot, ()=>{
    console.log('learning-course-running', prot);

})