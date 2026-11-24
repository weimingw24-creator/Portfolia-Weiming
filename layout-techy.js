// Layout: techy. Dark terminal look; one section visible at a time, switched with tabs.
// Tip: add #education (or #projects, #experience ...) to the URL to open that tab.
(window.LAYOUTS = window.LAYOUTS || {}).techy = function (c) {
  const root = el("div", "t-root");

  // ----- header -----
  const head = el("header", "t-head");
  const photo = el("div", "t-photo");
  photo.appendChild(avatar(c, "t-img"));
  const id = el("div", "t-id");
  id.appendChild(el("p", "t-path", "~/" + (c.name || "me").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")));
  id.appendChild(el("h1", "", c.name || "Your Name"));
  if (c.tagline) id.appendChild(el("p", "t-tagline", "// " + c.tagline));
  head.append(photo, id);
  root.appendChild(head);

  if (c.mission) root.appendChild(el("p", "t-mission", c.mission));

  const links = list(c.links).filter((l) => l && safeUrl(l.url));
  if (links.length) {
    const nav = el("nav", "t-links");
    nav.setAttribute("aria-label", "Links");
    links.forEach((l) => nav.appendChild(linkEl(l.url, "[ " + (l.label || l.url) + " ↗ ]")));
    root.appendChild(nav);
  }

  // ----- tabs -----
  const entry = (title, titleUrl, meta, text, tags) => {
    const row = el("div", "t-entry");
    row.appendChild(titleUrl ? linkEl(titleUrl, title, "t-title") : el("strong", "t-title", title));
    if (meta) row.appendChild(el("span", "t-meta", meta));
    if (text) row.appendChild(el("span", "", text));
    if (tags && tags.length) {
      const t = el("span", "t-tags");
      tags.forEach((x) => t.appendChild(el("em", "", "#" + x)));
      row.appendChild(t);
    }
    return row;
  };

  const tabs = [];
  if (list(c.projects).length) {
    tabs.push({
      id: "projects",
      count: list(c.projects).length,
      rows: () => list(c.projects).map((p) => entry(p.title || "Untitled project", p.url, "", p.description, list(p.tags))),
    });
  }
  timelineSections(c).forEach((s) => {
    tabs.push({
      id: s.id,
      count: s.items.length,
      rows: () => s.items.map((i) => entry(i[s.tk] || "", null, [i[s.ok], i.years].filter(Boolean).join(" · "), i[s.ek])),
    });
  });
  if (list(c.skills).length) {
    tabs.push({
      id: "skills",
      count: list(c.skills).length,
      rows: () => {
        const chips = el("div", "t-chips");
        list(c.skills).forEach((s) => chips.appendChild(el("span", "", s)));
        return [chips];
      },
    });
  }
  if (!tabs.length) return root;

  const bar = el("div", "t-tabs");
  bar.setAttribute("role", "tablist");
  const panel = el("div", "t-panel");
  panel.setAttribute("role", "tabpanel");

  const show = (i) => {
    [...bar.children].forEach((b, j) => {
      b.classList.toggle("on", i === j);
      b.setAttribute("aria-selected", String(i === j));
    });
    const hd = el("div", "t-panel-head");
    hd.append(el("span", "", "~/" + tabs[i].id), el("span", "", tabs[i].count + (tabs[i].count === 1 ? " item" : " items")));
    const body = el("div", "t-panel-body");
    tabs[i].rows().forEach((n) => body.appendChild(n));
    panel.replaceChildren(hd, body);
  };

  tabs.forEach((t, i) => {
    const b = el("button", "t-tab", t.id);
    b.type = "button";
    b.setAttribute("role", "tab");
    b.onclick = () => show(i);
    bar.appendChild(b);
  });
  root.append(bar, panel);

  const fromHash = tabs.findIndex((t) => "#" + t.id === location.hash);
  show(fromHash >= 0 ? fromHash : 0);
  return root;
};
