import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormControl } from "@/components/ui/form";

export const SelectComponent = ({ ...props }) => {
  const { onChange, value, placeholder, options } = props;
  return (
    <Select onValueChange={onChange} defaultValue={value}>
      <FormControl>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {options.map((option: { id: any; label: any; value: any }) => {
          const { id, label, value } = option;
          return (
            <SelectItem value={value} key={id}>
              {label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
