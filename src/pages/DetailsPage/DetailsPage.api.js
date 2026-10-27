import { $api } from "../../api/api";
import { useQuery } from "@tanstack/react-query";

export const getPostData = async (id) => {
  const response = await $api.get(`/posts/${id}`);
  return response.data;
};

export const usePostData = (id) => {
  return useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPostData(id),
  });
};
