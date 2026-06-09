import fs from "fs";
import path from "path";

export type GalleryOrientation = "vertical" | "horizontal" | "square";

export type GalleryCategory = "roofing" | "stairs" | "chimney" | "masonry" | "other";

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  filename: string;
  width: number;
  height: number;
  orientation: GalleryOrientation;
  category: GalleryCategory;
  folder: string;
};

function getGalleryCategory(filename: string): GalleryCategory {
  const lower = filename.toLowerCase();

  if (lower.includes("roofing") || lower.includes("roffing") || lower.includes("roof")) {
    return "roofing";
  }
  if (lower.includes("stair")) {
    return "stairs";
  }
  if (lower.includes("chimney")) {
    return "chimney";
  }
  if (lower.includes("masonry") || lower.includes("mason")) {
    return "masonry";
  }

  return "other";
}

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);
const SKIP_FILES = new Set(["logo-fix.png", "LOGO-FIX.PNG", "new-jersey-map.svg", "gaf-logo.svg"]);

const GALLERY_FOLDERS = [
  { folder: "images", publicPrefix: "/images" },
  { folder: "New folder", publicPrefix: "/New%20folder" },
] as const;

const GALLERY_IMAGE_ORDER = [
  "roofing8-gallery.webp",
  "roofing6-gallery.webp",
  "roofing5-gallery.webp",
  "roofing4-gallery.webp",
  "roofing2-gallery.webp",
  "roofing-gallery.webp",
  "roffing7-gallery.webp",
  "WhatsApp Image 2026-06-06 at 7.28.05 AM (1).webp",
  "WhatsApp Image 2026-06-06 at 7.28.05 AM (2).webp",
  "WhatsApp Image 2026-06-06 at 7.28.06 AM (1).webp",
  "WhatsApp Image 2026-06-06 at 7.28.06 AM (2).webp",
  "WhatsApp Image 2026-06-06 at 7.28.06 AM.webp",
  "WhatsApp Image 2026-06-06 at 7.28.07 AM (4).webp",
  "drone-image.jpeg",
  "stairs-details.jpeg",
  "stairs-gallery.webp",
  "stairs2-gallery.webp",
  "stairs3-gallery.webp",
  "stairs4-gallery.webp",
  "stairs5-gallery.webp",
  "stairs6-gallery.webp",
  "stairs7-gallery.webp",
  "chimney-details.jpeg",
  "chimney-gallery.webp",
  "chimney1-gallery.webp",
  "chimney2-gallery.webp",
  "chimney3-gallery.webp",
  "inside-chimney-gallery.webp",
  "masonry-gallery.webp",
  "masonry-siding-gallery.webp",
  "masonry4-gallery.webp",
  "masonry6-gallery.webp",
  "masonry8-gallery.webp",
] as const;

const GALLERY_ORDER_INDEX = new Map<string, number>(
  GALLERY_IMAGE_ORDER.map((filename, index) => [filename, index]),
);

function getGallerySortIndex(filename: string) {
  return GALLERY_ORDER_INDEX.get(filename) ?? Number.MAX_SAFE_INTEGER;
}

function readImageDimensions(filePath: string): { width: number; height: number } {
  const buffer = fs.readFileSync(filePath);

  if (buffer[0] === 0xff && buffer[1] === 0xd8) {
    let offset = 2;
    while (offset < buffer.length) {
      if (buffer[offset] !== 0xff) break;
      const marker = buffer[offset + 1];
      const length = buffer.readUInt16BE(offset + 2);
      if (marker === 0xc0 || marker === 0xc2) {
        return {
          height: buffer.readUInt16BE(offset + 5),
          width: buffer.readUInt16BE(offset + 7),
        };
      }
      offset += 2 + length;
    }
  }

  if (buffer.toString("ascii", 0, 8) === "\x89PNG\r\n\x1a\n") {
    return {
      width: buffer.readUInt32BE(16),
      height: buffer.readUInt32BE(20),
    };
  }

  if (buffer.toString("ascii", 0, 4) === "RIFF" && buffer.toString("ascii", 8, 12) === "WEBP") {
    const chunk = buffer.toString("ascii", 12, 16);
    if (chunk === "VP8 ") {
      return {
        width: buffer.readUInt16LE(26) & 0x3fff,
        height: buffer.readUInt16LE(28) & 0x3fff,
      };
    }
    if (chunk === "VP8L") {
      const bits = buffer.readUInt32LE(21);
      return {
        width: (bits & 0x3fff) + 1,
        height: ((bits >> 14) & 0x3fff) + 1,
      };
    }
    if (chunk === "VP8X") {
      return {
        width: 1 + buffer.readUIntLE(24, 3),
        height: 1 + buffer.readUIntLE(27, 3),
      };
    }
  }

  if (buffer.toString("ascii", 0, 6) === "GIF87a" || buffer.toString("ascii", 0, 6) === "GIF89a") {
    return {
      width: buffer.readUInt16LE(6),
      height: buffer.readUInt16LE(8),
    };
  }

  return { width: 1200, height: 800 };
}

function getOrientation(width: number, height: number): GalleryOrientation {
  if (height > width) return "vertical";
  if (width > height) return "horizontal";
  return "square";
}

function toAltText(filename: string) {
  const base = filename.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ").trim();
  return `Creative Pro Construction project photo — ${base}`;
}

function toPublicSrc(publicPrefix: string, filename: string) {
  const encoded = filename
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/");
  return `${publicPrefix}/${encoded}`;
}

function collectFromFolder(folder: string, publicPrefix: string): GalleryImage[] {
  const dir = path.join(process.cwd(), "public", folder);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return IMAGE_EXTENSIONS.has(ext) && !SKIP_FILES.has(file);
    })
    .map((file) => {
      const filePath = path.join(dir, file);
      const { width, height } = readImageDimensions(filePath);
      const orientation = getOrientation(width, height);

      return {
        id: `${folder}-${file}`,
        src: toPublicSrc(publicPrefix, file),
        alt: toAltText(file),
        filename: file,
        width,
        height,
        orientation,
        category: getGalleryCategory(file),
        folder,
      };
    });
}

export function getGalleryImages(): GalleryImage[] {
  const images = GALLERY_FOLDERS.flatMap(({ folder, publicPrefix }) =>
    collectFromFolder(folder, publicPrefix),
  );

  return images.sort((a, b) => {
    const orderDiff = getGallerySortIndex(a.filename) - getGallerySortIndex(b.filename);
    if (orderDiff !== 0) return orderDiff;
    return a.filename.localeCompare(b.filename, undefined, { sensitivity: "base" });
  });
}
