"use client";

import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
export default function FiltroMenu() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        leftIcon={<SearchIcon />}
        rightIcon={<ChevronDownIcon />}
      >
        Filtro
      </MenuButton>
      <MenuList>
        <MenuOptionGroup defaultValue={["folha"]} type="checkbox">
          <MenuItemOption value="folha">Servidores da Folha</MenuItemOption>
          <MenuItemOption value="ativo">Ativo</MenuItemOption>
        </MenuOptionGroup>
        <MenuDivider />
        <MenuOptionGroup type="checkbox">
          <MenuItemOption value="exclusao">
            Marcados para exclusão
          </MenuItemOption>
          <MenuItemOption value="decimo">
            Com adiantamento de 13º
          </MenuItemOption>
          <MenuItemOption value="ferias">
            Com adicional de férias
          </MenuItemOption>
          <MenuItemOption value="pendencias">Com pendências</MenuItemOption>
          <MenuItemOption value="pensao">Pensão Alimentícia</MenuItemOption>
        </MenuOptionGroup>
        <MenuDivider />
        <MenuOptionGroup defaultValue="todos" type="radio">
          <MenuItemOption value="todos">Todos</MenuItemOption>
          <MenuItemOption value="fc">Com FC</MenuItemOption>
        </MenuOptionGroup>
        <MenuDivider />
        <MenuOptionGroup type="radio">
          <MenuItemOption value="administrativos">
            Administrativos
          </MenuItemOption>
          <MenuItemOption value="membros">Membros</MenuItemOption>
          <MenuItemOption value="eequisitados">Requisitados</MenuItemOption>
          <MenuItemOption value="comissionados">Comissionados</MenuItemOption>
          <MenuItemOption value="contratados">Contratados</MenuItemOption>
          <MenuItemOption value="efetivos">Efetivos</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}
