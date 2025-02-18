import { z } from "zod";

export const generateFormValidationSchema = (
  schemaList: any,
  schemaGenerator: Function
) => {
  const finalSchemaObject: any = {};
  for (let schema of schemaList) {
    const schemaName = schema?.name;
    const type = schema?.type;
    const generateZodSchema = schemaGenerator(schema?.name, type, schema);
    finalSchemaObject[schemaName] = generateZodSchema;
  }
  return z.object(finalSchemaObject);
};

export const localStorageKey = "fbm";

export const setLocalStorageItem = (key: string, value: any) => {
  const stringiFiedValue = JSON.stringify(value);
  localStorage.setItem(key, stringiFiedValue);
};

export const getLocalStorageItem = (key: string) => {
  const value = localStorage.getItem(key) || "[]";
  const parsedValue = JSON.parse(value);
  return parsedValue;
};
