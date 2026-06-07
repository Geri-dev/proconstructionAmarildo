import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const source = path.join(
  process.env.USERPROFILE ?? "",
  ".cursor/projects/c-Users-user-Desktop-constructionpro/agent-tools/8764b117-148c-4a0b-b315-7f1bbdd605b7.txt"
);

const raw = fs.readFileSync(source, "utf8").replace(/^export default /, "");
const data = JSON.parse(raw);
const nj = data.locations.find((l) => l.id === "nj");

if (!nj) {
  throw new Error("New Jersey path not found in svg-maps data");
}

function pathBBox(d) {
  const segments = d.match(/[a-zA-Z][^a-zA-Z]*/g) ?? [];
  let cx = 0;
  let cy = 0;
  let sx = 0;
  let sy = 0;
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  const add = (x, y) => {
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  };

  for (const seg of segments) {
    const cmd = seg[0];
    const nums = (seg.slice(1).match(/-?\d*\.?\d+/g) ?? []).map(Number);
    let i = 0;
    const read = () => nums[i++];

    if (cmd === "M" || cmd === "m") {
      const rel = cmd === "m";
      let first = true;
      while (i < nums.length) {
        const dx = read();
        const dy = read();
        if (rel) {
          cx += dx;
          cy += dy;
        } else {
          cx = dx;
          cy = dy;
        }
        if (first) {
          sx = cx;
          sy = cy;
          first = false;
        }
        add(cx, cy);
      }
      continue;
    }

    if (cmd === "L" || cmd === "l") {
      const rel = cmd === "l";
      while (i < nums.length) {
        const dx = read();
        const dy = read();
        if (rel) {
          cx += dx;
          cy += dy;
        } else {
          cx = dx;
          cy = dy;
        }
        add(cx, cy);
      }
      continue;
    }

    if (cmd === "H" || cmd === "h") {
      const rel = cmd === "h";
      while (i < nums.length) {
        const dx = read();
        cx = rel ? cx + dx : dx;
        add(cx, cy);
      }
      continue;
    }

    if (cmd === "V" || cmd === "v") {
      const rel = cmd === "v";
      while (i < nums.length) {
        const dy = read();
        cy = rel ? cy + dy : dy;
        add(cx, cy);
      }
      continue;
    }

    if (cmd === "Z" || cmd === "z") {
      cx = sx;
      cy = sy;
      add(cx, cy);
    }
  }

  const pad = 14;
  return `${minX - pad} ${minY - pad} ${maxX - minX + pad * 2} ${maxY - minY + pad * 2}`;
}

const viewBox = pathBBox(nj.path);

const svg = [
  '<svg xmlns="http://www.w3.org/2000/svg"',
  ` viewBox="${viewBox}"`,
  ' role="img" aria-label="New Jersey">',
  `<path fill="#d4d4d4" stroke="#a3a3a3" stroke-width="0.75" d="${nj.path}"/>`,
  "</svg>",
].join("");

const outPath = path.join(__dirname, "../public/images/new-jersey-map.svg");
fs.writeFileSync(outPath, svg);
console.log("Wrote", outPath, "viewBox:", viewBox);
