import { THired, TResponse, TUser } from "@/app/type";

export const fetchInfoUser = async (id: number | string): Promise<TUser> => {
  try {
    const response = await fetch(
      `https://fiverrnew.cybersoft.edu.vn/api/users/${id}`,
      {
        headers: {
          TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA5NCIsIkhldEhhblN0cmluZyI6IjEzLzAxLzIwMjciLCJIZXRIYW5UaW1lIjoiMTc5OTc5ODQwMDAwMCIsIm5iZiI6MTc3MjY0MzYwMCwiZXhwIjoxNzk5OTQ2MDAwfQ.fXnFWdTzELVYga9S7pakEljJsvLiA3qz1XvvVCzlxkI",
        },
      },
    );

    const result: TResponse<TUser> = await response.json();

    return result.content;
  } catch (error) {
    throw error;
  }
};

export const fetchListHired = async (): Promise<THired[]> => {
  try {
    const response = await fetch(
      "https://fiverrnew.cybersoft.edu.vn/api/thue-cong-viec/lay-danh-sach-da-thue",
      {
        headers: {
          TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA5NCIsIkhldEhhblN0cmluZyI6IjEzLzAxLzIwMjciLCJIZXRIYW5UaW1lIjoiMTc5OTc5ODQwMDAwMCIsIm5iZiI6MTc3MjY0MzYwMCwiZXhwIjoxNzk5OTQ2MDAwfQ.fXnFWdTzELVYga9S7pakEljJsvLiA3qz1XvvVCzlxkI",
        },
      },
    );

    const result: TResponse<THired[]> = await response.json();

    return result.content;
  } catch (error) {
    throw error;
  }
};
