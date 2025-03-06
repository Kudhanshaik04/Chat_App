
export const signup = (req, res) => {
   
        const {fullName,email,pasword} = req.body;
   
};

export const login = (req, res) => {    
    res.send("Login route hit - handle the login logic here");
};

export const logout = (req, res) => {
    res.send("Logout route hit - handle the logout logic here");
};
