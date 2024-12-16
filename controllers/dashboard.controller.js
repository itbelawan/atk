
exports.index = async (req, res, next) => {
    console.log(req.session.user);
    const user = req.user
    res.render('template/layout', {
        kontent: 'dashboard/index',
        user,
    })
  }