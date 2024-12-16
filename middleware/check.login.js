
exports.cek_login = (req,res,next) => {
    
        if (req.session.user) {
            next()
        } else {
            res.redirect('/')
        }
    
}

exports.cek_admin = (req, res, next) => {
    if (req.session.user.roles === '0') {
        next(); // User is admin, proceed to next middleware or route handler
    } else {
        res.redirect('/dashboard'); // Redirect to homepage if user is not logged in or not an admin
    }
}

exports.cek_admin_user = (req, res, next) => {
    const userRoles = req.session.user.roles;
    if (userRoles === '0' || userRoles === '1') {
        next(); // User is admin or user, proceed to next middleware or route handler
    } else {
        res.redirect('/dashboard'); // Redirect to dashboard if user is not logged in or not authorized
    }
}

exports.cek_admin_user_view = (req, res, next) => {
    const userRoles = req.session.user.roles;
    if (userRoles === '0' || userRoles === '1' || userRoles === '2') {
        next(); // User is admin or user, proceed to next middleware or route handler
    } else {
        res.redirect('/dashboard'); // Redirect to dashboard if user is not logged in or not authorized
    }
}


exports.cek_user = (req, res, next) => {
    if (req.session.user.roles === '1') {
        next(); // User is admin, proceed to next middleware or route handler
    } else {
        res.redirect('/dashboard'); // Redirect to homepage if user is not logged in or not an admin
    }
}


exports.cek_view = (req, res, next) => {
    if (req.session.user.roles === '2') {
        next(); // User is admin, proceed to next middleware or route handler
    } else {
        res.redirect('/dashboard'); // Redirect to homepage if user is not logged in or not an admin
    }
}