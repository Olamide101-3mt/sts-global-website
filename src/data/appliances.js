export const DEFAULT_APPLIANCES = [
  { id: "fridge", name: "Refrigerator", watts: 150, qty: 1 },
  { id: "ac", name: "Air Conditioner (1HP)", watts: 750, qty: 0 },
  { id: "fan", name: "Ceiling Fan", watts: 75, qty: 3 },
  { id: "led", name: "LED Bulb", watts: 10, qty: 8 },
  { id: "tv", name: "Television", watts: 120, qty: 1 },
  { id: "laptop", name: "Laptop Charger", watts: 65, qty: 2 },
];

// Package thresholds: the smallest package whose max watt capacity still
// covers the total load, with roughly 30% headroom already factored in.
// TODO: confirm these KVA bands and prices with the client — these are
// placeholders based on common package sizes discussed.
export const SOLAR_PACKAGES = [
  { name: "1KVA Package", maxWatts: 800 },
  { name: "1.5KVA Package", maxWatts: 1100 },
  { name: "2.5KVA Package", maxWatts: 1900 },
  { name: "5KVA Package", maxWatts: 3800 },
  { name: "7.5KVA Package", maxWatts: 5800 },
  { name: "10KVA Package", maxWatts: 7800 },
];

export function recommendPackage(totalWatts) {
  const match = SOLAR_PACKAGES.find((p) => totalWatts <= p.maxWatts);
  return match || { name: "Custom multi-unit system — contact us", maxWatts: Infinity };
}
