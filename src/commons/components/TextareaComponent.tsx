import { Textarea } from "@/components/ui/textarea";
import { FormControl } from "@/components/ui/form";

export const TextareaComponent = ({ ...props }) => {
  return (
    <FormControl>
      <Textarea {...props} />
    </FormControl>
  );
};
