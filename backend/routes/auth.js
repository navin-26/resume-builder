const router = require("express").Router();
const passport = require("passport");
const User = require('../models/User');
const express = require('express');
const bodyParser = require('body-parser');

router.use(bodyParser.raw({ type: 'application/octet-stream' }));
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

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

router.post('/updateTemplate', async (req, res) => {
  const {userId, template} = req.body;
  try {
    const user = await User.findById(userId._id);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.templates = template;
    console.log(user.templates);
    await user.save();
    res.status(200).json({ message: 'Template updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error updating template', error });
  }
});

// router.post('/updateTemplate', async (req, res) => {
//   try {
//     const { userId, templateIndex, template } = req.body;
    
//     if (!userId || templateIndex === undefined || !template) {
//       return res.status(400).json({ error: 'Missing required fields' });
//     }
    
//     // Your logic to update the template in the database goes here
//     res.status(200).json({ message: 'Template updated successfully' });
//   } catch (error) {
//     console.error('Error updating template', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });


router.get("/google", passport.authenticate("google", { scope: ["profile", "email"], prompt: 'select_account' }));
router.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/login/failed",
    }),
    (req, res) => {
        // Successful authentication, redirect to UserHome
        res.redirect(process.env.CLIENT_URL + "/userHome");
    }
);

// In your auth route file
router.get('/logout', (req, res) => {
    req.logout(); // Assuming you're using Passport.js
    req.session = null; // Clear session
    res.status(200).json({ message: 'Logged out successfully' }); // Send a response
});



module.exports = router;
