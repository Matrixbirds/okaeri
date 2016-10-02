const app = require("app");
app.listen(9333, (ctx)=> {
  console.log(`[$${process.env.NODE_ENV}] Server Listening On Ready`);
});
