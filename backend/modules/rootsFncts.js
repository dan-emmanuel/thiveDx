const DB = require('./db');
const multer = require('multer');
// fs is the file readear
const fsPromises = require('fs').promises;;
// upload file middleware strategy
const imgStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, `uploads`)
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname.replace(/ /g, ''))
  }
})

// upload file middleware 
const uploadImg = multer({ storage: imgStorage })



// CREATE

const createNewPost = async (req, res) => {
  // console.log(req.file)
  try {
    let { body: { content, title, tag, category }, file } = req
    let newFilePath = `articleImg/${file.filename}`

    await fsPromises.rename(file.path, `./public/${newFilePath}`)
    await DB.createArticle({ content, title, tag, category, img: newFilePath })
    return await getArticles(req, res)
  } catch (error) {
    console.log(error)

  }

}
//READ
const getArticles = (req, res) => {
  try {
    DB.getArticles()
      .then(data => res.json(data))
      .catch(e => console.log(e))
  } catch (error) {

  }

}
const getTags = (req, res) => {
  try {
    DB.getTags()
      .then(data => res.json(data))
      .catch(e => console.log(e))
  } catch (error) {

  }
}
const getCats = (req, res) => {
  try {
    DB.getCats()
      .then(data => res.json(data))
      .catch(e => console.log(e))
  } catch (error) {

  }

}
//UPDATE

//DELETE





module.exports = {
  getArticles,
  getTags,
  getCats,
  createNewPost,
  uploadImg
}
