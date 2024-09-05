"use server";

import { authAPIFetch } from "@/lib/fetch-server";

export async function createPrevidencia(formData: any) {
  const rawFormData = Object.fromEntries(formData);

  const payload = {
    regime_previdencia: +rawFormData["regime"],
    regime_previdencia_sicap: +rawFormData["regime-sicap"],
    tipo_plano_segregacao: +rawFormData["plano"],
    orgao_previdencia: +rawFormData["orgao-previdencia-id"],
    orgao_recolhimento: +rawFormData["orgao-recolhimento-id"],
  };

  console.log(JSON.stringify(payload));

  const response = await authAPIFetch("v2/configuracoes-previdencia", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  console.log(response);
}
