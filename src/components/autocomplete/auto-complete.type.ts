import { HasId } from "@/interfaces/has-id";
import { QueryFunctionContext } from "@tanstack/react-query";
import MultiSelectionEntityRowType from "../multi-selection-entity-row";

export type searchEntityQuery<T> = (
  context: QueryFunctionContext<[string, { search: string }]>
) => Promise<T[]>;

export type getEntitiesQuery<T> = (
  context: QueryFunctionContext<[string, { page: number; limit: number }]>
) => Promise<{ data: T[]; count: number }>;

export type EntityProps<T extends HasId> = {
  data: T[];
  MultiSelectionEntityRow: typeof MultiSelectionEntityRowType<T>;
};
