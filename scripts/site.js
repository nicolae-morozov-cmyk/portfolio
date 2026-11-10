async function startSite() {
  const sourceResponse = await fetch(new URL("./source-content.json?v=20261110-4", import.meta.url));
  if (!sourceResponse.ok) throw new Error(`Portfolio content request failed (${sourceResponse.status})`);
  const source = await sourceResponse.json();

const routes = {
  home: "",
  index: "Index",
  about: "About-Me",
  lucid: "Lucid-Coffee-Roasters-copy",
  ahead: "ahead-studio",
  farAway: "Far-away-from-Home-Photobook",
  spoon: "Spoon-Studio",
  lutnita: "Lutni-a",
};

const siteBase = new URL(".", document.baseURI).pathname.replace(/\/?$/, "/");
const sitePath = (route = "") => `${siteBase}${route}${route ? "/" : ""}`;

const projects = [
  { route: "Lucid-Coffee-Roasters-copy", key: "lucid", label: "Lucid Coffee Roasters copy", thumb: "INDEX thumbnails/Thumbnail-dark.gif" },
  { route: "ahead-studio", key: "ahead", label: "ahead studio", thumb: "INDEX thumbnails/Thumbnail-Ahead-Light.gif" },
  { route: "Far-away-from-Home-Photobook", key: "farAway", label: "Far away from Home - Photobook", thumb: "Far Away from Home/Dark_Thumbnail.jpg" },
  { route: "Spoon-Studio", key: "spoon", label: "Spoon Studio", thumb: "INDEX thumbnails/Spoon_logo_2_1.gif" },
  { route: "Lutni-a", key: "lutnita", label: "Lutnița", thumb: "INDEX thumbnails/Logo_Loop_2.gif" },
];

const pathFor = (relative) => `${siteBase}${encodeURI(`asset folder from nicolaemorozov.com/${relative}`).replaceAll("#", "%23")}`;
const projectFor = (route) => source.projects.find((project) => project.route === route);
const assetLookup = new Map();

for (const project of source.projects) {
  for (const asset of project.images) {
    if (asset.path) assetLookup.set(String(asset.id), pathFor(asset.path));
  }
}
for (const asset of source.about.images) {
  if (asset.path) assetLookup.set(String(asset.id), pathFor(asset.path));
}

const videoFolders = {
  lucid: "Lucid",
  ahead: "ahead studio",
  farAway: "Far Away from Home",
  spoon: "Sp00n",
  lutnita: "lutnita",
};

function localVideo(src, key) {
  const file = decodeURIComponent(src.split("/").pop().split("?")[0]);
  return pathFor(`${videoFolders[key]}/${file}`);
}

function header(homepage = false) {
  return `<header id="top" class="site-header${homepage ? " homepage-header" : ""}">
    <a class="brand-mark" href="${sitePath()}" aria-label="Nicolae Morozov home"><img src="${pathFor("logo.svg")}" alt="NM"></a>
    <nav class="desktop-nav" aria-label="Main navigation"><a href="mailto:nicolae.morozov@gmail.com?subject=Request%20for%20CV">Request a CV</a><a class="instagram-link" href="https://www.instagram.com/nicolae_dymok/" target="_blank" rel="noreferrer" aria-label="Instagram"><svg aria-hidden="true" viewBox="0 0 24 24"><rect x="5" y="5" width="14" height="14" rx="3"></rect><circle cx="12" cy="12" r="3.5"></circle><circle class="instagram-dot" cx="17.3" cy="6.9" r=".8"></circle></svg></a><span class="local-clock" aria-label="Your local time"><time></time><span class="clock-offset"></span></span></nav>
    <nav class="mobile-nav" aria-label="Main navigation"><a href="mailto:nicolae.morozov@gmail.com?subject=Request%20for%20CV">Request a CV</a><span class="local-clock" aria-label="Your local time"><time></time><span class="clock-offset"></span></span><a class="instagram-link" href="https://www.instagram.com/nicolae_dymok/" target="_blank" rel="noreferrer" aria-label="Instagram"><svg aria-hidden="true" viewBox="0 0 24 24"><rect x="5" y="5" width="14" height="14" rx="3"></rect><circle cx="12" cy="12" r="3.5"></circle><circle class="instagram-dot" cx="17.3" cy="6.9" r=".8"></circle></svg></a></nav>
  </header>`;
}

function identity(homepage = false) {
  return `<section class="identity${homepage ? " homepage-identity" : ""}" aria-label="Nicolae Morozov, art directing and visual communication">
    <h1><span>Nicolae</span><span>Morozov</span></h1>
    <div class="identity-aside"><p class="descriptor">art directing &amp; visual communication</p><p class="inquiry">For inquiries: <a href="mailto:nicolae.morozov@gmail.com">nicolae.morozov@gmail.com</a></p></div>
    <div class="professional-intro"><p>With 12+ years of experience, I create brand identities and visual systems across print and digital. My approach combines concept, typography, and storytelling to build clear, cohesive visual communication.</p></div>
  </section>`;
}

function initLocalClock(root) {
  const clocks = [...root.querySelectorAll(".local-clock")];
  if (!clocks.length) return;
  const timeFormat = new Intl.DateTimeFormat(undefined, { hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23" });
  const update = () => {
    const now = new Date();
    const time = timeFormat.format(now);
    const offsetMinutes = -now.getTimezoneOffset();
    const offsetSign = offsetMinutes >= 0 ? "+" : "-";
    const absoluteOffset = Math.abs(offsetMinutes);
    const offsetHours = Math.floor(absoluteOffset / 60);
    const offsetRemainder = absoluteOffset % 60;
    const offset = `GMT${offsetSign}${offsetHours}${offsetRemainder ? `:${String(offsetRemainder).padStart(2, "0")}` : ""}`;
    clocks.forEach((clock) => {
      const timeElement = clock.querySelector("time");
      timeElement.textContent = time;
      timeElement.dateTime = now.toISOString();
      clock.querySelector(".clock-offset").textContent = offset;
      clock.setAttribute("aria-label", `Local time ${time}, ${offset}`);
    });
  };
  update();
  window.setInterval(update, 1_000);
}

function prepareMarkup(markup, projectKey = null, assets = [], homepage = false) {
  const doc = new DOMParser().parseFromString(`<div id="fragment">${markup}</div>`, "text/html");
  const fragment = doc.querySelector("#fragment");
  const idPaths = new Map(assets.map((asset) => [String(asset.id), asset.path ? pathFor(asset.path) : null]));

  fragment.querySelectorAll("script, style").forEach((node) => node.remove());
  fragment.querySelectorAll("a[data-tags]").forEach((node) => node.remove());
  fragment.querySelectorAll("[grid-row]").forEach((node) => node.classList.add("source-grid-row"));
  fragment.querySelectorAll("[grid-col]").forEach((node) => node.classList.add("source-grid-col"));

  fragment.querySelectorAll("img[data-mid]").forEach((image) => {
    const local = idPaths.get(image.dataset.mid) ?? assetLookup.get(image.dataset.mid);
    if (!local) { image.remove(); return; }
    image.src = local;
    image.removeAttribute("data-src");
    image.loading = "lazy";
    image.decoding = "async";
    image.alt ||= "Project work";
    if (image.dataset.scale && Number(image.dataset.scale) < 100) image.style.width = `${image.dataset.scale}%`;
  });

  fragment.querySelectorAll("video[src]").forEach((video) => {
    if (!projectKey) return;
    video.src = localVideo(video.getAttribute("src"), projectKey);
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.autoplay = true;
    video.preload = "auto";
    video.removeAttribute("controls");
  });

  fragment.querySelectorAll(".image-gallery").forEach((gallery) => {
    const config = (() => {
      try { return JSON.parse(decodeURIComponent(gallery.dataset.gallery)); }
      catch { return { path: "justify", data: {} }; }
    })();
    if (projectKey === "spoon") {
      const spoonVideoCuts = [
        "Sp00n_refactoring.mp4",
        "Sp00n_refactoring_2.mp4",
        "Sp00n_refactoring_3.mp4",
        "Sp00n_refactoring_4.mp4",
        "Sp00n_refactoring_5.mp4",
      ];
      gallery.replaceChildren(...spoonVideoCuts.map((filename) => {
        const video = doc.createElement("video");
        video.src = pathFor(`Sp00n/Spoon Assets Video Cuts/${filename}`);
        video.muted = true;
        video.loop = true;
        video.autoplay = true;
        video.playsInline = true;
        video.preload = "auto";
        return video;
      }));
    }
    // Cargo sometimes wraps linked videos in an anchor. Treat that anchor as
    // one gallery item so its link and video keep the same frame and grid slot.
    const media = [...gallery.children].filter((item) =>
      item.matches("img, video") ||
      (item.matches("a") && item.querySelector(":scope > img, :scope > video")),
    );
    if (projectKey === "lutnita" && media.length > 2) {
      media.splice(-3).forEach((item) => item.remove());
    }
    const fixedGridGallery = projectKey === "spoon" || projectKey === "lutnita";
    const slides = media.length > 1 && config.path === "slideshow" && !fixedGridGallery;
    gallery.className = slides ? "image-gallery slideshow" : "image-gallery media-grid";
    if (projectKey === "lucid" && !slides) gallery.classList.add("lucid-gallery");
    if (projectKey === "ahead" && !slides) gallery.classList.add("ahead-gallery");
    if (projectKey === "farAway" && !slides) gallery.classList.add("faraway-gallery");
    if (projectKey === "spoon" && !slides) gallery.classList.add("spoon-gallery");
    if (projectKey === "lutnita" && !slides) gallery.classList.add("lutnita-gallery");
    gallery.setAttribute("aria-label", slides ? "Project image gallery" : "Project images");
    gallery.removeAttribute("data-gallery");
    if (slides) {
      const interval = Number(config.data?.autoplaySpeed || 0);
      gallery.dataset.interval = String(interval > 0 && interval < 100 ? interval * 1000 : 0);
      const stage = doc.createElement("div");
      stage.className = "slideshow-stage";
      stage.tabIndex = 0;
      stage.setAttribute("aria-roledescription", "carousel");
      const track = doc.createElement("div");
      track.className = "gallery-track";
      media.forEach((item, index) => {
        const slide = doc.createElement("div");
        slide.className = "gallery-slide";
        slide.setAttribute("aria-hidden", index === 0 ? "false" : "true");
        slide.inert = index !== 0;
        const video = item.matches("video") ? item : item.querySelector(":scope > video");
        if (video) video.autoplay = false;
        if (item.matches("a")) {
          item.classList.add("media-frame");
          slide.append(item);
        } else {
          const frame = doc.createElement("div");
          frame.className = "media-frame";
          frame.append(item);
          slide.append(frame);
        }
        track.append(slide);
      });
      stage.append(track);
      const controls = doc.createElement("div");
      controls.className = "gallery-controls";
      controls.innerHTML = '<button type="button" data-direction="prev" aria-label="Previous image"><span aria-hidden="true">←</span></button><button type="button" data-direction="next" aria-label="Next image"><span aria-hidden="true">→</span></button>';
      gallery.append(stage, controls);
    } else {
      media.forEach((item) => {
        if (item.matches("a")) {
          item.classList.add("media-frame");
          gallery.append(item);
        } else {
          const frame = doc.createElement("div");
          frame.className = "media-frame";
          frame.append(item);
          gallery.append(frame);
        }
      });
    }
  });
  if (projectKey) {
    fragment.querySelectorAll("img[src], video[src]").forEach((item) => {
      if (item.closest(".media-frame")) return;
      const frame = doc.createElement("div");
      frame.className = "media-frame";
      item.replaceWith(frame);
      frame.append(item);
    });
  }
  if (projectKey) {
    const row = fragment.querySelector(".source-grid-row");
    const columns = row ? [...row.querySelectorAll(":scope > .source-grid-col")] : [];
    if (row && columns.length === 3 && !row.querySelector(".image-gallery")) {
      row.classList.add("project-meta");
      columns.forEach((column, index) => column.classList.add(`project-meta-${index + 1}`));
    }
  }
  if (homepage) {
    fragment.querySelectorAll(".source-grid-row").forEach((row) => {
      const columns = [...row.querySelectorAll(":scope > .source-grid-col")];
      if (columns.length !== 3 || row.querySelector(".image-gallery")) return;
      row.classList.add("project-meta");
      columns.forEach((column, index) => column.classList.add(`project-meta-${index + 1}`));
    });
    fragment.querySelectorAll(".source-grid-row:has(.image-gallery)").forEach((row) => {
      const gallery = row.querySelector(".image-gallery");
      const mediaColumn = gallery?.closest(".source-grid-col");
      const descriptionColumn = [...row.querySelectorAll(".source-grid-col[grid-col='4']")]
        .find((column) => column !== mediaColumn);
      if (!mediaColumn || !descriptionColumn) return;
      const leadingBreaks = (column) => {
        let count = 0;
        for (const node of column.childNodes) {
          if (node.nodeType === Node.TEXT_NODE && !node.textContent.trim()) continue;
          if (node.nodeType === Node.ELEMENT_NODE && node.tagName === "BR") count++;
          else break;
        }
        return count;
      };
      const lineOffset = leadingBreaks(mediaColumn) - leadingBreaks(descriptionColumn);
      if (lineOffset) descriptionColumn.style.marginTop = `${lineOffset * 1.22}em`;
    });
  }
  return fragment.innerHTML;
}

function projectBlock(project, key, homepage = false) {
  const markup = prepareMarkup(project.content, key, project.images, homepage);
  return `<article class="project-content${homepage ? " homepage-project" : ""}" id="${key}">${markup}</article>`;
}

function footer() {
  return `<footer class="site-footer"><a class="back-to-top" href="#top">Back to top</a><a class="contact-link" href="mailto:nicolae.morozov@gmail.com?subject=Collaboration%20Opportunity">Get in touch</a></footer>`;
}

function homePage() {
  const blocks = projects.map(({ route, key }) => projectBlock(projectFor(route), key, true)).join("");
  return `${header(true)}${identity(true)}<main class="work-list">${blocks}</main>${footer()}`;
}

function indexPage() {
  const cards = projects.map(({ route, key, label, thumb }) => `<a class="index-card" href="${sitePath(route)}"><img src="${pathFor(thumb)}" alt="${label} project preview"><span>${label}</span></a>`).join("");
  return `${header()}${identity()}<main class="project-index"><h2>Current projects.</h2><div class="index-grid">${cards}</div></main>${footer()}`;
}

function aboutPage() {
  return `${header()}${identity()}<main class="about-page">${prepareMarkup(source.about.content, null, source.about.images)}</main>${footer()}`;
}

function projectPage(key) {
  const route = routes[key];
  const project = projectFor(route);
  if (!project) return homePage();
  return `${header()}${identity()}<main class="case-page">${projectBlock(project, key)}</main>${footer()}`;
}

function initGalleries(root) {
  root.querySelectorAll(".slideshow").forEach((gallery) => {
    const slides = [...gallery.querySelectorAll(".gallery-slide")];
    const stage = gallery.querySelector(".slideshow-stage");
    const track = gallery.querySelector(".gallery-track");
    if (slides.length < 2) return;
    let current = 0;
    const show = (index) => {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        slide.inert = i !== current;
        slide.setAttribute("aria-hidden", i === current ? "false" : "true");
        const video = slide.querySelector("video");
        if (!video) return;
        if (i === current && !document.hidden) video.play().catch(() => {});
        else video.pause();
      });
      track.style.transform = `translateX(-${current * 100}%)`;
    };
    show(0);
    gallery.querySelectorAll("[data-direction]").forEach((button) => button.addEventListener("click", () => show(current + (button.dataset.direction === "next" ? 1 : -1))));
    stage.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") { event.preventDefault(); show(current + 1); }
      if (event.key === "ArrowLeft") { event.preventDefault(); show(current - 1); }
    });
    let startX = null;
    stage.addEventListener("touchstart", (event) => { startX = event.changedTouches[0].clientX; }, { passive: true });
    stage.addEventListener("touchend", (event) => {
      if (startX === null) return;
      const delta = event.changedTouches[0].clientX - startX;
      if (Math.abs(delta) > 35) show(current + (delta < 0 ? 1 : -1));
      startX = null;
    }, { passive: true });
    const interval = Number(gallery.dataset.interval);
    if (interval && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      let timer;
      const start = () => { if (!timer) timer = window.setInterval(() => show(current + 1), interval); };
      const stop = () => { window.clearInterval(timer); timer = null; };
      start();
      gallery.addEventListener("mouseenter", stop);
      gallery.addEventListener("mouseleave", start);
      gallery.addEventListener("focusin", stop);
      gallery.addEventListener("focusout", (event) => { if (!gallery.contains(event.relatedTarget)) start(); });
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          stop();
          gallery.querySelectorAll("video").forEach((video) => video.pause());
        } else {
          gallery.querySelector(".gallery-slide:not([hidden]) video")?.play().catch(() => {});
          start();
        }
      });
    }
  });
}

