import cohere from "cohere-ai";
import dotenv from "dotenv";
import { spinner, API_KEY } from "../utils/utils.js";

const text = "Generating paragraph of a blog post";
const newSpinner = spinner(text);
const start = performance.now();

cohere.init(API_KEY); // This is your trial API key

const interval = setInterval(() => {
  const time = Math.floor((performance.now() - start) / 1000);
  newSpinner.text = `${text} (${time}s)...`;
});

const response = await cohere.generate({
  model: "command-xlarge-20221108",
  prompt:
    "Generate an intro paragraph of a blog post geared towards athletes who are looking to learn how to rock climb. The post should be enthusiastic and speak to people who are inactive and nervous.",
  max_tokens: 300,
  temperature: 0.9,
  k: 0,
  p: 0.75,
  frequency_penalty: 0,
  presence_penalty: 0,
  stop_sequences: [],
  return_likelihoods: "NONE",
});
newSpinner.succeed("Done!");

const { generations } = response.body;
console.log(`Prediction: ${generations[0].text}`);
