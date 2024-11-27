const jwt = require('jsonwebtoken');

const authMiddleware = async(req, res, next)=>{
    const token = req.header('Authorization')?.split(' ')[1];
    if(!token) return res.statue(401).json({message: 'Unauthorized'});
    try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    req.user = decoded;
    req.body.user = decoded.id; 
    next();
    }
    catch(err){
        res.status(401).json({message: 'Unauthorized'});
    }
}

module.exports = authMiddleware;
