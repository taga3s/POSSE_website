export const auth = (req, res, next) => {
  if (req.query.admin === 'true') {
    console.log('you are admin!')
    next()
    return
  }
  throw new Error('No auth!')
}
