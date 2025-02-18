import { useGetFormbuilderData } from "@/hooks/useGetFormbuilderData";
import { FormBuilder } from "./components/FormBuilder";
import { SkeletonLoader } from "@/commons/components/SkeletonLoader";

export const FormBuilderContainer = () => {
  const { isLoading, data } = useGetFormbuilderData();
  if (isLoading) {
    return <SkeletonLoader />;
  }

  return <FormBuilder data={data} />;
};
