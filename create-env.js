const fs = require("fs");
fs.writeFileSync(
  "./.env",
  `FIREBASE_API_KEY=${process.env.FIREBASE_API_KEY}\n`,
);
