"use server";

import { FetchError } from "@/lib/fetch";
import { authAPIFetch } from "@/lib/fetch-server";
import { revalidatePath } from "next/cache";

export async function createPrevidencia(prevState: any, formData: any) {
  const rawFormData = Object.fromEntries(formData);

  const payload = {
    regime_previdencia: +rawFormData["regime"],
    regime_previdencia_sicap: +rawFormData["regime-sicap"],
    tipo_plano_segregacao: +rawFormData["plano"],
    orgao_previdencia: +rawFormData["orgao-previdencia-id"],
    orgao_recolhimento: +rawFormData["orgao-recolhimento-id"],
  };

  const error = await actionAuthAPIFetch(
    "v2/configuracoes-previdencia/",
    payload
  );
  if (error) {
    return error;
  }

  revalidatePath("/gfp/previdencia", "layout");
  return {
    message: "A configuração de previdência foi criada com sucesso.",
    status: "success",
  };
}

export async function createFiliacao(prevState: any, formData: any) {
  const rawFormData = Object.fromEntries(formData);

  const payload = {
    configuracao_previdencia: +rawFormData["configuracao-previdencia-id"],
    servidor: +rawFormData["servidor-id"],
    data_inicio_vigencia:
      rawFormData["data-inicio"] !== "" ? rawFormData["data-inicio"] : null,
    data_fim_vigencia:
      rawFormData["data-fim"] !== "" ? rawFormData["data-fim"] : null,
  };

  const error = await actionAuthAPIFetch("v2/filiacoes-previdencia/", payload);
  if (error) {
    return error;
  }

  revalidatePath("/gfp/previdencia", "layout");
  return {
    message: "A filiação do servidor foi adicionada à previdência com sucesso.",
    status: "success",
  };
}

export async function deleteFiliacao(prevState: any, formData: any) {
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

  revalidatePath("/gfp/previdencia", "layout");
  return {
    message: "A filiação do servidor removida da previdência com sucesso.",
    status: "success",
  };
}

async function actionAuthAPIFetch(endpoint: string, payload: any) {
  try {
    await authAPIFetch(endpoint, {
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
      method: "POST",
      body: JSON.stringify(payload),
    });
  } catch (error) {
    if (error instanceof FetchError && error.info?.non_field_errors) {
      return { message: error.info?.non_field_errors, status: "error" };
    } else {
      return {
        message: "Erro ao tentar cadastrar a configuração",
        status: "error",
      };
    }
  }
  return null;
}
