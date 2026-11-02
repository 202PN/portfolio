// Each page section is a "taxiway" with a letter designator, used by the header signs and section headings
export const SECTION_SIGNS = [
  { id: 'ventures', letter: 'A', label: 'Work' },
  { id: 'experience', letter: 'B', label: 'Experience' },
  { id: 'skills', letter: 'C', label: 'Skills' },
  { id: 'contact', letter: 'D', label: 'Contact' }
] as const;

export const signFor = (id: string) => SECTION_SIGNS.find((s) => s.id === id);
