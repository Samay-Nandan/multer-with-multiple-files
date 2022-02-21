import { existsSync, mkdirSync } from "fs";
import { __dirname } from "../constants/index.js";
import multer from 'multer';

const upload = `${__dirname}/uploads`;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      if ( !existsSync(upload) )
            mkdirSync(upload);
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
       const { mimetype } = file;
        if(mimetype === 'application/pdf')
            return cb(null, file.fieldname + '-' + Date.now() + ".pdf")
        if(mimetype === 'image/jpeg')
            return cb(null, file.fieldname + '-' + Date.now() + ".jpeg")

      cb(null, file.fieldname + '-' + Date.now())
    }
})

export default multer({ storage });

