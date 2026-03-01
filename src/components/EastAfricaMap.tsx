import { useState } from "react";

const countries = [
  {
    name: "South Sudan",
    id: "SS",
    active: false,
    d: "M 145,30 L 200,25 240,40 260,70 270,110 250,140 230,150 200,160 170,155 140,140 120,120 110,90 115,60 Z",
  },
  {
    name: "Ethiopia",
    id: "ET",
    active: false,
    d: "M 260,20 L 340,10 400,30 420,70 410,120 380,150 340,160 300,155 270,140 260,110 250,70 Z",
  },
  {
    name: "Somalia",
    id: "SO",
    active: false,
    d: "M 400,30 L 450,15 480,40 490,90 480,150 460,200 430,250 400,280 370,260 350,220 340,180 350,150 380,130 410,100 420,70 Z",
  },
  {
    name: "Uganda",
    id: "UG",
    active: false,
    d: "M 120,140 L 170,135 200,145 210,170 200,200 180,220 150,225 125,215 110,195 105,170 Z",
  },
  {
    name: "Kenya",
    id: "KE",
    active: true,
    d: "M 200,145 L 250,140 300,155 340,170 360,200 370,240 360,280 340,310 310,330 280,335 250,320 230,290 220,260 210,230 200,200 Z",
  },
  {
    name: "Rwanda",
    id: "RW",
    active: false,
    d: "M 135,225 L 160,220 175,230 170,250 150,258 132,248 Z",
  },
  {
    name: "Burundi",
    id: "BI",
    active: false,
    d: "M 135,258 L 155,255 170,265 165,285 145,292 130,280 Z",
  },
  {
    name: "Tanzania",
    id: "TZ",
    active: false,
    d: "M 175,260 L 210,240 240,260 270,290 300,320 310,350 300,390 280,420 250,440 220,445 190,430 165,400 155,370 150,340 155,310 160,285 Z",
  },
  {
    name: "DR Congo",
    id: "CD",
    active: false,
    d: "M 40,130 L 80,120 110,130 125,160 130,200 135,240 140,280 130,320 100,340 70,330 45,300 30,260 25,220 30,180 Z",
  },
];

const cities = [
  { name: "Nairobi", x: 268, y: 268, isHQ: true },
  { name: "Mombasa", x: 310, y: 310, isHQ: false },
  { name: "Kisumu", x: 210, y: 215, isHQ: false },
  { name: "Nakuru", x: 245, y: 240, isHQ: false },
  { name: "Eldoret", x: 228, y: 195, isHQ: false },
];

const EastAfricaMap = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative">
      <svg viewBox="0 -10 520 480" className="w-full h-auto max-h-[600px]">
        {/* Water / Indian Ocean label area */}
        <text x="430" y="320" className="fill-muted-foreground/30" fontSize="14" fontWeight="300" transform="rotate(70, 430, 320)">
          INDIAN OCEAN
        </text>

        {/* Country shapes */}
        {countries.map((country) => (
          <path
            key={country.id}
            d={country.d}
            className={`transition-all duration-300 cursor-pointer stroke-border ${
              country.active
                ? hovered === country.id
                  ? "fill-foreground/70"
                  : "fill-foreground"
                : hovered === country.id
                  ? "fill-accent"
                  : "fill-muted"
            }`}
            strokeWidth={country.active ? 2 : 0.8}
            onMouseEnter={() => setHovered(country.id)}
            onMouseLeave={() => setHovered(null)}
          />
        ))}

        {/* Country labels */}
        {countries.map((country) => {
          // Approximate center of each country for label
          const centers: Record<string, { x: number; y: number }> = {
            SS: { x: 185, y: 85 },
            ET: { x: 340, y: 80 },
            SO: { x: 430, y: 150 },
            UG: { x: 155, y: 180 },
            KE: { x: 275, y: 240 },
            RW: { x: 152, y: 240 },
            BI: { x: 148, y: 272 },
            TZ: { x: 225, y: 370 },
            CD: { x: 75, y: 230 },
          };
          const c = centers[country.id];
          if (!c) return null;
          return (
            <text
              key={`label-${country.id}`}
              x={c.x}
              y={c.y}
              textAnchor="middle"
              className={`pointer-events-none text-[10px] font-medium tracking-widest uppercase ${
                country.active ? "fill-background" : "fill-muted-foreground/60"
              }`}
              fontSize={country.active ? 13 : 9}
            >
              {country.name}
            </text>
          );
        })}

        {/* Kenya cities */}
        {cities.map((city) => (
          <g key={city.name}>
            <circle
              cx={city.x}
              cy={city.y}
              r={city.isHQ ? 5 : 3}
              className={city.isHQ ? "fill-primary" : "fill-background stroke-foreground"}
              strokeWidth={city.isHQ ? 0 : 1.5}
            />
            {city.isHQ && (
              <circle
                cx={city.x}
                cy={city.y}
                r={10}
                className="fill-primary/20 animate-pulse"
              />
            )}
            <text
              x={city.x + (city.isHQ ? 12 : 8)}
              y={city.y + 4}
              className="fill-foreground/80 text-[8px]"
              fontSize={city.isHQ ? 10 : 8}
              fontWeight={city.isHQ ? 600 : 400}
            >
              {city.name}
            </text>
          </g>
        ))}
      </svg>

      {/* Tooltip */}
      {hovered && (
        <div className="absolute top-4 right-4 bg-foreground text-background px-3 py-1.5 text-xs font-medium">
          {countries.find((c) => c.id === hovered)?.name}
          {hovered === "KE" && " — HQ"}
        </div>
      )}

      {/* Legend */}
      <div className="flex items-center justify-center gap-8 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-foreground" />
          <span className="text-minimal text-muted-foreground">KENYA (ACTIVE)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-muted border border-border" />
          <span className="text-minimal text-muted-foreground">EAST AFRICA</span>
        </div>
      </div>
    </div>
  );
};

export default EastAfricaMap;
