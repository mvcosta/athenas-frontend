import React from "react";
import Contracheques from "./components/contracheques";
import ContrachequesHeader from "./components/contracheques-header";

export default async function ContrachequesDefault() {
  return (
    <>
      <ContrachequesHeader />
      <Contracheques />
    </>
  );
}
