import { useQuery } from "@tanstack/react-query";
import { $api } from "../../api/api";

export const getPosts = async () => {
  const response = await $api.get("/posts");
  return response.data;
};

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
};
