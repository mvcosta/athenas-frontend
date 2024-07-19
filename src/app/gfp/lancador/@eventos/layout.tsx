import React from "react";
import classes from "./eventos.module.scss";
import EventosHeader from "./components/eventos-header";

interface FolhaEventosLayoutProps {
  children: React.ReactNode;
}
export default function FolhaEventosLayout({
  children,
}: FolhaEventosLayoutProps) {
  return (
    <>
      <EventosHeader />
      <div className={classes.eventos}>{children}</div>
    </>
  );
}
