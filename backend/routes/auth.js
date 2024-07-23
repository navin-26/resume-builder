const router = require("express").Router();
const passport = require("passport");

router.get("/login/success", (req, res) => {
    if (req.user) {
        res.status(200).json({
            error: false,
            message: "Successfully Logged In",
            user: req.user,
        });
    } else {
        res.status(403).json({ error: true, message: "Not Authorized" });
    }
});

router.get("/login/failed", (req, res) => {
    res.status(401).json({
        error: true,
        message: "Log in failure",
    });
});

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"], prompt: 'select_account' }));
router.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/login/failed",
    }),
    (req, res) => {
        // Successful authentication, redirect to UserHome
        res.redirect(process.env.CLIENT_URL + "/");
    }
);

// In your auth route file
router.get('/logout', (req, res) => {
    req.logout(); // Assuming you're using Passport.js
    req.session = null; // Clear session
    res.status(200).json({ message: 'Logged out successfully' }); // Send a response
});



module.exports = router;
