import cohere from "cohere-ai";
import { spinner, API_KEY } from "../utils/utils.js";

const text = "Generating 5 frontend interview questions";
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
    "Generate a list of 5 interview questions for a senior frontend engineer",
  max_tokens: 300,
  temperature: 1.2,
  k: 0,
  p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
  stop_sequences: [],
  return_likelihoods: "NONE",
});

newSpinner.succeed("Done!");

const { generations } = response.body;
console.log(`Prediction: ${generations[0].text}`);
