export const PLATFORME = [
  { value: "pc", label: "PC" },
  { value: "playstation", label: "PlayStation" },
  { value: "xbox", label: "Xbox" },
  { value: "switch", label: "Switch" },
];

export const ETICHETE_PLATFORMA = Object.fromEntries(
  PLATFORME.map((p) => [p.value, p.label])
);