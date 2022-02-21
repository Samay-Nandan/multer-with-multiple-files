import express from "express";
const router = express.Router();

import { singleFile, multipleFiles, photos } from "../controllers/index.js";
import upload from "../multer/index.js"

// upload single file
router.post('/single-file', upload.single('myFile'), singleFile)
  
//Uploading multiple files
router.post('/multiple-file', upload.array('myFiles', 12), multipleFiles)
  
//Uploading Photo and Saving to Database
router.post('/upload-photo', upload.single('picture'), photos)

export default router;