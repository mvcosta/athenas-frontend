"use server";

import { FetchError } from "@/lib/fetch";
import { actionAuthAPIFetch, authAPIFetch } from "@/lib/fetch-server";
import { revalidatePath } from "next/cache";

const endpoint = "v2/filiacoes-previdencia/";
const path = "/gfp/previdencia";

export async function createFiliacaoAction(prevState: any, formData: any) {
  const rawFormData = Object.fromEntries(formData);

  const payload = {
    configuracao_previdencia: +rawFormData["configuracao-previdencia-id"],
    servidor: +rawFormData["servidor-id"],
    data_inicio_vigencia:
      rawFormData["data-inicio"] !== "" ? rawFormData["data-inicio"] : null,
    data_fim_vigencia:
      rawFormData["data-fim"] !== "" ? rawFormData["data-fim"] : null,
  };

  const error = await actionAuthAPIFetch(
    endpoint,
    payload,
    "Erro ao tentar adicionar o servidor à  configuração"
  );
  if (error) {
    return error;
  }

  revalidatePath(path, "layout");
  return {
    message: "A filiação do servidor foi adicionada à previdência com sucesso.",
    status: "success",
  };
}

export async function deleteFiliacaoAction(prevState: any, formData: any) {
  const rawFormData = Object.fromEntries(formData);
  const filiacaoId = rawFormData["filiacao-id"];

  try {
    await authAPIFetch(`v2/filiacoes-previdencia/${filiacaoId}`, {
      method: "DELETE",
    });
  } catch (error) {
    if (error instanceof FetchError && error.info?.non_field_errors) {
      return { message: error.info?.non_field_errors, status: "error" };
    } else {
      return {
        message: "Erro ao tentar remover a filiação",
        status: "error",
      };
    }
  }

  revalidatePath(path, "layout");
  return {
    message: "A filiação do servidor removida da previdência com sucesso.",
    status: "success",
  };
}
