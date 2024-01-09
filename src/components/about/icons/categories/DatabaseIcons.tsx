import MongoDB from "../MongoDB";
import MySQL from "../MySQL";
import PostgreSQL from "../PostgreSQL";
import SQLite from "../SQLite";

export const databases = [
  {
    label: "PostgreSQL",
    icon: <PostgreSQL />,
  },
  {
    label: "MySQL",
    icon: <MySQL />,
  },
  {
    label: "MongoDB",
    icon: <MongoDB />,
  },

  {
    label: "SQLite",
    icon: <SQLite />,
  },
];

const DatabaseIcons = () => {
  return null;
};

export default DatabaseIcons;