function initInlineVideos(root) {
  const videos = [...root.querySelectorAll(".project-content video")].filter((video) => !video.closest(".slideshow"));
  videos.forEach((video) => {
    video.autoplay = true;
    video.preload = "auto";
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.play().catch(() => {});
  });
}

function initImageZoom(root) {
  const projectMedia = [...root.querySelectorAll(".project-content img, .project-content video")];
  if (!projectMedia.length) return;

  const overlay = document.createElement("div");
  overlay.className = "image-zoom-overlay";
  overlay.hidden = true;
  overlay.tabIndex = -1;
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", "Enlarged project image");
  const enlargedImage = document.createElement("img");
  const enlargedVideo = document.createElement("video");
  enlargedVideo.autoplay = true;
  enlargedVideo.preload = "auto";
  enlargedVideo.muted = true;
  enlargedVideo.loop = true;
  enlargedVideo.playsInline = true;
  overlay.append(enlargedImage, enlargedVideo);
  document.body.append(overlay);

  let activeMedia = [];
  let activeIndex = -1;
  let triggerMedia = null;
  const showMedia = (index) => {
    if (!activeMedia.length) return;
    activeIndex = (index + activeMedia.length) % activeMedia.length;
    const media = activeMedia[activeIndex];
    enlargedVideo.pause();
    enlargedVideo.removeAttribute("src");
    enlargedVideo.load();
    if (media instanceof HTMLVideoElement) {
      enlargedImage.hidden = true;
      enlargedVideo.hidden = false;
      enlargedVideo.src = media.currentSrc || media.src;
      enlargedVideo.load();
      enlargedVideo.play().catch(() => {});
    } else {
      enlargedVideo.hidden = true;
      enlargedImage.hidden = false;
      enlargedImage.src = media.currentSrc || media.src;
      enlargedImage.alt = media.alt || "Enlarged project image";
    }
    overlay.setAttribute("aria-label", `Enlarged project media ${activeIndex + 1} of ${activeMedia.length}`);
  };
  const close = () => {
    overlay.hidden = true;
    document.body.classList.remove("image-zoom-open");
    enlargedVideo.pause();
    triggerMedia?.focus();
    triggerMedia = null;
    activeMedia = [];
    activeIndex = -1;
  };

  root.querySelectorAll(".project-content").forEach((project) => {
    project.addEventListener("click", (event) => {
      const media = event.target.closest("img, video");
      if (!media || !project.contains(media)) return;
      event.preventDefault();
      activeMedia = [...project.querySelectorAll("img, video")];
      activeIndex = activeMedia.indexOf(media);
      triggerMedia = media;
      triggerMedia.tabIndex = 0;
      showMedia(activeIndex);
      overlay.hidden = false;
      document.body.classList.add("image-zoom-open");
      overlay.focus();
    });
  });

  overlay.addEventListener("click", close);
  document.addEventListener("keydown", (event) => {
    if (overlay.hidden) return;
    if (event.key === "Escape") close();
    else if (event.key === "ArrowLeft") {
      event.preventDefault();
      showMedia(activeIndex - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      showMedia(activeIndex + 1);
    }
  });
}

const app = document.querySelector("#app");
const currentPath = decodeURI(window.location.pathname);
const currentRoute = (currentPath.startsWith(siteBase) ? currentPath.slice(siteBase.length) : currentPath.replace(/^\//, "")).replace(/\/$/, "");
const [pageKey] = Object.entries(routes).find(([, path]) => path === currentRoute) ?? ["home"];
if (app) {
  app.innerHTML = pageKey === "home" ? homePage()
    : pageKey === "index" ? indexPage()
    : pageKey === "about" ? aboutPage()
      : projectPage(pageKey);
  initInlineVideos(app);
  initGalleries(app);
  initImageZoom(app);
  initLocalClock(app);
}
}

startSite().catch((error) => {
  console.error("The portfolio could not be initialized.", error);
  const app = document.querySelector("#app");
  if (app) {
    app.innerHTML = `<main class="load-error"><h1>Portfolio temporarily unavailable</h1><p>Please refresh the page or contact me at <a href="mailto:nicolae.morozov@gmail.com">nicolae.morozov@gmail.com</a>.</p></main>`;
  }
});
