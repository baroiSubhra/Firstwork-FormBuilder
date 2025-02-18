import { FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
type InputComponentProps = {
  inputType: string;
  [key: string]: any;
};
export const InputComponent = ({
  inputType,
  ...props
}: InputComponentProps) => {
  return (
    <FormControl>
      <Input type={inputType} {...props} />
    </FormControl>
  );
};
