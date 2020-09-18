const fs = require("fs");

const rdStr = fs.createReadStream("1.txt", { highWaterMark: 1 });

let buffer = "";

rdStr.on("data", (d) => (buffer += ++d));
rdStr.on("end", () => {
  console.log(buffer, "buffer");
  fs.createWriteStream("1.txt").write(buffer);
});
