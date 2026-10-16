(function () {
  "use strict";

  const body = document.body;
  const rootPath = body.dataset.siteRoot || "./";
  const currentPageId = body.dataset.pageId || "home";
  const catalog = window.SDN_CATALOG || { categories: [], topics: [], questions: [] };

  function resolveSitePath(path) {
    return new URL(path, new URL(rootPath, window.location.href)).href;
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function navLink(item, label) {
    const active = item.id === currentPageId ? " active" : "";
    return `<li><a class="nav-link${active}" href="${resolveSitePath(item.path)}"><span>${escapeHtml(label || item.title)}</span></a></li>`;
  }

  function overviewLink(id, path) {
    const active = id === currentPageId ? " active" : "";
    return `<li><a class="nav-link quick${active}" href="${resolveSitePath(path)}"><span>&#9733;</span><span>Overview &amp; Quick Revision</span></a></li>`;
  }

  function imageRevisionLink(id, path) {
    const active = id === currentPageId ? " active" : "";
    return `<li><a class="nav-link quick${active}" href="${resolveSitePath(path)}"><span>&#9638;</span><span>Image Revision</span></a></li>`;
  }

  // Sidebar order: topics grouped by category, questions as listed.
  function orderedItems(section) {
    return section === "topics"
      ? catalog.categories.flatMap((category) => catalog.topics.filter((topic) => topic.category === category.id))
      : catalog.questions;
  }

  function humanize(file) {
    const name = file.replace(/\.[a-z0-9]+$/i, "").replaceAll("-", " ");
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  function renderRevisionGallery() {
    const host = document.querySelector("[data-revision-gallery]");
    if (!host) return;
    const section = host.dataset.revisionGallery;
    const items = orderedItems(section).filter((item) => item.images && item.images.length);
    host.innerHTML = items.length
      ? items.map((item) => `
        <section class="revision-block" id="${escapeHtml(item.id)}">
          <h2><a href="${resolveSitePath(item.path)}">${escapeHtml(item.title)}</a></h2>
          ${item.images.map((file) => {
            const src = resolveSitePath(`assets/media/${section}/${item.id}/${file}`);
            const label = escapeHtml(humanize(file));
            return `<figure class="media-frame"><a href="${src}" aria-label="Open ${label} full size"><img src="${src}" loading="lazy" decoding="async" alt="${label}"></a><figcaption>${label}</figcaption></figure>`;
          }).join("")}
        </section>`).join("")
      : '<div class="empty-state">No images yet.</div>';
  }

  function renderSidebar() {
    const host = document.getElementById("site-sidebar");
    if (!host) return;

    const topicGroups = catalog.categories.map((category) => {
      const topics = catalog.topics.filter((topic) => topic.category === category.id);
      if (!topics.length) return "";
      return `
        <li>
          <span class="nav-link">${escapeHtml(category.title)}</span>
          <ul class="nav-sublist">${topics.map((topic) => navLink(topic)).join("")}</ul>
        </li>`;
    }).join("");

    const questionLinks = catalog.questions.map((question) => navLink(question)).join("");

    host.innerHTML = `
      <a class="sidebar-brand" href="${resolveSitePath("index.html")}">
        <span class="brand-mark">SD</span>
        <span class="brand-copy"><strong>System Design Notebook</strong><span>Learn. Visualize. Revise.</span></span>
      </a>
      <div class="sidebar-actions">
        <button class="search-button" type="button" data-open-search aria-label="Search the notebook">Search <span class="nav-badge">Ctrl K</span></button>
        <button class="icon-button" type="button" data-theme-toggle aria-label="Toggle theme">Theme</button>
      </div>
      <nav aria-label="Primary navigation">
        <section class="nav-section">
          <p class="nav-section-title">Overview</p>
          <ul class="nav-list">
            <li><a class="nav-link${currentPageId === "home" ? " active" : ""}" href="${resolveSitePath("index.html")}"><span>Home</span></a></li>
          </ul>
        </section>
        <section class="nav-section">
          <p class="nav-section-title">Topics</p>
          <ul class="nav-list">${overviewLink("topics", "topics/index.html")}${imageRevisionLink("topics-revision", "topics/revision.html")}${topicGroups}</ul>
        </section>
        <section class="nav-section">
          <p class="nav-section-title">Questions</p>
          <ul class="nav-list">${overviewLink("questions", "questions/index.html")}${imageRevisionLink("questions-revision", "questions/revision.html")}${questionLinks}</ul>
        </section>
      </nav>`;
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("sdn:theme", theme);
  }

  function initTheme() {
    const stored = localStorage.getItem("sdn:theme");
    const initial = stored || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    applyTheme(initial);
    document.addEventListener("click", (event) => {
      const button = event.target.closest("[data-theme-toggle]");
      if (!button) return;
      applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
    });
  }

  function initSidebar() {
    document.addEventListener("click", (event) => {
      if (event.target.closest("[data-mobile-menu]")) {
        body.classList.toggle("sidebar-open");
      } else if (body.classList.contains("sidebar-open") && !event.target.closest("#site-sidebar")) {
        body.classList.remove("sidebar-open");
      }
    });
  }

  function buildSearchIndex() {
    const entries = [
      { id: "home", title: "System Design Notebook", subtitle: "Home", path: "index.html", keywords: ["home", "system design"] },
      { id: "topics", title: "Topics - Quick Revision", subtitle: "Section", path: "topics/index.html", keywords: ["topics", "quick revision", "cheat sheet"] },
      { id: "questions", title: "Questions - Quick Revision", subtitle: "Section", path: "questions/index.html", keywords: ["questions", "design", "quick revision", "cheat sheet"] },
      { id: "topics-revision", title: "Topics - Image Revision", subtitle: "All topic images in order", path: "topics/revision.html", keywords: ["image revision", "cheat sheets", "revise everything"] },
      { id: "questions-revision", title: "Questions - Image Revision", subtitle: "All question images in order", path: "questions/revision.html", keywords: ["image revision", "cheat sheets", "revise everything"] }
    ];
    const categoryTitle = Object.fromEntries(catalog.categories.map((category) => [category.id, category.title]));

    catalog.topics.forEach((topic) => entries.push({ ...topic, subtitle: `Topic - ${categoryTitle[topic.category] || ""}` }));
    catalog.questions.forEach((question) => entries.push({ ...question, subtitle: "Question" }));
    return entries;
  }

  function ensureSearchDialog() {
    let dialog = document.getElementById("global-search");
    if (dialog) return dialog;
    dialog = document.createElement("dialog");
    dialog.id = "global-search";
    dialog.className = "search-dialog";
    dialog.innerHTML = `
      <div class="search-head">
        <label><span class="sr-only">Search</span><input class="search-input" type="search" placeholder="Search topics and questions" autocomplete="off" data-search-input></label>
        <button class="icon-button" type="button" data-close-search aria-label="Close search">Close</button>
      </div>
      <div class="search-results" data-search-results></div>`;
    document.body.appendChild(dialog);
    return dialog;
  }

  function initSearch() {
    const dialog = ensureSearchDialog();
    const input = dialog.querySelector("[data-search-input]");
    const results = dialog.querySelector("[data-search-results]");
    const index = buildSearchIndex();

    function render(query) {
      const normalized = query.trim().toLowerCase();
      const matches = index.filter((item) => {
        const haystack = [item.title, item.subtitle, ...(item.keywords || [])].join(" ").toLowerCase();
        return !normalized || haystack.includes(normalized);
      }).slice(0, 40);
      results.innerHTML = matches.length
        ? matches.map((item) => `<a class="search-result" href="${resolveSitePath(item.path)}"><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.subtitle || "")}</small></a>`).join("")
        : '<div class="empty-state">No matching page found.</div>';
    }

    function open() {
      if (!dialog.open) dialog.showModal();
      render(input.value);
      window.setTimeout(() => input.focus(), 20);
    }

    function close() {
      if (dialog.open) dialog.close();
    }

    document.addEventListener("click", (event) => {
      if (event.target.closest("[data-open-search]")) open();
      if (event.target.closest("[data-close-search]")) close();
    });
    document.addEventListener("keydown", (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        open();
      }
      if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
        event.preventDefault();
        open();
      }
    });
    input.addEventListener("input", () => render(input.value));
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) close();
    });
  }

  function renderPager() {
    const main = document.getElementById("main-content");
    if (!main) return;
    // Same order as the sidebar: topics grouped by category, then questions.
    const sequences = [orderedItems("topics"), orderedItems("questions")];
    const list = sequences.find((items) => items.some((item) => item.id === currentPageId));
    if (!list) return;
    const index = list.findIndex((item) => item.id === currentPageId);
    const prev = list[index - 1];
    const next = list[index + 1];
    const link = (item, dir) => item
      ? `<a class="pager-link ${dir}" href="${resolveSitePath(item.path)}" rel="${dir}"><small>${dir === "prev" ? "← Previous" : "Next →"}</small><strong>${escapeHtml(item.title)}</strong></a>`
      : "<span></span>";
    main.insertAdjacentHTML("beforeend", `<nav class="pager no-print" aria-label="Previous and next">${link(prev, "prev")}${link(next, "next")}</nav>`);
  }

  function initImageViewer() {
    const ZOOM_STEPS = [1, 1.5, 2, 3];
    let dialog = null;
    let zoomIndex = 0;

    function pageImages() {
      return [...document.querySelectorAll("#main-content .media-frame a")].filter((link) => link.querySelector("img"));
    }

    function setZoom(index) {
      zoomIndex = Math.max(0, Math.min(ZOOM_STEPS.length - 1, index));
      dialog.querySelector(".viewer-pages").style.setProperty("--zoom", ZOOM_STEPS[zoomIndex]);
      dialog.querySelector(".viewer-zoom-level").textContent = `${Math.round(ZOOM_STEPS[zoomIndex] * 100)}%`;
    }

    function close() {
      if (!dialog) return;
      dialog.close();
    }

    function open(links, startIndex) {
      dialog = document.createElement("dialog");
      dialog.className = "viewer";
      dialog.setAttribute("aria-label", "Image viewer");
      dialog.innerHTML = `
        <div class="viewer-bar">
          <span class="viewer-count" aria-live="polite"></span>
          <div class="viewer-actions">
            <button class="icon-button" type="button" data-viewer-zoom="-1" aria-label="Zoom out">&minus;</button>
            <span class="viewer-zoom-level">100%</span>
            <button class="icon-button" type="button" data-viewer-zoom="1" aria-label="Zoom in">+</button>
            <button class="icon-button" type="button" data-viewer-close>Close</button>
          </div>
        </div>
        <div class="viewer-scroll" tabindex="-1">
          <div class="viewer-pages">
            ${links.map((link) => {
              const img = link.querySelector("img");
              const caption = link.closest("figure")?.querySelector("figcaption")?.textContent || img.alt;
              const w = img.naturalWidth || Number(img.getAttribute("width")) || 3;
              const h = img.naturalHeight || Number(img.getAttribute("height")) || 4;
              return `<figure class="viewer-page"><img src="${escapeHtml(link.href)}" alt="${escapeHtml(img.alt)}" decoding="async" style="aspect-ratio:${w} / ${h}"><figcaption>${escapeHtml(caption)}</figcaption></figure>`;
            }).join("")}
          </div>
        </div>`;
      document.body.appendChild(dialog);
      body.classList.add("viewer-open");
      dialog.showModal();
      setZoom(0);

      const scroller = dialog.querySelector(".viewer-scroll");
      const pages = [...dialog.querySelectorAll(".viewer-page")];
      const count = dialog.querySelector(".viewer-count");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) count.textContent = `${pages.indexOf(entry.target) + 1} / ${pages.length}`;
        });
      }, { root: scroller, rootMargin: "-45% 0px -45% 0px" });
      pages.forEach((page) => observer.observe(page));
      count.textContent = `${startIndex + 1} / ${pages.length}`;
      const goToStart = () => { if (dialog) pages[startIndex].scrollIntoView({ block: "start" }); };
      goToStart();
      // Earlier images may resize as they load; re-anchor on the chosen one.
      Promise.all(pages.slice(0, startIndex + 1).map((page) => page.querySelector("img").decode().catch(() => {}))).then(goToStart);
      scroller.focus();

      dialog.addEventListener("click", (event) => {
        const zoom = event.target.closest("[data-viewer-zoom]");
        if (zoom) setZoom(zoomIndex + Number(zoom.dataset.viewerZoom));
        if (event.target.closest("[data-viewer-close]")) close();
      });
      dialog.addEventListener("keydown", (event) => {
        if (event.key === "Escape") { event.preventDefault(); close(); }
        if (event.key === "+" || event.key === "=") setZoom(zoomIndex + 1);
        if (event.key === "-") setZoom(zoomIndex - 1);
      });
      dialog.addEventListener("close", () => {
        observer.disconnect();
        dialog.remove();
        dialog = null;
        body.classList.remove("viewer-open");
      });
    }

    document.addEventListener("click", (event) => {
      const link = event.target.closest("#main-content .media-frame a");
      if (!link || !link.querySelector("img") || event.metaKey || event.ctrlKey || event.shiftKey) return;
      event.preventDefault();
      const links = pageImages();
      open(links, Math.max(0, links.indexOf(link)));
    });
  }

  function initPrintButtons() {
    document.addEventListener("click", (event) => {
      if (event.target.closest("[data-print-page]")) window.print();
    });
  }

  function initCurrentYear() {
    document.querySelectorAll("[data-current-year]").forEach((node) => { node.textContent = new Date().getFullYear(); });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    renderSidebar();
    renderPager();
    renderRevisionGallery();
    initSidebar();
    initSearch();
    initPrintButtons();
    initImageViewer();
    initCurrentYear();
  });
})();
