import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
// import {
//   registerUser,
//     loginUser,
//     logoutUser,
//     updatePassword,
//     updateProfile,
//     deleteMyProfile,
//     myProfile,
//     getMyPosts,
//     getAllUsers,
//     resetPassword,
//     getUserProfile,
//     followUser,
//     getUserPosts,
//     forgetPassword,
// } from "../controllers/userCtrl.js";

const router = express.Router();

// router.route("/register").post(registerUser);

// router.route("/login").post(loginUser);

// router.route("/logout").get(logoutUser);

// router.route("/update/password").put(isAuthenticated, updatePassword);

// router.route("/update/profile").put(isAuthenticated, updateProfile);

// router.route("/delete/me").delete(isAuthenticated, deleteMyProfile);

// router.route("/me").get(isAuthenticated, myProfile);

// router.route("/my/posts").get(isAuthenticated, getMyPosts);

// router.route("/users").get(isAuthenticated, getAllUsers);

// router.route("/forgot/password").post(forgetPassword);

// router.route("/password/reset/:token").put(resetPassword);

// router.route("/user/:id").get(isAuthenticated, getUserProfile);

// router.route("/follow/:id").get(isAuthenticated, followUser);

// router.route("/userposts/:id").get(isAuthenticated, getUserPosts);

export default router;
