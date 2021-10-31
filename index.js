const express=require('express');
const path=require('path');
const exphbs=require('express-handlebars');
const logger=require('./middleware/logger');
const members=require('./Members');
const app=express();

app.engine('handlebars',exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//body parser middleware.
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/',(req,res)=> res.render('index',{
    title: 'Member App',
    members
}))

app.use(express.static(path.join(__dirname,'public')));
app.use('/api/members',require('./routes/api/members'));
const PORT=process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
