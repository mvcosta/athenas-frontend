import React from "react";
import Servidores from "../servidores";

interface ServidoresPageProps {
  params: any;
}

export default function ServidoresPage({ params }: ServidoresPageProps) {
  return <Servidores contracheque={+params.contracheque} />;
}
