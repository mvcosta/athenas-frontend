import React from "react";
import ContrachequesHeader from "./components/contracheques-header";
import classes from "./contracheques.module.scss";

interface ContrachequesLayoutProps {
  children: React.ReactNode;
}
export default function ContrachequesLayout({
  children,
}: ContrachequesLayoutProps) {
  return (
    <>
      <ContrachequesHeader />
      <div className={classes.contracheques}>{children}</div>
    </>
  );
}
