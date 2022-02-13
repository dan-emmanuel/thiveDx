const exp = require('express');
var bodyParser = require('body-parser');
const env = require('dotenv');
const rootsFnct = require('./modules/rootsFncts')
var cors = require('cors')


// init express
const app = exp();
env.config();
//cors policy 
app.use(cors())
// for static file in public folder
app.use('/', exp.static(__dirname + '/public'))



// for get http body data
app.use(bodyParser.urlencoded({ extended: true }));
// for parsing json requests
app.use(exp.json())



// get request with route '/articles'
app.get('/articles', rootsFnct.getArticles)

// get request with route '/tags'
app.get('/tags', rootsFnct.getTags)

// get request with route '/cats'
app.get('/cats', rootsFnct.getCats)



// get request with route '/cats'
app.post('/newPost', rootsFnct.uploadImg.single("img"), rootsFnct.createNewPost)


// listen to....
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
})