import { ReactElement } from "react";

type SkillIconsList = {
  skillsArray: {
    label: string;
    icon: ReactElement;
  }[];
  title: string;
};

const SkillIconsList = ({ skillsArray, title }: SkillIconsList) => {
  return (
    <div>
      <h3 className="font-bold">{title}</h3>
      <ul className="flex items-center gap-4 mt-2 flex-wrap">
        {skillsArray.map((skill) => (
          <li
            className="flex flex-col gap-1 bg-background200 p-4 items-center rounded-md"
            key={skill.label}
          >
            <span>{skill.icon}</span>
            <span className="text-[8px] sm:text-xs">{skill.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillIconsList;
