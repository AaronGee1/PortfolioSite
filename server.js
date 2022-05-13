let express = require("express");
let app = express();
let http = require("http").Server(app);
let path = require("path");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

let server = http.listen(process.env.NODE_PORT || 3000, "0.0.0.0", () => {
  console.log("Server is listening on port: ", server.address().port);
});
