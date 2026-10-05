
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const DEFAULT_APPLIANCES = [
  {
    id: 1,
    name: "Refrigerator",
    watts: 150,
    hours: 8,
    quantity: 1,
  },
  {
    id: 2,
    name: "TV",
    watts: 100,
    hours: 5,
    quantity: 1,
  },
  {
    id: 3,
    name: "Standing Fan",
    watts: 60,
    hours: 8,
    quantity: 1,
  },
  {
    id: 4,
    name: "Light Bulb",
    watts: 10,
    hours: 6,
    quantity: 4,
  },
];

const APPLIANCE_OPTIONS = [
  {
    name: "Refrigerator",
    watts: 150,
  },
  {
    name: "Freezer",
    watts: 150,
  },
  {
    name: "TV",
    watts: 100,
  },
  {
    name: "Standing Fan",
    watts: 60,
  },
  {
    name: "Ceiling Fan",
    watts: 70,
  },
  {
    name: "Light Bulb",
    watts: 10,
  },
  {
    name: "Laptop",
    watts: 65,
  },
  {
    name: "Desktop Computer",
    watts: 200,
  },
  {
    name: "Decoder",
    watts: 25,
  },
  {
    name: "Wi-Fi Router",
    watts: 15,
  },
  {
    name: "Phone Charger",
    watts: 15,
  },
  {
    name: "Electric Iron",
    watts: 1000,
  },
  {
    name: "Microwave",
    watts: 1200,
  },
  {
    name: "Blender",
    watts: 500,
  },
  {
    name: "Washing Machine",
    watts: 500,
  },
  {
    name: "Water Pump",
    watts: 750,
  },
  {
    name: "Air Conditioner",
    watts: 1200,
  },
];

const createCustomAppliance = (id) => ({
  id,
  name: "Custom Appliance",
  watts: 100,
  hours: 1,
  quantity: 1,
  custom: true,
});

const formatNumber = (value, decimals = 1) => {
  return Number(value).toLocaleString("en-NG", {
    maximumFractionDigits: decimals,
  });
};

const getSuggestedInverter = (loadKw) => {
  if (loadKw <= 1) return "1.5 kVA";
  if (loadKw <= 2) return "2.5 kVA";
  if (loadKw <= 3) return "3.5 kVA";
  if (loadKw <= 5) return "5 kVA";
  if (loadKw <= 7.5) return "8 kVA";
  if (loadKw <= 10) return "10 kVA";
  if (loadKw <= 15) return "15 kVA";

  return "15+ kVA";
};

