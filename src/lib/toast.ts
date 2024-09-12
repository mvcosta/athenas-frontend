import { cookies } from "next/headers";

export function toast(description: any, status: "success" | "error") {
  const response = {
    title: status === "success" ? "Sucesso" : "Erro!",
    description: description,
    status: status,
  };
  cookies().set("toast", JSON.stringify(response));
}
