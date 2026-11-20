import { THired, TResponse } from "@/app/type";

export const fetchHireJob = async (
  data: THired,
  userToken: string,
): Promise<TResponse<THired>> => {
  const response = await fetch(
    "https://fiverrnew.cybersoft.edu.vn/api/thue-cong-viec",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json-patch+json",
        token: userToken,
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA5NCIsIkhldEhhblN0cmluZyI6IjEzLzAxLzIwMjciLCJIZXRIYW5UaW1lIjoiMTc5OTc5ODQwMDAwMCIsIm5iZiI6MTc3MjY0MzYwMCwiZXhwIjoxNzk5OTQ2MDAwfQ.fXnFWdTzELVYga9S7pakEljJsvLiA3qz1XvvVCzlxkI",
      },
      body: JSON.stringify(data),
    },
  );

  const result: TResponse<THired> = await response.json();

  if (!response.ok) {
    throw new Error("Đặt thuê công việc thất bại!");
  }

  return result;
};
