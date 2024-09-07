import { Pessoafisica } from "./servidor.models";

export interface Servidor {
  id: number;
  matricula: number;
  pessoa_fisica: Pessoafisica;
}
