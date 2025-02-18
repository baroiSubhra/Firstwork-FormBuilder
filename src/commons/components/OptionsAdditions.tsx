import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusCircle, Trash2 } from "lucide-react";
import { FormControl } from "@/components/ui/form";

interface InputField {
  id: string;
  value: string;
  label: string;
}

let counter = Date.now();

export function OptionsAdditions({ ...props }) {
  const { onChange, value } = props;
  const initialState =
    value?.length > 0
      ? value
      : [{ id: "1", value: "option1", label: "Option1" }];
  const [inputFields, setInputFields] = useState<InputField[]>([
    ...initialState,
  ]);

  const handleAddField = (e: any) => {
    e.preventDefault();
    const id = String(counter++);
    const newField = {
      id: id,
      value: `option${id}`,
      label: `Option${id}`,
    };
    setInputFields((prevFields) => {
      const updatedFields = [...prevFields, newField];
      onChange(updatedFields);
      return updatedFields;
    });
  };

  const handleDeleteField = (id: string) => {
    setInputFields((prevFields) => {
      const updatedFields = prevFields.filter((field) => field.id !== id);
      onChange(updatedFields);
      return updatedFields;
    });
  };

  const handleInputChange = (id: string, label: string) => {
    setInputFields((prevFields) => {
      const updatedFields = prevFields.map((field) =>
        field.id === id
          ? {
              ...field,
              value: label.trim().split(" ").join("").toLowerCase(),
              label,
            }
          : field
      );
      onChange(updatedFields);
      return updatedFields;
    });
  };

  return (
    <FormControl>
      <div className="w-full max-w-md mx-auto space-y-4">
        {inputFields.map((field) => (
          <div key={field.id} className="flex items-center space-x-2">
            <Input
              type="text"
              value={field.label}
              onChange={(e) => handleInputChange(field.id, e.target.value)}
              placeholder="Enter value"
            />
            <Button
              variant="destructive"
              size="icon"
              onClick={() => handleDeleteField(field.id)}
              disabled={inputFields.length === 1}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button onClick={handleAddField} className="w-full">
          <PlusCircle className="mr-2 h-4 w-4" /> Add Option
        </Button>
      </div>
    </FormControl>
  );
}
