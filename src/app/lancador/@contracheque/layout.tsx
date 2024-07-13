import React from "react";
import classes from "./contracheque.module.scss";
import ContrachequeHeader from "./components/contracheque-header";

interface ContrachequeLayoutProps {
  children: React.ReactNode;
}
export default function ContrachequeLayout({
  children,
}: ContrachequeLayoutProps) {
  return (
    <>
      <ContrachequeHeader />
      <div className={classes.contracheque}>{children}</div>
    </>
  );
}
