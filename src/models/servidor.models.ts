export interface ServidorResponse {
  id: number;
  ativo: boolean;
  matricula: number;
  cpf: string;
  nome: string;
  nome_social: string;
  email: string;
  data_nascimento: string;
  data_exercicio: string;
  data_desligamento: null;
  data_admissao: string;
  data_referencia_ferias: string;
  data_alteracao: string;
  tipo: string;
  codigo_cargo: string;
  cargo: string;
  registra_frequencia: boolean;
  vinculo: string;
  renuncia_auxilio: boolean;
  tipo_servidor: Tiposervidor;
  situacao_funcional_atual: TipoDocumento;
  user: User;
  chefe_imediato: Chefeimediato;
  chefe_mediato: null;
  lotacao_principal: null;
  servidor_lotacao: any[];
  posses: Posse[];
  gestor_progressoes: GestorProgressoes;
  lotacao_atual: null;
  carga_horaria: string;
}

interface GestorProgressoes {
  id: number;
  data_prox_progressao: string;
  ref_atual: RefProgressao;
  ref_progressao: RefProgressao;
  progressao_atual: Progressaoatual;
}

interface Progressaoatual {
  id: number;
  referencia_nivel2d: RefProgressao;
  data_referencia: string;
  data_inicio_vigencia: string;
  data_fim_vigencia: null;
  data_inicio_efeito_financeiro: string;
  data_fim_efeito_financeiro: null;
  data_inicio_pagamento: string;
  data_fim_pagamento: null;
}

interface RefProgressao {
  id: number;
  sigla_cache: string;
}

interface Posse {
  id: number;
  cargo: string;
  matricula: number;
  cargo_id: number;
  cargo_codigo: string;
  data_posse: string;
  data_exercicio: string;
  data_desligamento: null;
  ativo: boolean;
  data_alteracao: string;
  tipo_lei_cargo: string;
  uuid: string;
}

interface Chefeimediato {
  id: number;
  pessoa_fisica: Pessoafisica;
  cpf: string;
  matricula: number;
  nome: string;
  nome_social: string;
  email: string;
  tipo_servidor: Tiposervidor;
  tipo_regime_previdenciario: number;
  tipo: string;
  ativo: boolean;
}

interface Pessoafisica {
  id: number;
  cpf: string;
  nome: string;
  nome_social: string;
  sexo: string;
  email_institucional: string;
  pis: Pis;
}

interface Pis {
  tipo_documento: TipoDocumento;
  numero: string;
  data_expedicao: null;
  data_validade: null;
  estado_expedicao: null;
  dados_especificos: any[];
}

interface User {
  id: number;
  username: string;
  email: string;
  is_active: boolean;
  groups: Group[];
}

interface Group {
  id: number;
  name: string;
}

interface TipoDocumento {
  code: number;
  display_name: string;
}

interface Tiposervidor {
  id: number;
  nome: string;
  sigla: string;
}
