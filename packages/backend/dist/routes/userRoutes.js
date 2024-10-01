"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controlles/userController");
const router = (0, express_1.Router)();
// Route to add a new user
router.post('/addUser', userController_1.addUser);
// Route for user login
router.post('/login', userController_1.loginUser);
exports.default = router;
