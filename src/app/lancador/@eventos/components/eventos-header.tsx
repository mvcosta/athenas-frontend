"use client";

import {
  AddIcon,
  AttachmentIcon,
  CalendarIcon,
  ChatIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  DeleteIcon,
  DownloadIcon,
  EditIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";

export default function EventosHeader() {
  return (
    <Flex justifyContent="space-evenly">
      <Lancamentos />
      <Visualizar />
      <Button colorScheme="blue" leftIcon={<RepeatIcon />}>
        Recalcular
      </Button>
      <Confirmar />
      <Pensoes />
      <Button leftIcon={<AttachmentIcon />}>Dependentes</Button>
      <Button leftIcon={<ChatIcon />}>Mensagem</Button>
      <Button leftIcon={<DownloadIcon />}>Contracheque</Button>
    </Flex>
  );
}

function Lancamentos() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        colorScheme="green"
        leftIcon={<AddIcon />}
        rightIcon={<ChevronDownIcon />}
      >
        Lançamentos
      </MenuButton>
      <MenuList>
        <MenuItem icon={<AddIcon />}>Adicionar</MenuItem>
        <MenuItem icon={<EditIcon />}>Editar</MenuItem>
        <MenuItem icon={<DeleteIcon />}>Remover</MenuItem>
      </MenuList>
    </Menu>
  );
}

function Visualizar() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        colorScheme="blue"
        leftIcon={<CalendarIcon />}
        rightIcon={<ChevronDownIcon />}
      >
        Visualizar
      </MenuButton>
      <MenuList>
        <MenuOptionGroup defaultValue="agrupados" type="radio">
          <MenuItemOption value="agrupados">
            Lançamentos agrupados por eventos
          </MenuItemOption>
          <MenuItemOption value="detalhados">
            Laçamentos detalhados
          </MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}

function Confirmar() {
  return (
    <Menu>
      <MenuButton
        colorScheme="green"
        as={Button}
        leftIcon={<CheckCircleIcon />}
        rightIcon={<ChevronDownIcon />}
      >
        Confirmar
      </MenuButton>
      <MenuList>
        <MenuItem>Evento</MenuItem>
        <MenuItem>Contracheque</MenuItem>
      </MenuList>
    </Menu>
  );
}

function Pensoes() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        leftIcon={<AttachmentIcon />}
        rightIcon={<ChevronDownIcon />}
      >
        Pensões
      </MenuButton>
      <MenuList>
        <MenuItem>Pensão Alimentícia</MenuItem>
        <MenuItem>Pensão por Morte</MenuItem>
        <MenuDivider />
        <MenuItem>Associar débito a beneficiário</MenuItem>
      </MenuList>
    </Menu>
  );
}
