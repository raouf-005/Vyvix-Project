import { Router } from "express";
import cors from "cors";
import passport from "../strategies/localstrat.mjs";
import session from "express-session";
import cookieParser from "cookie-parser";
import allowedOrigins from "./allowedOrigins.mjs";
import {user} from "../mongoose/schema/user.mjs";


const router = Router();

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        // If the user is not authenticated, send a 401 Unauthorized response
        res.status(401).json({ message: 'Unauthorized' });
    }
}


router.use(cookieParser());

router.use(session({
    secret: "tk14",
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000 * 60 * 24,
        sameSite: true,
        secure: false//put true if you are using https
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
    console.log(request.user);
    if (!request.user) {
        return response.sendStatus(401);
    }
    request.logout((err) => {
        if (err) {
            console.log(err);
            return response.sendStatus(500);
        }
        return response.sendStatus(200);
    });
});

router.patch("/api/user/itiscompany", ensureAuthenticated, async (request, response) => {
    const { body } = request;
    const userId = request.user._id;
    const companyuser = await user.findOne({ _id: userId });
    companyuser.company.itis = true;
    companyuser.company.companyname = body;
    await companyuser.save();
});
router.patch("/api/user/itisemploye", ensureAuthenticated, async (request, response) => {
    const { body } = request;
    const userId = request.user._id;
    const employeuser = await user.findOne({ _id: userId });
    employeuser.employe.itis = true;
    employeuser.employe.employefullname = body.employename;
    await employeuser.save();
});
export default router;
