import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function useNavigateToEntity(
  entityId: number,
  pathIndex?: number // Indice da url a ser atualizado na navegação
) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  function navigateToEntity() {
    if (!pathIndex) return;

    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const query = current ? `?${current}` : "";
    const paths = pathname.split("/");
    paths[pathIndex] = entityId.toString();
    router.push(`${paths.join("/")}${query}`);
  }

  return navigateToEntity;
}
