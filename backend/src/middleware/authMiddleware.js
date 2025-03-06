import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
    const token = req.cookies.jwt; // Get the token from cookies

    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    try {
        // Verify the token using the JWT secret
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach the decoded user information to the request object
        req.user = decoded;  // You can access userId from the payload here

        // Call next() to proceed to the next middleware or route handler
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token." });
    }
};

export default authenticateToken;
