import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { useActiveSectionContext } from "@/context";
import { SectionName } from "@/global/models/shared.type";

type useInViewSectionProps = {
  sectionName: SectionName;
  threshold?: number | number[] | undefined;
};
export function useInViewSection({
  sectionName,
  threshold = 0.75,
}: useInViewSectionProps) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000)
      setActiveSection(sectionName);
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
