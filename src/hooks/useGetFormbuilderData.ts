import { getFormBuilderData } from "@/apis/getFormBuilderData";
import { useQuery } from "@tanstack/react-query";

export const FORM_BUILDER_QUERY_KEY = "useGetFormbuilderData";

export const useGetFormbuilderData = () => {
  return useQuery({
    queryKey: [FORM_BUILDER_QUERY_KEY],
    queryFn: async () => {
      const response = await getFormBuilderData();
      return response;
    },
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });
};
