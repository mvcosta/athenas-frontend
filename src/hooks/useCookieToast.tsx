import { useToast, UseToastOptions } from "@chakra-ui/react";
import { CookieValueTypes, deleteCookie, getCookie } from "cookies-next";

const useCookieToast = () => {
  const toast = useToast();
  const toastCookie: CookieValueTypes = getCookie("toast");

  if (!toastCookie) return null;

  const toastOptions = JSON.parse(toastCookie);

  isToastOptions(toastOptions);

  const toastFn = () => {
    toast(toastOptions);
    deleteCookie("toast");
  };
  return toastFn;
};

function isToastOptions(val: unknown): asserts val is UseToastOptions {
  if (!val) {
    throw new Error("val is not a toastOptions");
  }
  if (
    (typeof val === "object" &&
      "title" in val &&
      "status" in val &&
      "description" in val &&
      typeof val.title === "string" &&
      typeof val.status === "string" &&
      typeof val.description === "string") ||
    "array"
  )
    return;
  deleteCookie("toast");
  console.log(val);
  throw new Error("val is not a toastOptions");
}

export default useCookieToast;
