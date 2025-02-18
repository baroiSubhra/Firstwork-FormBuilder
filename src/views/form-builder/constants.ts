import { FORM_INPUT_TYPES } from "@/commons/constants";
import { generateTypeOptions } from "./utils";

export enum INPUT_TYPES {
  INPUT = "INPUT",
  TEXT = "TEXT",
  NUMBER = "NUMBER",
  SELECT = "SELECT",
  RADIO = "RADIO",
  EMAIL = "EMAIL",
  URL = "URL",
}

export const FORM_BUILDER_SCHEMA = [
  {
    id: 1,
    order: 1,
    type: FORM_INPUT_TYPES.INPUT,
    label: "Label",
    name: "label",
    placeholder: "Enter the label",
    description: "This will appear as the label for the form field",
    required: true,
    visible: true,
    showRequiredSymbol: true,
  },
  {
    id: 2,
    order: 2,
    type: FORM_INPUT_TYPES.INPUT,
    label: "Placeholder",
    name: "placeholder",
    placeholder: "Enter the placeholder",
    description: "This will appear as the placeholder for the form field",
    visible: true,
  },
  {
    id: 3,
    order: 3,
    type: FORM_INPUT_TYPES.TEXT,
    label: "Description",
    name: "description",
    placeholder: "Enter the description",
    description: "This will appear as the description for the form field",
    visible: true,
  },
  {
    id: 4,
    order: 4,
    type: FORM_INPUT_TYPES.SELECT,
    label: "Type",
    name: "type",
    placeholder: "Select your type",
    description: "This is the type of the field",
    options: generateTypeOptions(INPUT_TYPES),
    required: true,
    visible: true,
    showRequiredSymbol: true,
  },
  {
    id: 5,
    order: 5,
    type: FORM_INPUT_TYPES.NUMBER,
    label: "Min Length",
    name: "minLength",
    placeholder: "Enter the min length",
    description: "This is required for the validation of the field",
    required: true,
    visible: true,
    showRequiredSymbol: true,
  },
  {
    id: 6,
    order: 6,
    type: FORM_INPUT_TYPES.NUMBER,
    label: "Max Length",
    name: "maxLength",
    placeholder: "Enter the max length",
    description: "This is required for the validation of the field",
    required: true,
    visible: true,
    showRequiredSymbol: true,
  },
  {
    id: 7,
    order: 7,
    type: FORM_INPUT_TYPES.ADDER,
    label: "Options",
    name: "options",
    placeholder: "Enter the label",
    description: "This field will appear as the heading",
    required: true,
    dependsOn: "type",
    showWhenDependentKeyIs: ["SELECT", "RADIO"],
    visible: false,
  },
  {
    id: 9,
    order: 9,
    type: FORM_INPUT_TYPES.INPUT,
    label: "Prefil Value",
    name: "prefilValue",
    placeholder: "Enter the prefil value",
    description: "This will appear as the prefil value for the form field",
    visible: true,
  },
  {
    id: 8,
    order: 8,
    type: FORM_INPUT_TYPES.CHECKBOX,
    label: "Required",
    name: "required",
    placeholder: "Mark this field required",
    description: "Making this true will make the form field required field",
    visible: true,
    required: true,
  },
];
