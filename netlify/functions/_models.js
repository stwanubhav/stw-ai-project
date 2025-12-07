// Central config: list of models to compare side by side
// These models are compatible with Hugging Face Router /v1/chat/completions

const MODELS = [
  {
    id: "gemma",
    label: "Gemma 2B Instruct",
    provider: "huggingface",
    modelName: "google/gemma-2-2b-it",
    description: "Small but solid general chat & Q&A model.",
    settings: {
      max_new_tokens: 256,
      temperature: 0.7,
    },
  },
  {
    id: "qwen7b",
    label: "Qwen 2.5 7B Instruct (1M)",
    provider: "huggingface",
    modelName: "Qwen/Qwen2.5-7B-Instruct-1M",
    description: "Strong conversational model with long context.",
    settings: {
      max_new_tokens: 256,
      temperature: 0.7,
    },
  },
  {
    id: "deepseek",
    label: "DeepSeek R1",
    provider: "huggingface",
    modelName: "deepseek-ai/DeepSeek-R1",
    description: "Reasoning-focused model, good for step-by-step answers.",
    settings: {
      max_new_tokens: 256,
      temperature: 0.65,
    },
  },
];

module.exports = { MODELS };
