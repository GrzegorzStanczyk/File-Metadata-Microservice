const express = require('express');
const app = express();
const multer  = require('multer');
const uploadService = multer({ storage: multer.memoryStorage() });
const bodyParser = require('body-parser');
const limits = { fileSize: 4 * 1024 }

app.use(express.static('public'));
app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html');
});

app.post("/get-file-size", uploadService.single('file'), (req, res) => {
  res.json({size: req.file.size})
})

const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});