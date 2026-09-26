import { TComment, TResponse, TReviews } from "../type";

export const fetchReviews = async (
  id: number | string,
): Promise<TReviews[]> => {
  try {
    const response = await fetch(
      `https://fiverrnew.cybersoft.edu.vn/api/binh-luan/lay-binh-luan-theo-cong-viec/${id}`,
      {
        headers: {
          TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA5NCIsIkhldEhhblN0cmluZyI6IjEzLzAxLzIwMjciLCJIZXRIYW5UaW1lIjoiMTc5OTc5ODQwMDAwMCIsIm5iZiI6MTc3MjY0MzYwMCwiZXhwIjoxNzk5OTQ2MDAwfQ.fXnFWdTzELVYga9S7pakEljJsvLiA3qz1XvvVCzlxkI",
        },
      },
    );

    const result: TResponse<TReviews[]> = await response.json();

    return result.content;
  } catch (error) {
    throw error;
  }
};

export const sendComments = async (
  comment: TComment,
): Promise<TResponse<TComment>> => {
  try {
    let userToken = "";
    if (typeof window !== "undefined") {
      userToken = sessionStorage.getItem("Token") || "";
    }
    const response = await fetch(
      "https://fiverrnew.cybersoft.edu.vn/api/binh-luan",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: userToken,
          tokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA5NCIsIkhldEhhblN0cmluZyI6IjEzLzAxLzIwMjciLCJIZXRIYW5UaW1lIjoiMTc5OTc5ODQwMDAwMCIsIm5iZiI6MTc3MjY0MzYwMCwiZXhwIjoxNzk5OTQ2MDAwfQ.fXnFWdTzELVYga9S7pakEljJsvLiA3qz1XvvVCzlxkI",
        },
        body: JSON.stringify(comment),
      },
    );

    const result: TResponse<TComment> = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
};
