import { FormControl, FormField, FormItem } from "./form";
import { Textarea } from "./textarea";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

interface RHFTextarea<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  placeholder: string;
}

const RHFTextarea = <T extends FieldValues>({
  form,
  name,
  placeholder,
}: RHFTextarea<T>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Textarea {...field} placeholder={placeholder} />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default RHFTextarea;
