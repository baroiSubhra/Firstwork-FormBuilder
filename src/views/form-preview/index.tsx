import { useGetFromPreviewData } from "@/hooks/useGetFromPreviewData";
import { FormPreview } from "./components/FormPreview";
import { SkeletonLoader } from "@/commons/components/SkeletonLoader";

export const FormPreviewContainer = () => {
  const { isLoading, data }: { isLoading: boolean; data: any } =
    useGetFromPreviewData();

  if (isLoading) {
    return <SkeletonLoader />;
  }

  if (data.length == 0) {
    return (
      <h4 className="text-xl text-center font-bold mb-4">
        No forms
        <h3 className="text-lg text-center font-bold mb-4">
          Please create one to preview
        </h3>
      </h4>
    );
  }

  return <FormPreview schemaList={data} />;
};
