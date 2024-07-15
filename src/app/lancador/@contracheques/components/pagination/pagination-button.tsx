"use client";

import { Button } from "@chakra-ui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function PaginationButton({
  children,
  direction,
  numberOfPages,
  icon,
  getNewPage,
}: {
  children: React.ReactNode;
  direction: "foward" | "back";
  numberOfPages?: number;
  icon?: any;
  getNewPage: (page: number) => number;
}) {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") ?? 1);

  function onPageChange() {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const newPage = getNewPage(page);
    current.set("page", newPage.toString());
    const pagination = current.toString();
    const query = pagination ? `?${pagination}` : "";

    router.push(`${pathName}${query}`);
  }

  function isDisabled(): boolean {
    return isBack() ? page === 1 : page === numberOfPages;
  }

  function isBack(): boolean {
    return direction === "back";
  }

  return (
    <Button
      onClick={onPageChange}
      isDisabled={isDisabled()}
      leftIcon={isBack() ? icon : undefined}
      rightIcon={!isBack() ? icon : undefined}
    >
      {children}
    </Button>
  );
}
