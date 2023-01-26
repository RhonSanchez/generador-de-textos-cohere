import ora from "ora";
import dotenv from "dotenv";

dotenv.config({
  path: process.env.NODE_ENV,
});

export const API_KEY = process.env.API_KEY;

export const spinner = (text) => {
  const spinnerGenerator = ora(text).start();
  return spinnerGenerator;
};
