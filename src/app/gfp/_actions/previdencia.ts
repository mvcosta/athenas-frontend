"use server";

import { errorResponse, successResponse } from "@/lib/action-helpers";
import { actionAuthAPIFetch } from "@/lib/fetch-server";
import { toast } from "@/lib/toast";
import { revalidatePath } from "next/cache";

const endpoint = "v2/configuracoes-previdencia/";
const path = "/gfp/previdencia";

export async function createPrevidenciaAction(prevState: any, formData: any) {
  const payload = getPayload(formData);
  const error = await actionAuthAPIFetch(endpoint, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  const errorMessage =
    error !== "Erro desconhecido" ? error : "Erro ao criar previdência";
  toast(errorMessage, "error");
  revalidatePath(path, "layout");

  toast("Previdência criada com sucesso", "success");
  return successResponse;
}

export async function updatePrevidenciaAction(prevState: any, formData: any) {
  const id = formData.get("id");

  const payload = getPayload(formData);
  const error = await actionAuthAPIFetch(`${endpoint}${id}/`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });

  const errorMessage =
    error !== "Erro desconhecido"
      ? error
      : "Erro na atualização da previdência";
  toast(errorMessage, "error");
  revalidatePath(path, "layout");

  toast("Previdência atualizada com sucesso", "success");
  return successResponse;
}

export async function deletePrevidenciaAction(prevState: any, formData: any) {
  const id = formData.get("id");
  const error = await actionAuthAPIFetch(`${endpoint}${id}/`, {
    method: "DELETE",
  });

  const errorMessage =
    error !== "Erro desconhecido" ? error : "Erro ao excluir a previdência";
  toast(errorMessage, "error");
  revalidatePath(path, "layout");

  toast("Previdência excluída com sucesso", "success");
  return successResponse;
}

function getPayload(formData: any) {
  const rawFormData = Object.fromEntries(formData);
  return {
    regime_previdencia: +rawFormData["regime"],
    regime_previdencia_sicap: +rawFormData["regime-sicap"],
    tipo_plano_segregacao: +rawFormData["plano"],
    orgao_previdencia: +rawFormData["orgao-previdencia-id"],
    orgao_recolhimento: +rawFormData["orgao-recolhimento-id"],
  };
}
