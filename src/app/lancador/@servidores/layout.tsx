import React from "react";
import ServidoresHeader from "./components/servidores-header";
import classes from "./servidores.module.scss";

interface ServidoresLayoutProps {
  children: React.ReactNode;
}
export default function ServidoresLayout({ children }: ServidoresLayoutProps) {
  return (
    <>
      <ServidoresHeader />
      <div className={classes.servidores}>{children}</div>
    </>
  );
}
