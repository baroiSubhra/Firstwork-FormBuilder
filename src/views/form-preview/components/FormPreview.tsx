import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { generateFormValidationSchema } from "@/commons/utils";

import { ComponentSelector } from "@/commons/components/ComponentSelector";
import { generateItemSchema } from "../utils";

type FormPreviewProps = {
  schemaList: any;
  [key: string]: any;
};

const getDefaultValues = (schemaList: any) => {
  const result: any = {};
  schemaList.forEach((schema: any) => {
    result[schema.name] = schema.prefilValue;
  });
  return result;
};

export function FormPreview({ schemaList }: FormPreviewProps) {
  const formValidationSchema = generateFormValidationSchema(
    schemaList,
    generateItemSchema
  );

  const form = useForm<z.infer<typeof formValidationSchema>>({
    resolver: zodResolver(formValidationSchema),
    defaultValues: getDefaultValues(schemaList),
  });

  function onSubmit(values: z.infer<typeof formValidationSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {schemaList.map((schema: any) => {
          const {
            id,
            name,
            type,
            placeholder,
            label,
            description,
            options,
            required,
          } = schema;
          return (
            <FormField
              key={id}
              control={form.control}
              name={name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {label}
                    {required && <span>*</span>}
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
        })}

        {schemaList.length > 0 && (
          <Button className="w-full" type="submit">
            Submit Form
          </Button>
        )}
      </form>
    </Form>
  );
}