export default function LoadCalculator() {
  const [appliances, setAppliances] = useState(DEFAULT_APPLIANCES);
  const [nextId, setNextId] = useState(DEFAULT_APPLIANCES.length + 1);

  const calculations = useMemo(() => {
    const totalLoadWatts = appliances.reduce((total, appliance) => {
      const quantity = Math.max(0, Number(appliance.quantity) || 0);
      const watts = Math.max(0, Number(appliance.watts) || 0);

      return total + quantity * watts;
    }, 0);

    const dailyEnergyWh = appliances.reduce((total, appliance) => {
      const quantity = Math.max(0, Number(appliance.quantity) || 0);
      const watts = Math.max(0, Number(appliance.watts) || 0);
      const hours = Math.max(0, Number(appliance.hours) || 0);

      return total + quantity * watts * hours;
    }, 0);

    const totalLoadKw = totalLoadWatts / 1000;
    const dailyEnergyKwh = dailyEnergyWh / 1000;

    /*
      We add a modest design margin to the raw connected load
      before suggesting an inverter class.

      This is still only an estimate. Final inverter sizing should
      consider surge loads, power factor, battery requirements,
      operating patterns and the actual equipment specifications.
    */
    const designLoadKw = totalLoadKw * 1.25;

    const suggestedInverter = getSuggestedInverter(designLoadKw);

    return {
      totalLoadWatts,
      totalLoadKw,
      dailyEnergyKwh,
      designLoadKw,
      suggestedInverter,
    };
  }, [appliances]);

  const updateAppliance = (id, field, value) => {
    setAppliances((current) =>
      current.map((appliance) =>
        appliance.id === id
          ? {
              ...appliance,
              [field]: value,
            }
          : appliance
      )
    );
  };

  const handleApplianceChange = (id, applianceName) => {
    const selected = APPLIANCE_OPTIONS.find(
      (option) => option.name === applianceName
    );

    setAppliances((current) =>
      current.map((appliance) =>
        appliance.id === id
          ? {
              ...appliance,
              name: applianceName,
              watts: selected?.watts ?? appliance.watts,
              custom: applianceName === "Custom Appliance",
            }
          : appliance
      )
    );
  };

  const addAppliance = () => {
    setAppliances((current) => [
      ...current,
      createCustomAppliance(nextId),
    ]);

    setNextId((current) => current + 1);
  };

  const removeAppliance = (id) => {
    setAppliances((current) =>
      current.filter((appliance) => appliance.id !== id)
    );
  };

  return (
    <section className="bg-[#F7F4EC] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#0F382C]">
            Solar Load Calculator
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[#0A192F] sm:text-4xl lg:text-5xl">
            Estimate your
            <span className="text-[#0F382C]"> solar power needs.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Enter the appliances you use, their power ratings and how long
            you use them each day. We'll give you an initial estimate of
            your energy requirement.
          </p>
        </div>

        {/* Calculator */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

          {/* Top Bar */}
          <div className="border-b border-slate-200 bg-[#0A192F] px-6 py-7 sm:px-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  Your daily appliance usage
                </h3>

                <p className="mt-1 text-sm text-slate-300">
                  Adjust the values to match your actual appliances.
                </p>
              </div>

              <button
                type="button"
                onClick={addAppliance}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-5 py-3 text-sm font-bold text-[#0A192F] transition hover:bg-[#E2C45A]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>

                Add another appliance
              </button>
            </div>
          </div>

          {/* Appliance Rows */}
          <div className="p-5 sm:p-8">

            <div className="hidden grid-cols-[minmax(180px,2fr)_1fr_1fr_1fr_auto] gap-4 border-b border-slate-200 pb-3 text-xs font-semibold uppercase tracking-wide text-slate-500 md:grid">
              <span>Appliance</span>
              <span>Power (W)</span>
              <span>Quantity</span>
              <span>Hours / day</span>
              <span />
            </div>

            <div className="space-y-4 md:space-y-0">
              {appliances.map((appliance) => (
                <div
                  key={appliance.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 md:grid md:grid-cols-[minmax(180px,2fr)_1fr_1fr_1fr_auto] md:items-center md:gap-4 md:rounded-none md:border-0 md:border-b md:bg-transparent md:px-0 md:py-5"
                >

                  {/* Appliance */}
                  <div>
                    <label
                      htmlFor={`appliance-${appliance.id}`}
                      className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500 md:hidden"
                    >
                      Appliance
                    </label>

                    <select
                      id={`appliance-${appliance.id}`}
                      value={appliance.name}
                      onChange={(event) =>
                        handleApplianceChange(
                          appliance.id,
                          event.target.value
                        )
                      }
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-[#0A192F] outline-none transition focus:border-[#0F382C] focus:ring-2 focus:ring-[#0F382C]/10"
                    >
                      {APPLIANCE_OPTIONS.map((option) => (
                        <option
                          key={option.name}
                          value={option.name}
                        >
                          {option.name}
                        </option>
                      ))}

                      <option value="Custom Appliance">
                        Custom Appliance
                      </option>
                    </select>
                  </div>

                  {/* Watts */}
                  <div className="mt-4 md:mt-0">
                    <label
                      htmlFor={`watts-${appliance.id}`}
                      className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500 md:hidden"
                    >
                      Power / Capacity (W)
                    </label>

                    <input
                      id={`watts-${appliance.id}`}
                      type="number"
                      min="1"
                      max="100000"
                      value={appliance.watts}
                      onChange={(event) =>
                        updateAppliance(
                          appliance.id,
                          "watts",
                          event.target.value
                        )
                      }
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#0A192F] outline-none transition focus:border-[#0F382C] focus:ring-2 focus:ring-[#0F382C]/10"
                    />

                    {appliance.custom && (
                      <p className="mt-1 text-xs text-slate-500">
                        Enter the wattage shown on the appliance label.
                      </p>
                    )}
                  </div>

                  {/* Quantity */}
                  <div className="mt-4 md:mt-0">
                    <label
                      htmlFor={`quantity-${appliance.id}`}
                      className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500 md:hidden"
                    >
                      Quantity
                    </label>

                    <input
                      id={`quantity-${appliance.id}`}
                      type="number"
                      min="1"
                      max="100"
                      value={appliance.quantity}
                      onChange={(event) =>
                        updateAppliance(
                          appliance.id,
                          "quantity",
                          event.target.value
                        )
                      }
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#0A192F] outline-none transition focus:border-[#0F382C] focus:ring-2 focus:ring-[#0F382C]/10"
                    />
                  </div>

                  {/* Hours */}
                  <div className="mt-4 md:mt-0">
                    <label
                      htmlFor={`hours-${appliance.id}`}
                      className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500 md:hidden"
                    >
                      Hours / day
                    </label>

                    <input
                      id={`hours-${appliance.id}`}
                      type="number"
                      min="0"
                      max="24"
                      step="0.5"
                      value={appliance.hours}
                      onChange={(event) =>
                        updateAppliance(
                          appliance.id,
                          "hours",
                          event.target.value
                        )
                      }
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#0A192F] outline-none transition focus:border-[#0F382C] focus:ring-2 focus:ring-[#0F382C]/10"
                    />
                  </div>

                  {/* Remove */}
                  <div className="mt-4 flex justify-end md:mt-0">
                    <button
                      type="button"
                      onClick={() => removeAppliance(appliance.id)}
                      disabled={appliances.length === 1}
                      aria-label={`Remove ${appliance.name}`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M4 7h16M10 11v6M14 11v6M6 7l1 14h10l1-14M9 7V4h6v3" />
                      </svg>
                    </button>
                  </div>

                </div>
              ))}
            </div>

            {/* Add Appliance Secondary Button */}
            <button
              type="button"
              onClick={addAppliance}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0F382C] transition hover:text-[#0A192F]"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#0F382C]/20">
                +
              </span>
              Add another appliance
            </button>

          </div>

          {/* Results */}
          <div className="border-t border-slate-200 bg-[#F7F4EC] p-5 sm:p-8">

            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F382C]">
                Your estimate
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#0A192F]">
                Estimated energy requirements
              </h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {/* Daily Energy */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm text-slate-500">
                  Daily energy usage
                </p>

                <p className="mt-2 text-3xl font-bold text-[#0A192F]">
                  {formatNumber(calculations.dailyEnergyKwh)}
                </p>

                <p className="mt-1 text-xs font-medium text-[#0F382C]">
                  kWh / day
                </p>
              </div>

              {/* Connected Load */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm text-slate-500">
                  Connected load
                </p>

                <p className="mt-2 text-3xl font-bold text-[#0A192F]">
                  {formatNumber(calculations.totalLoadKw)}
                </p>

                <p className="mt-1 text-xs font-medium text-[#0F382C]">
                  kW
                </p>
              </div>

              {/* Design Load */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm text-slate-500">
                  Estimated design load
                </p>

                <p className="mt-2 text-3xl font-bold text-[#0A192F]">
                  {formatNumber(calculations.designLoadKw)}
                </p>

                <p className="mt-1 text-xs font-medium text-[#0F382C]">
                  kW incl. margin
                </p>
              </div>

              {/* Inverter */}
              <div className="rounded-2xl border border-[#0F382C]/20 bg-[#0F382C] p-5">
                <p className="text-sm text-white/70">
                  Suggested inverter class
                </p>

                <p className="mt-2 text-3xl font-bold text-white">
                  {calculations.suggestedInverter}
                </p>

                <p className="mt-1 text-xs font-medium text-[#D4AF37]">
                  Initial estimate
                </p>
              </div>

            </div>

            {/* Important Note */}
            <div className="mt-6 rounded-2xl border border-[#D4AF37]/30 bg-white p-5">
              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/15 text-[#8A6A00]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9Z" />
                    <path d="M12 8v5M12 16h.01" />
                  </svg>
                </div>

                <div>
                  <p className="font-semibold text-[#0A192F]">
                    This is an initial estimate
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Actual solar system sizing depends on factors such as
                    appliance startup loads, power factor, battery
                    requirements, solar availability and your preferred
                    backup duration. Our team can carry out a proper
                    assessment before installation.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-7 flex flex-col items-center justify-between gap-5 rounded-2xl bg-[#0A192F] px-6 py-6 sm:flex-row">
              <div>
                <p className="font-semibold text-white">
                  Want a properly sized solar solution?
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  Let STS Global review your requirements and recommend
                  the right system.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-bold text-[#0A192F] transition hover:bg-[#E2C45A]"
              >
                Talk to STS Global →
              </Link>
            </div>

          </div>
        </div>

        {/* Bottom Note */}
        <p className="mx-auto mt-5 max-w-3xl text-center text-xs leading-5 text-slate-500">
          Appliance power ratings are estimates unless you enter the
          actual wattage from your equipment. For the most accurate
          result, check the appliance label or manufacturer's
          specifications.
        </p>

      </div>
    </section>
  );
}

