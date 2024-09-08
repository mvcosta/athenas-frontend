"use server";

import { FetchError } from "@/lib/fetch";
import { actionAuthAPIFetch, authAPIFetch } from "@/lib/fetch-server";
import { revalidatePath } from "next/cache";

const endpoint = "v2/configuracoes-previdencia/";
const path = "/gfp/previdencia";

export async function createPrevidenciaAction(prevState: any, formData: any) {
  const rawFormData = Object.fromEntries(formData);

  const payload = {
    regime_previdencia: +rawFormData["regime"],
    regime_previdencia_sicap: +rawFormData["regime-sicap"],
    tipo_plano_segregacao: +rawFormData["plano"],
    orgao_previdencia: +rawFormData["orgao-previdencia-id"],
    orgao_recolhimento: +rawFormData["orgao-recolhimento-id"],
  };

  const error = await actionAuthAPIFetch(
    endpoint,
    payload,
    "Erro ao tentar cadastrar a configuração"
  );
  if (error) {
    return error;
  }

  revalidatePath(path, "layout");
  return {
    message: "A configuração de previdência foi criada com sucesso.",
    status: "success",
  };
}

export async function deletePrevidenciaAction(prevState: any, formData: any) {
  const rawFormData = Object.fromEntries(formData);
  const filiacaoId = rawFormData["configuracao-previdencia-id"];

  try {
    await authAPIFetch(`${endpoint}${filiacaoId}`, {
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
    message: "A configuração da previdência foi excluída com sucesso.",
    status: "success",
  };
}
