const app = require("app");
const api = require("api");
app.listen(9333, (ctx)=> {
  console.log(`[$${process.env.NODE_ENV}] Server Listening On Ready`);
});

