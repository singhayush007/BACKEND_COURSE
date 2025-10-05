import crypto from 'crypto';

export const generateToken = (length = 16) => {
    return crypto.randomBytes(length).toString('hex');
}

export const verifyToken = (token) => {
    return token.length === 32;
}

