import React from "react";
import Servidores from "../components/servidores";

interface ServidoresPageProps {
  params: any;
}

export default function ServidoresPage({ params }: ServidoresPageProps) {
  return <Servidores selectedServidorId={+params.servidor} />;
}
