import { Router } from "express";
import cors from "cors";
import passport from "../strategies/localstrat.mjs";
import session from "express-session";
import cookieParser from "cookie-parser";
import allowedOrigins from "./allowedOrigins.mjs";
import {user} from "../mongoose/schema/user.mjs";


const router = Router();

router.use(cors({
    origin: allowedOrigins,
    credentials: true
}));

router.use(cookieParser());

router.use(session({
    secret: "tk14",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000 * 60 * 24,
        sameSite: true,
        secure: false
    }
}));

router.use(passport.initialize());

router.use(passport.session());


router.post("/api/userregister", async (request, response) => {
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
    });
});

router.post("/api/userlogout", (request, response) => {
    if (!request.user) return response.sendStatus(401);
    request.logout((err) => {
        if (err) return response.sendStatus(400);
        response.sendStatus(200);
    });
});

export default router;
