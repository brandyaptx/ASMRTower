"use client";

import { useMemo, useState } from "react";
import type { Gamepass } from "@/data/site";
import { formatRobux } from "@/lib/seo";

type Props = {
  gamepasses: Gamepass[];
};

const categoryWeights: Record<Gamepass["category"], number> = {
  Movement: 5,
  Recovery: 4,
  Comfort: 2,
  Protection: 3,
  Economy: 2,
  Access: 3,
  Social: 1,
};

const tierWeights: Record<Gamepass["tier"], number> = {
  S: 5,
  A: 4,
  B: 3,
  C: 1,
};

export default function CalculatorClient({ gamepasses }: Props) {
  const [selected, setSelected] = useState<string[]>(["double-jump", "fast-respawn", "speed-coil"]);

  const selectedItems = useMemo(
    () => gamepasses.filter((item) => selected.includes(item.id)),
    [gamepasses, selected],
  );

  const total = selectedItems.reduce((sum, item) => sum + item.price, 0);
  const valueScore = selectedItems.reduce(
    (sum, item) => sum + categoryWeights[item.category] + tierWeights[item.tier],
    0,
  );
  const movementCount = selectedItems.filter((item) => item.category === "Movement").length;

  const toggle = (id: string) => {
    setSelected((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  };

  const setPreset = (ids: string[]) => setSelected(ids);

  return (
    <div className="calculator-layout">
      <div className="panel">
        <div className="section-head">
          <div>
            <h2>Choose gamepasses</h2>
            <p>
              The calculator uses verified public prices. Benefits are grouped by likely
              utility and remain Needs check until confirmed inside the live game.
            </p>
          </div>
        </div>
        <div className="preset-row" aria-label="Calculator presets">
          <button
            className="button compact"
            type="button"
            onClick={() => setPreset(["fast-respawn", "double-jump", "speed-coil"])}
          >
            Budget climb
          </button>
          <button
            className="button compact"
            type="button"
            onClick={() =>
              setPreset(["jetpack", "grappling-hook", "super-coil", "fast-respawn"])
            }
          >
            Movement stack
          </button>
          <button
            className="button compact"
            type="button"
            onClick={() =>
              setPreset([
                "magic-carpet",
                "jetpack",
                "grappling-hook",
                "super-coil",
                "double-jump",
                "fast-respawn",
              ])
            }
          >
            Premium route
          </button>
          <button className="button compact" type="button" onClick={() => setPreset([])}>
            Clear
          </button>
        </div>
        <div className="check-list">
          {gamepasses.map((item) => (
            <div className="check-item" key={item.id}>
              <label htmlFor={item.id}>
                {item.name}
                <small>
                  {item.category} · {formatRobux(item.price)} · Tier {item.tier}
                </small>
              </label>
              <input
                aria-label={`Include ${item.name}`}
                checked={selected.includes(item.id)}
                id={item.id}
                onChange={() => toggle(item.id)}
                type="checkbox"
              />
            </div>
          ))}
        </div>
      </div>

      <aside className="panel total">
        <h2 style={{ marginTop: 0 }}>Robux total</h2>
        <div className="total-number">{formatRobux(total)}</div>
        <div className="score-grid">
          <div className="metric">
            <strong>{selectedItems.length}</strong>
            <span>Selected items</span>
          </div>
          <div className="metric">
            <strong>{movementCount}</strong>
            <span>Movement picks</span>
          </div>
          <div className="metric">
            <strong>{valueScore}</strong>
            <span>Utility score</span>
          </div>
        </div>
        <div className="note" style={{ marginTop: 16 }}>
          Best low-cost start: Fast Respawn + Double Jump + Speed Coil. Exact in-game
          effects still need live verification, so treat this as planning help rather
          than purchase advice.
        </div>
      </aside>
    </div>
  );
}
