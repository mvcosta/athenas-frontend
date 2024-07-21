"use client";

import { Button } from "@chakra-ui/react";

export default function PaginationButton({
  isDisabled,
  direction,
  icon,
  onClick,
  children,
}: {
  isDisabled: boolean;
  children: React.ReactNode;
  direction: "foward" | "back";
  icon: any;
  onClick: () => void;
}) {
  function isBack(): boolean {
    return direction === "back";
  }

  return (
    <Button
      onClick={() => onClick()}
      isDisabled={isDisabled}
      leftIcon={isBack() ? icon : undefined}
      rightIcon={!isBack() ? icon : undefined}
    >
      {children}
    </Button>
  );
}
