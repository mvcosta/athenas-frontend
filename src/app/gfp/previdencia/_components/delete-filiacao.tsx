"use client";

import { getEntityByIdQueryFn } from "@/lib/query";
import { usePathname } from "next/navigation";
import {
  ConfiguracaoPrevidencia,
  FiliacaoPrevidencia,
} from "../../_models/previdencia.models";
import { useQuery } from "@tanstack/react-query";
import DeleteEntity from "@/components/delete-entity";
import { deleteFiliacao } from "../../_actions/previdencia";

function DeleteFiliacao({
  filiacao,
  invalidateQueries,
}: {
  filiacao: FiliacaoPrevidencia;
  invalidateQueries?: any;
}) {
  const pathname = usePathname();

  const paths = pathname.split("/");
  const configuracaoId = +paths[3];

  const endpoint = "v2/configuracoes-previdencia";
  const { data } = useQuery({
    queryKey: ["configuracoes-previdencia", { id: configuracaoId }],
    queryFn: getEntityByIdQueryFn<ConfiguracaoPrevidencia>(
      endpoint,
      configuracaoId
    ),
  });
  const getServidorName = () => {
    return `${filiacao.servidor.matricula}: ${filiacao.servidor.pessoa_fisica.nome}`;
  };

  const toastConfig = {
    success: {
      title: "Filiação removida.",
      status: "success",
      duration: 9000,
      isClosable: true,
    },
    error: {
      title: "Não foi possível remover a filiação.",
      status: "error",
      duration: 9000,
      isClosable: true,
    },
  };

  return (
    <DeleteEntity
      title={`Removendo filiação do servidor ${getServidorName()}`}
      name={"filiacao-id"}
      entity={filiacao}
      formAction={deleteFiliacao}
      toastConfig={toastConfig}
      invalidateQueries={invalidateQueries}
    >
      Você tem certeza que deseja remover o servidor {getServidorName()} da
      configuração {data?.orgao_previdencia.nome}?
    </DeleteEntity>
  );
}

export default DeleteFiliacao;
