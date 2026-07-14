import {
  MdDashboard,
  MdAssessment,
  MdSettings,
} from "react-icons/md";

export const navigation = [
  {
    label: "Dashboard",
    path: "/",
    icon: MdDashboard,
  },
  {
    label: "Relatórios",
    path: "/reports",
    icon: MdAssessment,
  },
  {
    label: "Configurações",
    path: "/settings",
    icon: MdSettings,
  },
];
// usado para menter a movimentação entre as paginas mais facil, podendo adicionar outra pagina a qualquer momento