const userRouter = require("express").Router();
const { userLogin, userRegister } = require("../controllers/auth-user");

userRouter.get('/', async (req,res)=>{
    return  await res.status(200).json({message: 'Welcome !'})
});
userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);

module.exports = userRouter