import { TResponse, TSignUp } from "@/app/type";

export default async function fetchSignUp(
  data: TSignUp,
): Promise<TResponse<TSignUp>> {
  try {
    const response = await fetch(
      "https://fiverrnew.cybersoft.edu.vn/api/auth/signup",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          tokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA5NCIsIkhldEhhblN0cmluZyI6IjEzLzAxLzIwMjciLCJIZXRIYW5UaW1lIjoiMTc5OTc5ODQwMDAwMCIsIm5iZiI6MTc3MjY0MzYwMCwiZXhwIjoxNzk5OTQ2MDAwfQ.fXnFWdTzELVYga9S7pakEljJsvLiA3qz1XvvVCzlxkI",
        },
        body: JSON.stringify(data),
      },
    );

    const result: TResponse<TSignUp> = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}
