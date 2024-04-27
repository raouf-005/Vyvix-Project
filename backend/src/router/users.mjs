import { Router} from "express";
import { user } from "../mongoose/schema/user.mjs";
import cors from "cors"
import Passport from "../strategies/localstrat.mjs";
import session from "express-session";
import passport from "passport";
import cookieParser from "cookie-parser";
import allowedOrigins from "./allowedOrigins.mjs";


const router = Router();

    
router.use(cors());



router.use(cookieParser())

router.use(session({
    secret: "tk14",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000 * 60 * 24,
        sameSite: true,
        secure: true   
    }
}));

router.use(passport.initialize());

router.use(passport.session());

router.post("/api/userregister",  async (request, response) => {
    const { body } = request;
    const newuser = new user(body);
    try {
        const saveuser = await newuser.save();
        return response.status(201).send(saveuser);
    } catch (err) {
        console.log(err);
        return response.sendStatus(400);
    }
});




router.post("/api/userlogin", passport.authenticate("local"), (request, response) => {
    if (!request.user) return response.sendStatus(401);
    response.send({
        message: "You are logged in",
        sessionID: request.sessionID,  
    });
    response.redirect("/dashboard");
});

router.post("/api/userlogout", (request, response) => {
    if (!request.user) return response.sendStatus(401);
    request.logout((err) => {
        if (err) return response.sendStatus(400);
        response.send(200);
    });
})

export default router