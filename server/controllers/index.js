import { PORT, SERVER_IP } from "../constants/index.js";

const imagePath = (file) => `http://${SERVER_IP}:${PORT}/upload/${file.filename}`

export const singleFile = (req, res) => {
    const { file } = req
    if (!file) 
      res.status(400).send('Please upload a file')

    const payload = {
      ...file,
      imgUrl: imagePath(file)
    }
    res.send(payload)
};

export const multipleFiles = (req, res) => {
    const { files } = req
    if (!files) 
      res.status(400).send('Please upload a file')
    
    const fileDetails = [];

    files.map((file) => {
      const payload = {
        ...file,
        imgUrl: imagePath(file)
      }
      fileDetails.push(payload)
    })

    res.send(fileDetails)
}

export const photos = async (req, res) => {
    const { file } = req;
    if (!file) 
      res.status(400).send('Please upload a file')

      const mongo = await import("../mongo/index.js");
      const db = await mongo.default();

    try {
      await db.collection('images').insertOne({ image: file.filename });
      const payload = {
        ...file,
        imgUrl: imagePath(file)
      }
      res.send(payload)
    } catch (error) {
      console.log(error)
    }
  }