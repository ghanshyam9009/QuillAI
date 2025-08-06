import axios from "axios";
//=======Registration=====

export const generateContentAPI = async (userPrompt) => {
  const response = await axios.post(
    "https://quillai-1miv.onrender.com/api/v1/openai/generate-content",
    {
      prompt: userPrompt,
    },
    {
      withCredentials: true,
    }
  );
  return response?.data;
};
