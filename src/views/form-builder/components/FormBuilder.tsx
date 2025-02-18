import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { SingleFormItem } from "./SingleFormItem";
import { Button } from "@/components/ui/button";
import { localStorageKey, setLocalStorageItem } from "@/commons/utils";
import { FORM_BUILDER_QUERY_KEY } from "@/hooks/useGetFormbuilderData";
import { FORM_PREVIEW_QUERY_KEY } from "@/hooks/useGetFromPreviewData";

let id = Date.now();

type FormBuilderProps = {
  [key: string]: any;
};

export const FormBuilder = ({ data }: FormBuilderProps) => {
  const queryClient = useQueryClient();
  const [generatedForm, setGeneratedForm] = useState<any[]>(data);

  const handleAdd = () => {
    const newEntry = {
      id,
      order: id,
      placeholder: "Enter value",
      minLength: 1,
      maxLength: 500,
      required: false,
    };
    setGeneratedForm((prev: any) => [...prev, newEntry]);
    id++;
  };

  const saveValue = (values: any) => {
    //@ts-ignore
    queryClient.invalidateQueries([
      FORM_BUILDER_QUERY_KEY,
      FORM_PREVIEW_QUERY_KEY,
    ]);
    setLocalStorageItem(localStorageKey, values);
  };

  return (
    <div>
      <div className="mb-4">
        <Button className="w-full" onClick={handleAdd}>
          Add Field
        </Button>
      </div>

      {generatedForm.map((formElement) => {
        return (
          <SingleFormItem
            key={formElement.id}
            defaultValue={formElement}
            saveValue={saveValue}
            setGeneratedForm={setGeneratedForm}
          />
        );
      })}
    </div>
  );
};
