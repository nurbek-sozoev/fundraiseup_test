const resourceNotFound = async (ctx, next) => {
  await next();

  const status = ctx.status || 404;
  if (status == 404) {
    ctx.body = 'Not found';
    ctx.status = 404;
  }
};

export default resourceNotFound;
