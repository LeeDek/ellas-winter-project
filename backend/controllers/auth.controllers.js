import express from "express";

export const signup = (req, res) => {
  res.send("Helloha");
  console.log("signupUser");
};

export const login = (req, res) => {
  console.log("loginUser");
};

export const logout = (req, res) => {
  console.log("logoutUser");
};
