import i18n from "../Languages/i18n";
import type { FC, ChangeEvent } from "react";

const LanguageSwitcher: FC = () => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="flex gap-2 ">
      <select
        onChange={handleChange}
        value={i18n.language}
        className="block px-2 ring-primary/70 ring-1 py-0.5 md:py-1.5 rounded-xl bg-transparent   text-text hover:bg-primary/70  transition shadow shadow-bg"

      >
        <option value="hy">🇦🇲 Arm</option>
        <option value="ru">🇷🇺 Rus</option>
        <option value="en">🇬🇧 Eng</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;

