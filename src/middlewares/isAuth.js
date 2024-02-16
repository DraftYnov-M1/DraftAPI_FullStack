const jwt = require('jsonwebtoken');

const isAuth = async (req, res, next) => { 
    // Check if the token is present
    if (!req.headers.authorization) {
        return res.status(401).json({
            message: 'Token is missing',
            success: false
        });
    }
    console.log(req.headers.authorization.split(' '));
    // Extraire le token à partir de Bearer + un espace
    // slplit permet de transformer une châine de charactère en tableau séparé 
    const token = req.headers.authorization.split(' ')[1];
    if(!token) {
        return res.status(401).json({
            message: 'Token is missing',
            success: false
        });
    }
    // Vérifier si le token est valide
    // expiration / signature / payload
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => { 
        if (!decoded) {
            return res.status(401).json({
                message: err.message,
                success: false
            });
        }
        // Si il est valide, on le stocke dans req.user
        req.user = decoded;
        // je passe au controller suivant
        next();
    });
    // Si il n'est pas valide retourner une erreur 401
    
}

module.exports = isAuth;