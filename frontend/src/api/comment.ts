import axios from "~/api/index";
import { type Comment } from "~/types/common";
import getToken from "~/utils/getAccessToken";

interface CommentResponse {
  status: string;
  comment: Comment;
}

export const getComment = async (projectId: string | undefined) => {
  const accessToken = await getToken();

  if (!accessToken || !projectId) return;

  const response = await axios.get<CommentResponse>(
    `/admin/comment/${projectId}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (response.data.status === "true") {
    const comment = response.data.comment;
    return comment;
  }

  return;
};

export const postComment = async (data: {
  comment: string | undefined;
  projectId: string | undefined;
}) => {
  const accessToken = await getToken();

  if (!accessToken || data.comment === undefined || !data.projectId) return;

  const response = await axios.post<CommentResponse>("/admin/comment", data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.data.status === "true") {
    const comment = response.data.comment;
    return comment;
  }

  return;
};
