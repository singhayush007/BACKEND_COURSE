import {validateToken} from "../utils/token-utils.js";


 export const authMiddleware = (req, res, next) => {
    const token = req.headers[authorization];
     // Assuming the token is sent in the Authorization header   

     if(token && validateToken(token)){
        req.user = {id:crypto. randomUUID() , name: 'Ayush'};
        next();
        } else {
            res.status(401).json({
                message: "Unauthorized: Invalid or missing token"
            }); 
        }
};