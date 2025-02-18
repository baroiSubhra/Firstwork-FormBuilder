import { Checkbox } from "@/components/ui/checkbox";
import { FormControl } from "@/components/ui/form";

export const CheckboxComponent = ({ ...props }) => {
  const { onChange, value } = props;
  return (
    <FormControl>
      <Checkbox checked={value} onCheckedChange={onChange} />
    </FormControl>
  );
};
