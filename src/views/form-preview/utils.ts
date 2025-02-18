import { FORM_INPUT_TYPES } from "@/commons/constants";
import { z } from "zod";

export const generateItemSchema = (fieldName: any, type: any, schema: any) => {
  if (!schema.required) {
    return z.string({}).optional();
  }

  let finalSchema: any = z.string({
    required_error: `${fieldName} is required`,
  });
  // Apply required validation if `required` is true

  // Apply required validation if `email` is true
  if (type == FORM_INPUT_TYPES.EMAIL) {
    finalSchema = finalSchema.email();
  }

  // Apply required validation if `url` is true
  if (type == FORM_INPUT_TYPES.URL) {
    finalSchema = finalSchema.url();
  }

  // Apply minLength validation if `minLength` is defined
  if (schema.minLength) {
    finalSchema = finalSchema.min(schema.minLength, {
      message: `${fieldName} must be at least ${schema.minLength} characters.`,
    });
  }

  // Apply maxLength validation if `maxLength` is defined
  if (schema.maxLength) {
    finalSchema = finalSchema.max(schema.maxLength, {
      message: `${fieldName} must be at max ${schema.maxLength} characters.`,
    });
  }

  return finalSchema;
};
