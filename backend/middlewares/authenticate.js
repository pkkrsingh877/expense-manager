const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {

  const token = req.cookies.jwt;
  console.log(token)
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token', token });
  }
};

module.exports = authenticate;
