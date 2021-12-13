import { IVA_PCTO } from "$lib/data/constantes";

export const totalCentsToSubCeroCents = (
  totalCents: number,
  porcConIVA = 100
): number => {
  const subtotalCeroCentavos = totalCents - (totalCents * porcConIVA) / 100;
  return Math.round(subtotalCeroCentavos);
};

export const totalCentsToSubIVACents = (
  totalCents: number,
  porcConIVA = 100,
  customIVA = IVA_PCTO
): number => {
  const subtotalConImpuestoCentavos =
    (totalCents - totalCentsToSubCeroCents(totalCents, porcConIVA)) *
    (100 / (100 + customIVA));
  return Math.round(subtotalConImpuestoCentavos);
};

export const totalCentsToMontoIVACents = (
  totalCents: number,
  porcConIVA = 100,
  customIVA = IVA_PCTO
): number => {
  const montoIVACentavos =
    (totalCentsToSubIVACents(totalCents, porcConIVA, customIVA) * customIVA) /
    100;
  return Math.round(montoIVACentavos);
};

export const centsToString = (cents: number): string => {
  const centsString = Math.round(cents).toString();
  const parteEntera = centsString.slice(0, -2) || "0";
  const decimales = centsString.slice(-2).padStart(2, "0");

  if (decimales === "00") {
    return parteEntera;
  }

  return parteEntera + "." + decimales;
};

export const isPrecioValido = (
  totalCents: number,
  porcConIVA = 100,
  customIVA = IVA_PCTO
): boolean => {
  const conIVA = totalCents - totalCentsToSubCeroCents(totalCents, porcConIVA);

  const sinIVA = Math.floor((conIVA * 100) / (100 + customIVA));

  return !(
    sinIVA * (100 + customIVA) < conIVA * 100 - 50 &&
    (sinIVA + 1) * (100 + customIVA) >= conIVA * 100 + 50
  );
};

export const aplicarDescuentoCents = (
  precioCents: number,
  porcDescuento = 0
): number => {
  return Math.round((precioCents * (100 - porcDescuento)) / 100);
};

export const calcularIVACents = (
  subTotalIVA: number,
  customIVA = IVA_PCTO
): number => {
  return Math.round((subTotalIVA * customIVA) / 100);
};
