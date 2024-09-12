"use server";

import { errorResponse, successResponse } from "@/lib/action-helpers";
import { actionAuthAPIFetch } from "@/lib/fetch-server";
import { toast } from "@/lib/toast";
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

  const error = await actionAuthAPIFetch(endpoint, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (error) {
    toast(
      error ?? "Erro ao tentar adicionar o servidor à  configuração",
      "error"
    );
    return errorResponse;
  }
  revalidatePath(path, "layout");

  toast(
    "A filiação do servidor foi adicionada à previdência com sucesso.",
    "success"
  );
  return successResponse;
}

export async function deleteFiliacaoAction(prevState: any, formData: any) {
  const id = formData.get("id");
  const error = await actionAuthAPIFetch(`${endpoint}${id}/`, {
    method: "DELETE",
  });

  if (error) {
    toast(error ?? "Erro ao tentar remover a filiação", "error");
    return errorResponse;
  }
  revalidatePath(path, "layout");

  toast(
    "A filiação do servidor removida da previdência com sucesso.",
    "success"
  );
  return successResponse;
}
