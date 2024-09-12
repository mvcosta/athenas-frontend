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
  return (
    <FormControl isInvalid={getFieldState(name).invalid}>
      <FormLabel>{children}</FormLabel>
      <Input placeholder="aaaa-mm-dd" {...register(name, dateFieldProps)} />
      <FormErrorMessage>{errors[name]?.message?.toString()}</FormErrorMessage>
    </FormControl>
  );
}

export default DateInput;
