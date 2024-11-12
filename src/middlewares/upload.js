import multer from "multer";
import iconv from "iconv-lite";
//multer
const storageAvatar = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const originalname = iconv.decode(
      Buffer.from(Date.now() + "-" + file.originalname, "binary"),
      "utf-8"
    );
    cb(null, originalname);
  },
});
var upload = multer({ storage: storageAvatar });

export default upload;
