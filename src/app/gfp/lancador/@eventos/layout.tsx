import React from "react";
import classes from "./eventos.module.scss";
import EventosHeader from "./components/eventos-header";

export default function FolhaEventosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <EventosHeader />
      <div className={classes.eventos}>{children}</div>
    </>
  );
}
