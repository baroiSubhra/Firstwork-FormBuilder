import { FORM_INPUT_TYPES } from "@/commons/constants";
import { InputComponent } from "./InputComponent";
import { TextareaComponent } from "./TextareaComponent";
import { SelectComponent } from "./SelectComponent";
import { RadioGroupComponent } from "./RadioGroupComponent";
import { OptionsAdditions } from "./OptionsAdditions";
import { CheckboxComponent } from "./CheckboxComponent";

type ComponentSelectorProps = {
  type: string;
  [key: string]: any; 
};

export const ComponentSelector = ({
  type,
  ...rest
}: ComponentSelectorProps) => {
  switch (type) {
    case FORM_INPUT_TYPES.TEXT:
      return <TextareaComponent {...rest} />;
    case FORM_INPUT_TYPES.SELECT:
      return <SelectComponent {...rest} />;
    case FORM_INPUT_TYPES.RADIO:
      return <RadioGroupComponent {...rest} />;
    case FORM_INPUT_TYPES.NUMBER:
      return <InputComponent inputType="number" {...rest} />;
    case FORM_INPUT_TYPES.ADDER:
      return <OptionsAdditions {...rest} />;
    case FORM_INPUT_TYPES.CHECKBOX:
      return <CheckboxComponent {...rest} />;
    default:
      return <InputComponent inputType="" {...rest} />;
  }
};
