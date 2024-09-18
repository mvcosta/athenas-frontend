import { normalizeDate } from "@/lib/date-utils";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

function DateInput({
  children,
  name,
  dateFieldProps,
}: {
  children: React.ReactNode;
  name: string;
  dateFieldProps: any;
}) {
  const {
    register,
    getFieldState,
    formState: { errors },
  } = useFormContext();

  const defaultDateFieldProps = {
    onChange: (e: any) => (e.target.value = normalizeDate(e)),
    pattern: {
      value: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
      message: "Data inválida",
    },
  };
  return (
    <FormControl isInvalid={getFieldState(name).invalid}>
      <FormLabel>{children}</FormLabel>
      <Input
        placeholder="aaaa-mm-dd"
        {...register(name, { ...defaultDateFieldProps, ...dateFieldProps })}
      />
      <FormErrorMessage>{errors[name]?.message?.toString()}</FormErrorMessage>
    </FormControl>
  );
}

export default DateInput;
