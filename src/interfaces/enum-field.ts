import { PaginatedResponse } from "./paginated-response";

export interface EnumField {
  id: string;
  descricao: string;
}

export interface EnumFieldResponse extends PaginatedResponse<EnumField> {}
