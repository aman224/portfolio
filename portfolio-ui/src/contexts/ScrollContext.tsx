import { createContext } from "react";

interface ScrollContextType {
  scrollToWorkExperience: () => void;
  scrollToProjects: () => void;
  scrollToHome: () => void;
  scrollToEducation: () => void;
}

export const ScrollContext = createContext<ScrollContextType>({
  scrollToWorkExperience: () => {},
  scrollToProjects: () => {},
  scrollToHome: () => {},
  scrollToEducation: () => {},
});
