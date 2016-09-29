process.env.NODE_ENV = process.env.NODE_ENV || 'development'
require(`config/${process.env.NODE_ENV}`);

deps.App.listen(9333, (ctx)=> {
  console.log(`[$${process.env.NODE_ENV}] Server Listening On Ready`);
});
