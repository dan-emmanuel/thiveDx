const knex = require('knex');
const env = require('dotenv');
env.config();
var types = require('pg').types;
// override parsing date column to Date()
types.setTypeParser(1082, val => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  let date = new Date(val)
  return `${monthNames[date.getMonth ()]} ${date.getDate()}, ${date.getFullYear()}`
});
const db = knex({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  }
})



const createArticle = async ({content,title,tag,category,img})=>{
  await db('news').insert({content,title,tag,category,img})

}


const getArticles = async() => {
  let datas = await db('news')
    .select("news.id", "createdAt",  "content", "title", "tag", "category", "img","category.name as catName","tags.name as tagName")
    .join('category', 'news.category', '=', 'category.id')
    .join('tags', 'news.tag', '=', 'tags.id')
    .orderBy('createdAt',"desc")
    .orderBy('id', 'asc')
  let mapped = datas.map(({  img,...rest }) => {
    return {
      ...rest,
      img: `${process.env.PUBLIC_URL}/${img}`
    }
  })
  return mapped
}

const getTags = async () => {
  let datas = await db('tags')
    .select("id", "name", "logo")
  let mapped = datas.map(({logo,...rest}) => {
    return {
      ...rest,
      logo: `${process.env.PUBLIC_URL}/${logo}` }
  })
  return mapped
}

const getCats = async () => {
  let datas = await db('category')
    .select("id", "name")
    .orderBy('id')
  return datas
}



module.exports = {
  getArticles,
  getTags,
  getCats,
  createArticle
}

