import { useState } from "react";

interface County {
  name: string;
  x: number;
  y: number;
  active: boolean;
}

const counties: County[] = [
  { name: "Nairobi", x: 248, y: 340, active: true },
  { name: "Mombasa", x: 310, y: 420, active: true },
  { name: "Kisumu", x: 148, y: 295, active: true },
  { name: "Nakuru", x: 200, y: 295, active: true },
  { name: "Eldoret", x: 168, y: 250, active: true },
  { name: "Thika", x: 260, y: 320, active: true },
  { name: "Malindi", x: 325, y: 375, active: false },
  { name: "Nanyuki", x: 240, y: 275, active: false },
  { name: "Garissa", x: 330, y: 300, active: false },
  { name: "Lamu", x: 350, y: 340, active: false },
  { name: "Machakos", x: 265, y: 355, active: true },
  { name: "Nyeri", x: 238, y: 290, active: true },
  { name: "Meru", x: 270, y: 270, active: false },
  { name: "Turkana", x: 170, y: 150, active: false },
  { name: "Marsabit", x: 280, y: 170, active: false },
  { name: "Kitale", x: 155, y: 235, active: true },
  { name: "Naivasha", x: 215, y: 310, active: true },
];

const KenyaMap = () => {
  const [hoveredCounty, setHoveredCounty] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <svg
        viewBox="0 0 500 550"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Kenya outline */}
        <path
          d="M170,60 L210,55 L250,70 L290,60 L340,80 L370,100 L390,140 
             L380,180 L370,220 L360,260 L350,290 L340,310 L350,330 
             L360,340 L350,360 L340,380 L330,400 L320,420 L310,440 
             L290,460 L270,470 L250,465 L235,455 L220,440 L200,430 
             L180,420 L165,400 L155,380 L145,360 L135,340 L130,320 
             L125,300 L120,280 L115,260 L120,240 L130,220 L140,200 
             L150,180 L155,160 L150,140 L145,120 L150,100 L160,80 Z"
          className="fill-muted stroke-foreground"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Lake Victoria (partial) */}
        <ellipse
          cx="125"
          cy="305"
          rx="30"
          ry="25"
          className="fill-accent stroke-border"
          strokeWidth="1"
        />
        <text
          x="125"
          y="308"
          textAnchor="middle"
          className="fill-muted-foreground text-[7px]"
        >
          L. Victoria
        </text>

        {/* County markers */}
        {counties.map((county) => (
          <g
            key={county.name}
            onMouseEnter={() => setHoveredCounty(county.name)}
            onMouseLeave={() => setHoveredCounty(null)}
            className="cursor-pointer"
          >
            {/* Pulse ring for active counties */}
            {county.active && (
              <circle
                cx={county.x}
                cy={county.y}
                r="8"
                className="fill-foreground/10 animate-ping"
                style={{ animationDuration: "3s" }}
              />
            )}

            {/* Marker dot */}
            <circle
              cx={county.x}
              cy={county.y}
              r={county.active ? 5 : 3}
              className={
                county.active
                  ? "fill-foreground stroke-background"
                  : "fill-muted-foreground/50 stroke-background"
              }
              strokeWidth="1.5"
            />

            {/* Label */}
            <text
              x={county.x}
              y={county.y - 10}
              textAnchor="middle"
              className={`text-[8px] font-medium ${
                hoveredCounty === county.name || county.active
                  ? "fill-foreground"
                  : "fill-muted-foreground/60"
              }`}
              style={{
                fontWeight: hoveredCounty === county.name ? 700 : 500,
                fontSize: hoveredCounty === county.name ? "10px" : "8px",
                transition: "all 0.2s ease",
              }}
            >
              {county.name}
            </text>
          </g>
        ))}

        {/* Indian Ocean label */}
        <text
          x="380"
          y="430"
          className="fill-muted-foreground/40 text-[9px] italic"
          transform="rotate(-30, 380, 430)"
        >
          Indian Ocean
        </text>

        {/* Compass */}
        <g transform="translate(430, 80)">
          <line x1="0" y1="-18" x2="0" y2="18" className="stroke-muted-foreground/40" strokeWidth="1" />
          <line x1="-18" y1="0" x2="18" y2="0" className="stroke-muted-foreground/40" strokeWidth="1" />
          <text x="0" y="-22" textAnchor="middle" className="fill-muted-foreground text-[9px] font-medium">N</text>
        </g>
      </svg>

      {/* Legend */}
      <div className="flex items-center justify-center gap-8 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-foreground" />
          <span className="text-minimal text-muted-foreground">ACTIVE REGIONS</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-muted-foreground/50" />
          <span className="text-minimal text-muted-foreground">EXPANDING SOON</span>
        </div>
      </div>
    </div>
  );
};

export default KenyaMap;
