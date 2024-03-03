import { IoIosHome } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { HiTemplate } from "react-icons/hi";
import { MdWarehouse } from "react-icons/md";
import { GiFarmer } from "react-icons/gi";
import { BiSolidLandscape } from "react-icons/bi";
import { RiPlantFill } from "react-icons/ri";

const menus = [
    {
        id: 1,
        name: "Página inicial",
        description: "Esta tela é a página inicial",
        icon: IoIosHome,
        href: "/",
    },
    {
        id: 2,
        name: "Usuário",
        description: "Esta tela é utilizada para visualização de dados do usuário",
        icon: FaUserCircle,
        href: "/",
    },
    {
        id: 3,
        name: "Cadastro de Item",
        description: "Esta tela é utilizada para cadastrar, consultar e atualizar Itens",
        icon: HiTemplate,
        href: "/cadastro-item",
    },
    {
        id: 4,
        name: "Cadastro de Depósito",
        description: "Esta tela é utilizada para cadastrar, consultar e atualizar Depósitos",
        icon: MdWarehouse,
        href: "/cadastro-deposito",
    },
    {
        id: 5,
        name: "Cadastro de Fazenda",
        description: "Esta tela é utilizado para cadastrar, consultar e atualizar Fazendas",
        icon: GiFarmer,
        href: "/cadastro-fazenda",
    },
    {
        id: 6,
        name: "Cadastro de Área",
        description: "Esta tela é utilizado para cadastrar, consultar e atualizar Áreas",
        icon: BiSolidLandscape,
        href: "/cadastro-area",
    },
    {
        id: 7,
        name: "Cadastro de Cultura",
        description: "Esta tela é utilizado para cadastrar, consultar e atualizar Culturas",
        icon: RiPlantFill,
        href: "/cadastro-area",
    },

];

export default menus;