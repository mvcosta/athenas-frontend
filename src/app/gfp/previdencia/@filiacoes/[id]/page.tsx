import { PageProps } from "@/interfaces/page-props";
import ListFiliacoes from "../../_components/list-filiacoes";

export default async function FiliacoesPrevidenciaPage({ params }: PageProps) {
  const id = params?.id;
  return <ListFiliacoes configPrevidenciaId={id ? +id : undefined} />;
}
