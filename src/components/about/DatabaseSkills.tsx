import MongoDB from "./icons/MongoDB";
import MySQL from "./icons/MySQL";
import PostgreSQL from "./icons/PostgreSQL";
import SQLite from "./icons/SQLite";

const databases = [
  {
    label: "MongoDB",
    icon: <MongoDB />,
  },
  {
    label: "MySQL",
    icon: <MySQL />,
  },
  {
    label: "PostgreSQL",
    icon: <PostgreSQL />,
  },
  {
    label: "SQLite",
    icon: <SQLite />,
  },
];

const DatabaseSkills = () => {
  return (
    <div>
      <h3 className="font-bold">Bancos de dados</h3>
      <ul className="flex gap-4 mt-2">
        {databases.map((database) => (
          <li key={database.label}>{database.icon}</li>
        ))}
      </ul>
    </div>
  );
};

export default DatabaseSkills;
