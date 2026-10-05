import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { DEFAULT_APPLIANCES, recommendPackage } from "../data/appliances";

export default function LoadCalculator({ full = false }) {
  const [appliances, setAppliances] = useState(DEFAULT_APPLIANCES);
  const [newName, setNewName] = useState("");

  const totalWatts = useMemo(
    () => appliances.reduce((sum, a) => sum + a.watts * a.qty, 0),
    [appliances]
  );
  const recommended = useMemo(() => recommendPackage(totalWatts), [totalWatts]);

  function updateQty(id, delta) {
    setAppliances((prev) =>
      prev.map((a) => (a.id === id ? { ...a, qty: Math.max(0, a.qty + delta) } : a))
    );
  }

  function addAppliance() {
    const name = newName.trim();
    if (!name) return;
    setAppliances((prev) => [
      ...prev,
      { id: `${name.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`, name, watts: 100, qty: 1 },
    ]);
    setNewName("");
  }

  return (
    <div className="grid md:grid-cols-[1.3fr_0.9fr] border border-grey-line bg-white">
      <div className="p-6 md:p-9 border-b md:border-b-0 md:border-r border-grey-line">
        {appliances.map((a) => (
          <div
            key={a.id}
            className="grid grid-cols-[1fr_auto] gap-4 items-center py-3.5 border-b border-grey-line last:border-b-0"
          >
            <div>
              <div className="text-sm sm:text-[15px]">{a.name}</div>
              <div className="text-xs text-grey-mid">{a.watts}W each</div>
            </div>
            <div className="flex items-center border border-grey-line">
              <button
                onClick={() => updateQty(a.id, -1)}
                aria-label={`Remove one ${a.name}`}
                className="w-8 h-8 bg-[#F3F1E9] hover:bg-green hover:text-white transition-colors text-base"
              >
                –
              </button>
              <div className="w-9 text-center text-sm">{a.qty}</div>
              <button
                onClick={() => updateQty(a.id, 1)}
                aria-label={`Add one ${a.name}`}
                className="w-8 h-8 bg-[#F3F1E9] hover:bg-green hover:text-white transition-colors text-base"
              >
                +
              </button>
            </div>
          </div>
        ))}

        {full && (
          <div className="flex gap-2.5 mt-5">
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addAppliance()}
              placeholder="Add another appliance…"
              className="flex-1 border border-grey-line px-3 py-2.5 text-sm"
            />
            <button
              onClick={addAppliance}
              className="px-4 py-2.5 bg-blue text-white text-sm hover:bg-blue-mid transition-colors"
            >
              Add
            </button>
          </div>
        )}
      </div>

      <div className="p-6 md:p-9 bg-green-deep text-white">
        <div className="text-xs uppercase tracking-wider text-mint font-semibold mb-2">
          {full ? "Estimated total load" : "Estimated load"}
        </div>
        <div className="font-display text-3xl md:text-4xl font-medium">
          {totalWatts.toLocaleString()}W
        </div>
        <div className="text-xs text-[#B9D9C6] mb-6 mt-1">
          {full ? `≈ ${(totalWatts / 1000).toFixed(2)}KVA running load` : "based on appliances added"}
        </div>
        <div className="bg-white/10 border border-white/20 p-5">
          <h4 className="text-[15px] font-medium mb-2">Recommended: {recommended.name}</h4>
          <p className="text-[13px] text-[#CFE3D8]">
            {totalWatts === 0
              ? "Add appliances above to get a recommendation."
              : "Comfortably covers this load with headroom for startup surges and occasional extra appliances."}
          </p>
        </div>
        {full && (
          <Link
            to="/products-services"
            className="mt-5 block text-center bg-green hover:bg-green-deep border border-white/30 text-white text-sm font-medium py-3 transition-colors"
          >
            Get this package →
          </Link>
        )}
      </div>
    </div>
  );
}
