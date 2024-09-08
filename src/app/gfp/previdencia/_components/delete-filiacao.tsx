"use client";

import DraggableModal from "@/components/draggable-modal";
import { getEntityByIdQueryFn } from "@/lib/query";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  Button,
  Input,
  ModalBody,
  ModalFooter,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import {
  ConfiguracaoPrevidencia,
  FiliacaoPrevidencia,
} from "../../_models/previdencia.models";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import DeleteButton from "@/components/delete-button";
import { useFormState } from "react-dom";
import { ActionState } from "@/interfaces/action-state";
import { useEffect } from "react";

function DeleteFiliacao({
  filiacao,
  formAction,
  invalidateQueries,
}: {
  filiacao: FiliacaoPrevidencia;
  formAction: any;
  invalidateQueries?: any;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();
  const toast = useToast();
  const queryClient = useQueryClient();

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

  const [state, action] = useFormState<ActionState, FormData>(formAction, {
    message: "",
    status: "",
  });

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

  useEffect(() => {
    if (state.status === "success") {
      toast({ ...toastConfig.success, description: state.message });
      if (invalidateQueries) {
        queryClient.invalidateQueries(invalidateQueries);
      }
      onClose();
    }
    if (state.status === "error") {
      toast({ ...toastConfig.error, description: state.message });
    }
  }, [state]);

  return (
    <>
      <Button onClick={onOpen} colorScheme="red">
        <DeleteIcon />
      </Button>
      <DraggableModal
        title={`Removendo filiação do servidor ${getServidorName()}`}
        isOpen={isOpen}
        onClose={onClose}
        size={"xl"}
      >
        <form action={action}>
          <Input type="hidden" name={`filiacao-id`} value={filiacao.id} />
          <ModalBody>
            Você tem certeza que deseja remover o servidor {getServidorName()}{" "}
            da configuração {data?.orgao_previdencia.nome}?
          </ModalBody>
          <ModalFooter>
            <DeleteButton />
          </ModalFooter>
        </form>
      </DraggableModal>
    </>
  );
}

export default DeleteFiliacao;
