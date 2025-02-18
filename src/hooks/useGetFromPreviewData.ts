import { getFromPreviewData } from "@/apis/getFromPreviewData";
import { useQuery } from "@tanstack/react-query";

export const FORM_PREVIEW_QUERY_KEY = "useGetFromPreviewData";

export const useGetFromPreviewData = () => {
  return useQuery({
    queryKey: [FORM_PREVIEW_QUERY_KEY],
    queryFn: async () => {
      const response = await getFromPreviewData();
      return response;
    },
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });
};
