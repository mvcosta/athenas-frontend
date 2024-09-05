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
    subMenuItems: [
      { title: "Eventos", path: "/gfp/eventos/" },
      { title: "Lançador", path: "/gfp/lancador/" },
      { title: "Previdência", path: "/gfp/previdencia/" },
    ],
  },
  {
    title: "RH",
    path: "/rh/",
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [{ title: "Pessoa Jurídica", path: "/rh/pessoa-juridica" }],
  },
];
