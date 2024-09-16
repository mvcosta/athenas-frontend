import { Icon } from "@iconify/react";

import { SideNavItem } from "../../interfaces/side-nav-item";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Home",
    path: "/",
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: "Folha ",
    path: "/gfp/",
    icon: <Icon icon="lucide:receipt" width="24" height="24" />,
    submenu: true,
    subMenuItems: [{ title: "Previdência", path: "/gfp/previdencia/" }],
  },
];
