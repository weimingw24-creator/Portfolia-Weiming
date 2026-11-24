// Layout: fancy. Big serif hero with an arched photo, swipeable project cards,
// a timeline, and sections that fade in as you scroll.
(window.LAYOUTS = window.LAYOUTS || {}).fancy = function (c) {
  const root = el("div", "fy-root");

  // ----- hero -----
  const hero = el("header", "fy-hero");
  const text = el("div", "fy-hero-text");
  text.appendChild(el("p", "fy-kicker", "Portfolio"));
  text.appendChild(el("h1", "", c.name || "Your Name"));
  if (c.tagline) text.appendChild(el("p", "fy-tagline", c.tagline));
  if (c.mission) text.appendChild(el("p", "fy-mission", c.mission));
  const links = list(c.links).filter((l) => l && safeUrl(l.url));
  if (links.length) {
    const row = el("nav", "fy-links");
    row.setAttribute("aria-label", "Links");
    links.forEach((l) => row.appendChild(linkEl(l.url, l.label || l.url, "fy-btn")));
    text.appendChild(row);
  }
  const arch = el("div", "fy-arch");
  arch.appendChild(avatar(c, "fy-photo"));
  hero.append(text, arch);
  root.appendChild(hero);

  const section = (title, child) => {
    const s = el("section", "fy-sec fy-reveal");
    s.appendChild(el("h2", "", title));
    s.appendChild(child);
    root.appendChild(s);
  };

  // ----- projects: a row of cards you can swipe -----
  if (list(c.projects).length) {
    const rail = el("div", "fy-rail");
    list(c.projects).forEach((p) => {
      const card = linkEl(p.url, "", "fy-proj");
      card.append(el("strong", "", p.title || "Untitled project"));
      if (p.description) card.appendChild(el("span", "", p.description));
      if (list(p.tags).length) card.appendChild(el("em", "", list(p.tags).join(" · ")));
      if (safeUrl(p.url)) card.appendChild(el("span", "fy-go", "View project ↗"));
      rail.appendChild(card);
    });
    section("Selected work", rail);
  }

  // ----- timelines -----
  const titles = { extracurriculars: "Beyond the classroom" };
  timelineSections(c).forEach((s) => {
    const tl = el("div", "fy-tl");
    s.items.forEach((i) => {
      const row = el("div", "fy-tl-row");
      row.appendChild(el("span", "fy-years", i.years || ""));
      const body = el("div");
      body.appendChild(el("strong", "", i[s.tk] || ""));
      if (i[s.ok]) body.appendChild(el("p", "fy-muted", i[s.ok]));
      if (i[s.ek]) body.appendChild(el("p", "", i[s.ek]));
      row.appendChild(body);
      tl.appendChild(row);
    });
    section(titles[s.id] || s.title, tl);
  });

  // ----- skills -----
  if (list(c.skills).length) {
    const chips = el("div", "fy-skills");
    list(c.skills).forEach((s) => chips.appendChild(el("span", "", s)));
    section("Toolkit", chips);
  }

  // Fade sections in as they scroll into view (everything just shows if unsupported).
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("fy-in")),
      { threshold: 0.1 }
    );
    setTimeout(() => root.querySelectorAll(".fy-reveal").forEach((n) => io.observe(n)), 0);
  } else {
    root.querySelectorAll(".fy-reveal").forEach((n) => n.classList.add("fy-in"));
  }
  return root;
};
