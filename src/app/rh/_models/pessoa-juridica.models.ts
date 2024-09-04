import { PaginatedResponse } from "@/interfaces/paginated-response";

export interface PessoaJuridicaResponse
  extends PaginatedResponse<PessoaJuridica> {}

export interface PessoaJuridica {
  id: number;
  nome: string;
  cnpj: string;
  razao_social: string;
}
