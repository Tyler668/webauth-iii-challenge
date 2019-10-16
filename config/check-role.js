module.exports = (role) => {
    return (req, res, next) => {
        if(role === req.user.role){
            next();
        }else{
            res.status(403).json({message: "Wrong Department"})
        }
    };
}



