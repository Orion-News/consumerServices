import jwt from 'jsonwebtoken';

export default async (req, res, next) => {
    
  const authHeader = req.headers.authorization;

  if (!authHeader) throw new Error('Token not provided');

  const [, token] = authHeader.split(' ');

  try {
    const payload = await jwt.verify(token, process.env.APP_SECRET);

    req.userId = payload.id;

    return next();
  } catch (e) {
    return res.status(401).json({ "User is not authorized for this route" : `${e}` });
  }
}