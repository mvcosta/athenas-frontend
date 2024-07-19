import EntityRow from "@/app/components/entity-row";
import EntityTable from "@/app/components/entity-table";
import { Evento } from "@/models/eventos.models";
import { Td } from "@chakra-ui/react";

export default function Eventos({ eventos }: { eventos: Evento[] }) {
  const headers = [
    "",
    "Número",
    "Rúbrica",
    "Título",
    "Lançamento",
    "Tipo",
    "Tipo de Cálculo",
    "Automático",
    "Cálculo",
    "Caráter",
  ];
  return (
    <EntityTable headers={headers}>
      {eventos.map((e) => (
        <EventoRow key={e.id} evento={e} isSelected={false} />
      ))}
    </EntityTable>
  );
}

function EventoRow({
  evento,
  isSelected,
}: {
  evento: Evento;
  isSelected: boolean;
}) {
  return (
    <EntityRow id={evento.id} isSelected={isSelected}>
      <Td></Td>
      <Td>{evento.numero}</Td>
      <Td>{evento.rubrica}</Td>
      <Td>{evento.titulo}</Td>
      <Td>{evento.lancamento.descricao}</Td>
      <Td>{evento.tipo}</Td>
      <Td>{evento.tipo_calculo.descricao}</Td>
      <Td></Td>
      <Td>{evento.calculo?.slug}</Td>
      <Td>{evento.carater.descricao}</Td>
    </EntityRow>
  );
}
