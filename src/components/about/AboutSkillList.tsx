import SkillIconsList from "./SkillIconsList";
import { databases } from "./icons/categories/DatabaseIcons";
import { languages } from "./icons/categories/LanguageIcons";
import { styles } from "./icons/categories/StyleIcons";
import { tools } from "./icons/categories/ToolIcons";

const AboutSkillList = () => {
  return (
    <div className="mt-8 flex flex-col gap-8">
      <SkillIconsList skillsArray={languages} title="Linguagens" />
      <SkillIconsList
        skillsArray={tools}
        title="Frameworks, bibliotecas e ferramentas"
      />
      <SkillIconsList skillsArray={databases} title="Bancos de dados" />
      <SkillIconsList
        skillsArray={styles}
        title="Estilização e marcação de texto"
      />
    </div>
  );
};

export default AboutSkillList;
