import { Periodo } from "./periodo.models";

export interface Folha {
  id: number;
  tipo_folha: Tipofolha;
  periodo: Periodo;
  dt_pagamento: string;
}

interface Tipofolha {
  id: number;
  titulo: string;
  ativo: boolean;
  modelo: null;
  carater: Carater;
  principal: boolean;
  processo: null;
  publicacao_processo: null;
  margem: number;
  abreviatura: null;
}

interface Carater {
  id: number;
  descricao: string;
}
