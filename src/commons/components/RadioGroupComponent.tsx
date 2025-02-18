import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const RadioGroupComponent = ({ ...props }) => {
  const { onChange, value, options } = props;
  return (
    <FormControl>
      <RadioGroup
        onValueChange={onChange}
        defaultValue={value}
        className="flex flex-col space-y-1"
      >
        {options.map((option: { id: any; label: any; value: any }) => {
          const { id, label, value } = option;
          return (
            <FormItem
              className="flex items-center space-x-3 space-y-0"
              key={id}
            >
              <FormControl>
                <RadioGroupItem value={value} />
              </FormControl>
              <FormLabel className="font-normal">{label}</FormLabel>
            </FormItem>
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};
