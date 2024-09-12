export const normalizeDate = (e: any) => {
  let input = e.target.value.replace(/\D/g, "");
  if (input.length > 8) input = input.slice(0, 8);

  if (input.length > 6) {
    input = `${input.slice(0, 4)}-${input.slice(4, 6)}-${input.slice(6, 8)}`;
  } else if (input.length > 4) {
    input = `${input.slice(0, 4)}-${input.slice(4, 6)}`;
  }

  return input;
};
