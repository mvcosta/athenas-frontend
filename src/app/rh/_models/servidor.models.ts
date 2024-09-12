export interface Servidor {
  id: number;
  matricula: number;
  pessoa_fisica: Pessoafisica;
}

interface Pessoafisica {
  id: number;
  nome: string;
  cpf: string;
}
