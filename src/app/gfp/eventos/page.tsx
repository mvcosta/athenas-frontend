import { PageProps } from "@/interfaces/page-props";
import { redirect } from "next/navigation";

export default async function EventosPage({ searchParams }: PageProps) {
  redirect("/");
}
