import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { generateItemSchema } from "../utils";
import { SquarePen, Trash2 } from "lucide-react";
("lucide-react");

import { ComponentSelector } from "@/commons/components/ComponentSelector";
import { generateFormValidationSchema } from "@/commons/utils";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FORM_BUILDER_SCHEMA } from "../constants";

type SingleFormItemProps = {
  defaultValue: any;
  saveValue: Function;
  setGeneratedForm: Function;
  [key: string]: any;
};

const list = FORM_BUILDER_SCHEMA;

const dependentObjects: any = [];

const generateDependentObjects = (schemaList: any) => {
  schemaList.forEach((schema: any) => {
    if (schema.dependsOn) {
      dependentObjects.push(schema.id);
    }
  });
};

export const SingleFormItem = ({
  defaultValue,
  saveValue,
  setGeneratedForm,
}: SingleFormItemProps) => {
  const changeValues = (formValues: any, schemaList: any): any => {
    const depedentKeys = dependentObjects;
    const updateSchemaList = schemaList.map((schema: any) => {
      if (depedentKeys.includes(schema.id)) {
        const valueToCheck = schema?.dependsOn || "name";
        const acceptableValues = schema?.showWhenDependentKeyIs || [];
        const updatedSchema = {
          ...schema,
          visible: acceptableValues.includes(formValues[valueToCheck]),
        };
        return updatedSchema;
      }
      return schema;
    });
    return updateSchemaList;
  };

  generateDependentObjects(list);
  const finalList = changeValues(defaultValue, list);
  const [schemaList, setSchemaList] = useState(finalList);
  const [showDetails, setShowDetails] = useState(
    defaultValue.label ? false : true
  );

  const formSchema = generateFormValidationSchema(
    schemaList,
    generateItemSchema
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValue,
  });

  // 2. Define a submit handler.
  const onSubmit = () => {
    const values = form.getValues();
    const id = defaultValue.id;
    const payload = {
      ...values,
      name: values.label.trim().split(" ").join("").toLowerCase(),
    };
    setGeneratedForm((prevFields: any) => {
      const filteredValues = prevFields.filter((field: any) => field.id !== id);
      const updatedFields = [...filteredValues, payload];
      saveValue(updatedFields);
      return [...updatedFields];
    });
    collapseCard();
  };

  const onChange = () => {
    setTimeout(
      () => setSchemaList(changeValues(form.getValues(), schemaList)),
      10
    );
  };

  const deleteField = () => {
    const id = defaultValue.id;
    setGeneratedForm((prevFields: any) => {
      const updatedFields = prevFields.filter((field: any) => field.id !== id);
      saveValue(updatedFields);
      return updatedFields;
    });
  };

  const collapseCard = () => {
    setShowDetails(false);
  };

  const editFiedld = () => {
    setShowDetails(true);
  };

  const onCancel = () => {
    const formValues = form.getValues();
    if (formValues.label && formValues.type) {
      collapseCard();
    } else {
      deleteField();
    }
  };

  return (
    <div className="mb-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <div className="flex justify-between">
            {!showDetails && (
              <div>
                <CardTitle>{form.getValues().label}</CardTitle>
                <CardDescription>
                  {form.getValues().description}
                </CardDescription>
              </div>
            )}
            {!showDetails && (
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={editFiedld}>
                  <SquarePen className="h-4 w-4" />
                </Button>
                <Button variant="destructive" size="icon" onClick={deleteField}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </CardHeader>
        {showDetails && (
          <div>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  onChange={onChange}
                  className="space-y-4"
                >
                  {schemaList.map(
                    (schema: {
                      id: any;
                      type: any;
                      name: any;
                      placeholder: any;
                      label: any;
                      description: any;
                      options: any;
                      visible: any;
                      showRequiredSymbol: boolean;
                    }) => {
                      const {
                        id,
                        type,
                        name,
                        placeholder,
                        label,
                        description,
                        options,
                        visible,
                        showRequiredSymbol,
                      } = schema;

                      if (!visible) {
                        return null;
                      }

                      return (
                        <FormField
                          key={id}
                          control={form.control}
                          name={name}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                {label}
                                {showRequiredSymbol && <span>*</span>}
                              </FormLabel>
                              <ComponentSelector
                                type={type}
                                placeholder={placeholder}
                                options={options}
                                {...field}
                              />
                              <FormMessage />
                              <FormDescription>{description}</FormDescription>
                            </FormItem>
                          )}
                        />
                      );
                    }
                  )}
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={onCancel}>
                Cancel
              </Button>
              <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
                Update
              </Button>
            </CardFooter>
          </div>
        )}
      </Card>
    </div>
  );
};
