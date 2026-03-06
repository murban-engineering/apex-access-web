import { useState, useEffect, useRef } from "react";

const activeCountyIds = [
  "KE-28", // Mombasa
  "KE-47", // Nairobi
  "KE-32", // Nakuru
  "KE-42", // Kisumu
  "KE-44", // Uasin Gishu (Eldoret)
  "KE-22", // Machakos
  "KE-36", // Nyeri
  "KE-40", // Trans Nzoia (Kitale)
  "KE-31", // Narok
  "KE-94", // Kilifi
  "KE-13", // Kajiado
  "KE-39", // Taita Taveta
  "KE-18", // Kiambu
  "KE-30", // Nyandarua
];

const countyNames: Record<string, string> = {
  "KE-28": "Mombasa",
  "KE-19": "Kwale",
  "KE-94": "Kilifi",
  "KE-21": "Lamu",
  "KE-39": "Taita Taveta",
  "KE-07": "Garissa",
  "KE-45": "Wajir",
  "KE-25": "Mandera",
  "KE-10": "Marsabit",
  "KE-12": "Isiolo",
  "KE-27": "Meru",
  "KE-41": "Tharaka Nithi",
  "KE-06": "Embu",
  "KE-17": "Kitui",
  "KE-22": "Machakos",
  "KE-24": "Makueni",
  "KE-34": "Nyandarua",
  "KE-36": "Nyeri",
  "KE-15": "Kirinyaga",
  "KE-30": "Muranga",
  "KE-18": "Kiambu",
  "KE-43": "Turkana",
  "KE-46": "West Pokot",
  "KE-38": "Samburu",
  "KE-40": "Trans Nzoia",
  "KE-44": "Uasin Gishu",
  "KE-05": "Elgeyo Marakwet",
  "KE-29": "Nandi",
  "KE-02": "Baringo",
  "KE-20": "Laikipia",
  "KE-32": "Nakuru",
  "KE-31": "Narok",
  "KE-13": "Kajiado",
  "KE-16": "Kericho",
  "KE-04": "Bomet",
  "KE-42": "Kisumu",
  "KE-33": "Nyamira",
  "KE-35": "Nyandarua",
  "KE-14": "Kisii",
  "KE-11": "Migori",
  "KE-08": "Homa Bay",
  "KE-37": "Siaya",
  "KE-03": "Bungoma",
  "KE-09": "Kakamega",
  "KE-01": "Vihiga",
  "KE-26": "Busia",
  "KE-47": "Nairobi",
  "KE-23": "Tana River",
};

const KenyaMap = () => {
  const [hoveredCounty, setHoveredCounty] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string>("");

  useEffect(() => {
    fetch("/kenya-map.svg")
      .then((res) => res.text())
      .then((text) => {
        // Strip xml declaration and get just the SVG
        const match = text.match(/<svg[\s\S]*<\/svg>/i);
        if (match) setSvgContent(match[0]);
      });
  }, []);

  useEffect(() => {
    if (!svgContent || !containerRef.current) return;

    const svgEl = containerRef.current.querySelector("svg");
    if (!svgEl) return;

    // Style all paths
    const paths = svgEl.querySelectorAll("path");
    paths.forEach((path) => {
      const id = path.getAttribute("id") || "";
      const isActive = activeCountyIds.includes(id);

      path.style.transition = "fill 0.2s ease";
      path.style.cursor = "pointer";
      path.style.stroke = "hsl(var(--border))";
      path.style.strokeWidth = "0.5";

      if (isActive) {
        path.style.fill = "hsl(var(--foreground))";
      } else {
        path.style.fill = "hsl(var(--muted))";
      }

      path.addEventListener("mouseenter", (e) => {
        const title = path.getAttribute("title") || countyNames[id] || id;
        setHoveredCounty(title);
        path.style.fill = isActive
          ? "hsl(var(--foreground) / 0.7)"
          : "hsl(var(--accent))";
        const rect = containerRef.current!.getBoundingClientRect();
        setTooltipPos({
          x: (e as MouseEvent).clientX - rect.left,
          y: (e as MouseEvent).clientY - rect.top - 40,
        });
      });

      path.addEventListener("mousemove", (e) => {
        const rect = containerRef.current!.getBoundingClientRect();
        setTooltipPos({
          x: (e as MouseEvent).clientX - rect.left,
          y: (e as MouseEvent).clientY - rect.top - 40,
        });
      });

      path.addEventListener("mouseleave", () => {
        setHoveredCounty(null);
        if (isActive) {
          path.style.fill = "hsl(var(--foreground))";
        } else {
          path.style.fill = "hsl(var(--muted))";
        }
      });
    });

    // Style the SVG itself so it stays inside its card
    svgEl.style.width = "100%";
    svgEl.style.height = "100%";
    svgEl.style.display = "block";
    svgEl.setAttribute("preserveAspectRatio", "xMidYMid meet");
  }, [svgContent]);

  return (
    <div className="relative w-full" ref={containerRef}>
      {/* Tooltip */}
      {hoveredCounty && (
        <div
          className="absolute z-10 px-3 py-1.5 bg-foreground text-background text-xs font-medium pointer-events-none whitespace-nowrap"
          style={{
            left: tooltipPos.x,
            top: tooltipPos.y,
            transform: "translateX(-50%)",
          }}
        >
          {hoveredCounty}
        </div>
      )}

      {/* SVG Map */}
      <div
        dangerouslySetInnerHTML={{ __html: svgContent }}
        className="w-full [&>svg]:w-full [&>svg]:h-auto [&>svg]:block"
      />

      {/* Legend */}
      <div className="flex items-center justify-center gap-8 mt-8">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-foreground" />
          <span className="text-minimal text-muted-foreground">ACTIVE REGIONS</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-muted border border-border" />
          <span className="text-minimal text-muted-foreground">EXPANDING SOON</span>
        </div>
      </div>
    </div>
  );
};

export default KenyaMap;
