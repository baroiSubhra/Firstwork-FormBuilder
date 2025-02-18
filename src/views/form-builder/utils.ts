import { z } from "zod";

export const generateTypeOptions = (inputTypesEnum: any) => {
  const results: any = [];
  Object.values(inputTypesEnum).forEach((item: any, index: number) => {
    const optionsArray = {
      id: index,
      value: item,
      label: item.charAt(0) + item.slice(1).toLowerCase(),
    };
    results.push(optionsArray);
  });
  return results;
};

export const generateItemSchema = (fieldName: any, type: any, schema: any) => {
  if (!schema.required) {
    return z.string({}).optional();
  }
  if (type == "ADDER") {
    return z.array(z.object({})).optional();
  }
  if (type == "NUMBER") {
    return z.number({
      required_error: `${fieldName} is required`,
    });
  }
  if (type == "CHECKBOX") {
    return z.boolean({
      required_error: `${fieldName}is required`,
    });
  }
  return z.string({
    required_error: `${fieldName}is required`,
  });
};
