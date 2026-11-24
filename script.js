// The engine: reads `content` (from content.js), applies your theme, and asks the
// chosen layout (layout-classic.js / layout-techy.js / layout-fancy.js) to build the page.
// You don't need to edit this file. Everything is added with textContent, so
// odd characters in your content can't break the page.

const PRESETS = {
  coral: "#ff6b6b",
  ocean: "#2b7de9",
  grape: "#8b5cf6",
  forest: "#2f9e6e",
  sunset: "#f59e0b",
  bubblegum: "#ec4899",
};

const FONTS = {
  modern: { family: '"Inter"', google: "Inter:wght@400;600;700", fallback: "system-ui, sans-serif" },
  serif: { family: '"Fraunces"', google: "Fraunces:wght@400;600;700", fallback: "Georgia, serif" },
  rounded: { family: '"Nunito"', google: "Nunito:wght@400;600;800", fallback: "system-ui, sans-serif" },
  mono: { family: '"JetBrains Mono"', google: "JetBrains+Mono:wght@400;600;800", fallback: "ui-monospace, Menlo, monospace" },
};

const BG = { light: "#fbfbfd", dark: "#111118" };

// Each style is built by a function registered in its layout file (window.LAYOUTS).
const STYLE_NAMES = ["classic", "techy", "fancy"];

function showError(message) {
  const box = document.getElementById("error");
  box.hidden = false;
  box.textContent = message;
}

// ---------- helpers shared by all layouts ----------
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined && text !== null) node.textContent = text;
  return node;
}

function list(value) {
  return Array.isArray(value) ? value : [];
}

// Only allow safe link types. A bare email becomes a mailto: link.
function safeUrl(url) {
  if (typeof url !== "string") return null;
  const u = url.trim();
  if (/^https?:\/\//i.test(u) || /^mailto:/i.test(u)) return u;
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u)) return "mailto:" + u;
  if (/^[\w.-]+\.[a-z]{2,}(\/.*)?$/i.test(u)) return "https://" + u;
  return null;
}

// A link that opens safely. Falls back to a plain element if the URL isn't valid.
function linkEl(url, text, className) {
  const href = safeUrl(url);
  const node = el(href ? "a" : "span", className, text);
  if (href) {
    node.href = href;
    if (!href.startsWith("mailto:")) {
      node.target = "_blank";
      node.rel = "noopener noreferrer";
    }
  }
  return node;
}

// The profile photo. If the file is missing, it turns into an initials badge.
function avatar(c, className) {
  const initials = (c.name || "?")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
  const badge = () => el("div", className + " is-initials", initials);
  if (!c.photo) return badge();
  const img = el("img", className);
  img.alt = c.name ? `Photo of ${c.name}` : "Profile photo";
  img.src = c.photo;
  img.onerror = () => img.replaceWith(badge());
  return img;
}

// Education / experience / extracurriculars, only the ones that have items.
// tk = title key, ok = organisation key, ek = extra-text key.
function timelineSections(c) {
  return [
    { id: "education", title: "Education", items: list(c.education), tk: "degree", ok: "school", ek: "details" },
    { id: "experience", title: "Experience", items: list(c.experience), tk: "role", ok: "org", ek: "description" },
    { id: "extracurriculars", title: "Extracurriculars", items: list(c.extracurriculars), tk: "role", ok: "org", ek: "description" },
  ].filter((s) => s.items.length);
}

// ---------- colors ----------
function hexToRgb(hex) {
  let h = hex.replace("#", "");
  if (h.length === 3) h = h.split("").map((ch) => ch + ch).join("");
  const n = parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function luminance([r, g, b]) {
  const f = (v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

function contrast(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

// Nudge the accent lighter/darker until it's readable as text on the background.
function readableAccent(rgb, bgRgb, wantDarker) {
  let [r, g, b] = rgb;
  for (let i = 0; i < 20 && contrast([r, g, b], bgRgb) < 4.5; i++) {
    const t = wantDarker ? 0 : 255;
    r = Math.round(r + (t - r) * 0.1);
    g = Math.round(g + (t - g) * 0.1);
    b = Math.round(b + (t - b) * 0.1);
  }
  return `rgb(${r}, ${g}, ${b})`;
}

function applyTheme(theme, mode) {
  const root = document.documentElement;
  root.dataset.mode = mode;

  let accent = theme.accent || "ocean";
  accent = PRESETS[String(accent).toLowerCase()] || accent;
  if (!/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(accent)) accent = PRESETS.ocean;

  const rgb = hexToRgb(accent);
  const bgRgb = hexToRgb(BG[mode]);
  root.style.setProperty("--accent", accent);
  // White text on accent buttons, unless the accent is too light for that.
  root.style.setProperty("--on-accent", contrast(rgb, [255, 255, 255]) >= 3 ? "#ffffff" : "#111111");
  root.style.setProperty("--accent-text", readableAccent(rgb, bgRgb, mode === "light"));
}

function loadGoogleFont(spec) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css2?family=${spec}&display=swap`;
  document.head.appendChild(link);
}

// `techy` always uses the mono font and `fancy` always uses a serif for headings;
// otherwise the font you pick in content.js is used.
function applyFonts(style, fontName) {
  const font = FONTS[style === "techy" ? "mono" : fontName] || FONTS.modern;
  document.documentElement.style.setProperty("--font", `${font.family}, ${font.fallback}`);
  loadGoogleFont(font.google);
  if (style === "fancy") loadGoogleFont("Fraunces:ital,wght@0,500;0,700;0,800;1,500");
}

// ---------- boot ----------
function render() {
  if (typeof content === "undefined") {
    showError(
      "Couldn't read content.js. Check for a missing quote (\"), comma (,) or bracket in that file. " +
        "Open your browser's console (F12) for the exact line."
    );
    return;
  }
  try {
    const c = content;
    const theme = c.theme || {};
    const style = STYLE_NAMES.includes(theme.style) ? theme.style : "classic";
    document.body.classList.add("style-" + style);

    // Dark / light. The techy style is always dark.
    let saved = null;
    try { saved = localStorage.getItem("mode"); } catch (e) {}
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    let mode = saved || (theme.mode === "light" || theme.mode === "dark" ? theme.mode : system);
    if (style === "techy") mode = "dark";

    applyFonts(style, theme.font);
    applyTheme(theme, mode);
    document.getElementById("mode-toggle").onclick = () => {
      mode = mode === "dark" ? "light" : "dark";
      try { localStorage.setItem("mode", mode); } catch (e) {}
      applyTheme(theme, mode);
    };

    document.title = c.name ? `${c.name} | Portfolio` : "Portfolio";
    document.getElementById("app").appendChild(window.LAYOUTS[style](c));
  } catch (err) {
    showError("Something in content.js has an unexpected shape: " + err.message);
  }
}

render();
