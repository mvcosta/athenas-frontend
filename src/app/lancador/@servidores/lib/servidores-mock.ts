const servidores = [
  {
    id: 1,
    matricula: "0001",
    nome: "Marcus",
    efetivo: "ENG",
    confianca: "DCA-2",
    estagio: "",
    ferias: "17/07/2017",
  },
  {
    id: 2,
    matricula: "0002",
    nome: "Giovanni",
    efetivo: "AS",
    confianca: "DCA-2",
    estagio: "",
    ferias: "17/07/2018",
  },
  {
    id: 3,
    matricula: "0003",
    nome: "Cássius",
    efetivo: "ENG",
    confianca: "DCA-2",
    estagio: "",
    ferias: "17/07/2022",
  },
  {
    id: 4,
    matricula: "0004",
    nome: "Felipe",
    efetivo: "CC",
    confianca: "DCA-2",
    estagio: "",
    ferias: "17/07/2023",
  },
];

export function getAllServidores() {
  return servidores;
}
