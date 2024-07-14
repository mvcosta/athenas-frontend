import React from "react";
import Contracheques from "../components/contracheques";

interface ContrachequesPageProps {
  params: any;
}

export default function ContrachequesPage({ params }: ContrachequesPageProps) {
  return <Contracheques selectedContrachequeId={+params.contracheque} />;
}
