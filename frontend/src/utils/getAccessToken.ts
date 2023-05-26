import Router from "next/router";
import axios from "~/api";
import { type RefreshToken } from "~/types/common";

const getToken = async (): Promise<string | undefined> => {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken) {
    void Router.push("/");
  }
  try {
    const { data } = await axios.post<RefreshToken>(
      "/users/refresh",
      {
        refreshToken: refreshToken,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (data.status === "true") {
      return data.accessToken;
    } else {
      void Router.push("/");
    }
  } catch (err) {
    void Router.push("/");
  }
};

export default getToken;
