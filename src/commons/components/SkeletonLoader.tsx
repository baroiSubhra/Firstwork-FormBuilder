import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonLoader = () => {
  return (
    <div className="w-full p-4">
      <div className="w-full flex justify-center">
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[250px]" />
        </div>
      </div>
    </div>
  );
};
