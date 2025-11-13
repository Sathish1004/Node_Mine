import express from "express";
import User from "../models/userModules.js";

export const getstr = async (req, res) => {
  try {
    const { username, address } = req.body;

    const data = await User.create({
      username,
      address,
    });
    res.status(201).json({
      msg: "Data received nothing successfully",
      data: {
        username,
        address,
      },
    });
  } catch (error) {
    console.log("error", error);
    res.status(401).json({
      msg: "Something went wrong",
      error: error.message,
    });
  }
};
