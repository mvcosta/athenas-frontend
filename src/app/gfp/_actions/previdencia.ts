"use server";

import { FetchError } from "@/lib/fetch";
import { actionAuthAPIFetch, authAPIFetch } from "@/lib/fetch-server";
import { revalidatePath } from "next/cache";

const endpoint = "v2/configuracoes-previdencia/";
const path = "/gfp/previdencia";

export async function createPrevidenciaAction(prevState: any, formData: any) {
  const payload = getPayload(formData);
  const error = await actionAuthAPIFetch(
    endpoint,
    payload,
    "Erro ao tentar cadastrar a configuração"
  );
  if (error) {
    return error;
  }
  revalidatePath(path, "layout");
  // return {
  //   message: "",
  //   status: "success",
  // };
}

export async function updatePrevidenciaAction(prevState: any, formData: any) {
  const id = formData.get("id");

  const payload = getPayload(formData);
  const error = await actionAuthAPIFetch(
    `${endpoint}${id}/`,
    payload,
    "Erro ao tentar atualizar a configuração",
    "PUT"
  );
  if (error) {
    return error;
  }
  revalidatePath(path, "layout");
  // return {
  //   message: "",
  //   status: "success",
  // };
}

export async function deletePrevidenciaAction(prevState: any, formData: any) {
  const id = formData.get("id");

  try {
    await authAPIFetch(`${endpoint}${id}/`, {
      method: "DELETE",
    });
  } catch (error) {
    if (error instanceof FetchError && error.info?.non_field_errors) {
      return { message: error.info?.non_field_errors, status: "error" };
    } else {
      return {
        message: "Erro ao tentar excluir a configuração",
        status: "error",
      };
    }
  }
  revalidatePath(path, "layout");
  return {
    message: "",
    status: "success",
  };
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
