// Layout: classic (the default). A centred hero, then cards.
(window.LAYOUTS = window.LAYOUTS || {}).classic = function (c) {
  const page = document.createDocumentFragment();

  // ----- hero -----
  const hero = el("header", "hero");
  const wrap = el("div", "avatar-wrap");
  wrap.appendChild(avatar(c, "avatar"));
  hero.appendChild(wrap);
  hero.appendChild(el("h1", "", c.name || "Your Name"));
  if (c.tagline) hero.appendChild(el("p", "tagline", c.tagline));
  if (c.mission) hero.appendChild(el("p", "mission", c.mission));
  const links = list(c.links).filter((l) => l && safeUrl(l.url));
  if (links.length) {
    const row = el("nav", "links");
    row.setAttribute("aria-label", "Links");
    links.forEach((l) => row.appendChild(linkEl(l.url, l.label || l.url, "btn")));
    hero.appendChild(row);
  }
  page.appendChild(hero);

  const section = (title, child) => {
    const s = el("section");
    s.appendChild(el("h2", "", title));
    s.appendChild(child);
    page.appendChild(s);
  };

  // ----- skills -----
  if (list(c.skills).length) {
    const ul = el("ul", "chips");
    list(c.skills).forEach((s) => ul.appendChild(el("li", "chip", s)));
    section("Skills", ul);
  }

  // ----- projects -----
  if (list(c.projects).length) {
    const cards = el("div", "cards");
    list(c.projects).forEach((p) => {
      const card = el("article", "card");
      const h3 = el("h3");
      h3.appendChild(linkEl(p.url, p.title || "Untitled project"));
      card.appendChild(h3);
      if (p.description) card.appendChild(el("p", "", p.description));
      if (list(p.tags).length) {
        const ul = el("ul", "chips");
        list(p.tags).forEach((t) => ul.appendChild(el("li", "chip tag", t)));
        card.appendChild(ul);
      }
      cards.appendChild(card);
    });
    section("Projects", cards);
  }

  // ----- education / experience / extracurriculars -----
  timelineSections(c).forEach((s) => {
    const cards = el("div", "cards");
    s.items.forEach((i) => {
      const card = el("article", "card");
      card.appendChild(el("h3", "", i[s.tk] || ""));
      const meta = [i[s.ok], i.years].filter(Boolean).join(" · ");
      if (meta) card.appendChild(el("p", "meta", meta));
      if (i[s.ek]) card.appendChild(el("p", "", i[s.ek]));
      cards.appendChild(card);
    });
    section(s.title, cards);
  });

  return page;
};
