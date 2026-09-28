# nicolaemorozov.com — Phase 01 audit

**Reference site:** [nicolaemorozov.com](https://nicolaemorozov.com/)  
**Audit date:** 2026-09-25  
**Scope:** Phase 01 discovery plus Phase 02 reconstruction notes, route verification, content/asset mapping, and implementation status.

## Phase 02 update — verified live source and implementation

The routes and current page content were verified from the live Cargo pages and embedded `ScaffoldingData` on 2026-09-25. The canonical paths are `/`, `/Index`, `/About-Me`, `/Lucid-Coffee-Roasters-copy`, `/ahead-studio`, `/Far-away-from-Home-Photobook`, `/Spoon-Studio`, and `/Lutni-a`. The two screenshot-derived project routes are confirmed live. The supplied screenshots also show that the oversized Nicolae Morozov identity area is shared across the homepage, Index, About, and project pages.

The Cargo site source requests **Diatype** with weights 200–700, **Monument Grotesk Mono Variable**, and **Neue Haas Grotesk** for the original design. The site reconstruction uses the user-selected **Inter** from Google Fonts; this is a deliberate practical substitute, not a claim that Cargo uses Inter. Inter’s SIL Open Font License is documented above. It loads from Google Fonts, with Arial/Helvetica system fallbacks.

The live stylesheet exposes these source typography values: body copy 1.3rem / weight 500 / line-height 1.2; h1 7.2rem / weight 400 / line-height 0.9 / letter-spacing −0.10rem; h2 2rem / weight 500 / line-height 1.2 / letter-spacing 0.01em; small labels 1.2rem / weight 400 / line-height 1.2 in Monument Grotesk Mono Variable. Cargo does not normalize the base rem size in the fetched stylesheet, so screenshot dimensions remain the reliable pixel comparison. The reconstruction uses Inter 400 for the large name at 72 px desktop and approximately 25 px mobile, with body copy around 12–14 px and compact line-height.

### Verified route inventory

| Canonical route | Live page title | Screenshot/index label |
| --- | --- | --- |
| `/` | Nicolae Morozov | Home with five full project sections |
| `/Index` | Index | Current projects; 3 columns desktop / 2 mobile |
| `/About-Me` | About Me | Portrait/contact, biography/work, education |
| `/Lucid-Coffee-Roasters-copy` | Lucid Coffee Roasters copy | Lucid Coffee Roastery on the case-study heading |
| `/ahead-studio` | ahead studio | Ahead Studio on the case-study heading |
| `/Far-away-from-Home-Photobook` | Far away from Home - Photobook | Same wording on the case study |
| `/Spoon-Studio` | Spoon Studio | Spoon Studio |
| `/Lutni-a` | Lutnița | Contemporary Art Gallery - Lutnița on the case-study heading |

### Source media mapped to the supplied files

The ordered content and media references from the live Cargo page data are preserved in `scripts/source-content.json`; `scripts/site.js` maps image IDs to the existing asset folder, keeps the source media order, localizes videos by filename, and renders the source content in semantic page shells. Original supplied files remain in place. The map below identifies the media sets used by current live pages (including files stored in an archive-named folder when the current source page actively references them):

| Page | Current source media mapped locally |
| --- | --- |
| Lucid | `Logo_reveal.mp4` → `Scan-1.png` → `Wide_-Post_Gif_.gif` → `asset_23.png` → `Colours_reveal.mp4` → `asset_32.png` → `asset_36.png` → `asset_25.png` → `AE_Blueprint_5.gif` → `Wide_Extended_Scan-69.mp4` → `AE_IG_REELS_mockup.png` → `Comp-1_1.gif` → `Reels_Combined.mp4` |
| Ahead | `Ahead_logo_reveal.mp4` → `Ahead_Screen_Mockups_LOOP.mp4` → `Ahead_Showreel_cut.mp4` → `original_cfb1997802589e52ca577eccdea19d3d.png` → `grey_ahead_SM_grid.gif` → `original_f313e890ff0f2826c46292ea76df6002.png` → `Ahead_Social_media_guide.png` → `Ahead_Social_media_guide_3.png` → `Ahead_Social_media_guide_2.png`; archive-folder stills are used where the live page references them |
| Far Away | `1.png`–`6.png`, `VHS.mp4`, `interview_workflow.mp4`; index thumbnail uses `Dark_Thumbnail.jpg` |
| Spoon | `Combi_Mega_Light.mp4` for both slideshow slides; index thumbnail uses `INDEX thumbnails/Spoon_logo_2_1.gif`. The live project’s other image records are available in the source map but are not substituted for its confirmed video gallery. |
| Lutnița | `Logo_Loop_2.gif` → `Lutnita_Carousel_1.mp4` → `Slow_Stop_motion_Presentation_of_Colors.gif` → `Type_screen_2_2_1.jpg` → `Type_screen_2_2.jpg` → `Type_screen_1_1.jpg` → `RG012331.jpg` → `RG012243-2.jpg` → `motion_.gif` → `Colors_3.png` → `Lutnita_AR_posters.mp4` → `3_to_post.png` → `4_to_post.png` → `to_post.png` → `original_72a1b87a0066a7f5fbcf0c7a696518b6.png` → `original_7cc909a9e7001a0f77ef504332843bcf.png` → `mockup_mail_envelope.png` → `original_7b1c6769b4a481f0eb51722fd0531396.gif` → `Lutnita_Black_Carousel.mp4`; index thumbnail uses `lutnita/Logo_Loop_2.gif`. |
| About | `IMG_5322.jpg` portrait |
| Shared | `logo.svg` header mark; `NM_potofolio_favicon.svg` browser icon |

Every still/GIF/MP4 actually referenced by the visible live page content has a matching supplied local file. The supplied page libraries also include inactive records that are not referenced in the current page composition; some have no local match, including `Lucid/AE_Blueprint_4.gif`, `lutnita/original_ec3f675c42a39b52cfe2b27a51f8ce7a.png`, and About's `vertical.svg`. These are not rendered. Files in archive-named folders are used only when a current page's content references them.

### Gallery behavior verified and implemented

- **Spoon:** Cargo source marks this as a slideshow with the same `Combi_Mega_Light.mp4` video in both slide records, muted autoplay and loop, automatic advance every 10 seconds, slide transition duration 0.5 seconds, and arrows enabled. The reconstruction includes previous/next controls, keyboard arrows, touch swipes, pause while hovered/focused, and disables automatic advance for reduced-motion preferences or a hidden document.
- **Lutnița:** Cargo source marks its slideshow autoplay at 2.5 seconds with a 0.5-second slide transition and arrows enabled. Its active ordered gallery media is preserved from live markup (16 images/GIFs and three supplied MP4s). The reconstruction includes manual arrows, keyboard and touch interaction, wraparound, and the source automatic interval; automatic advance is disabled for reduced-motion preferences.
- Other still/GIF/MP4 behavior follows the source media tags: MP4 files with `autoplay` and `loop` play muted inline and loop; GIFs remain animated image files. No additional decorative animation is added.

### Implemented foundation and responsive rules

- Plain static HTML route folders, CSS, one vanilla ES module, and a JSON source-content map; no framework, bundler, or package dependency.
- Reusable shared navigation/identity/footer, source-content renderer, project index, project-page content shell, and gallery controller.
- Desktop screenshots are matched against 1436 px references; mobile layouts against 375 px references. CSS switches to the mobile composition at 700 px: shared name treatment becomes one line, source columns stack, and the project index changes from three to two columns.
- The static routes resolve directly from their existing route folders, supporting GitHub Pages with the intended custom domain at the domain root. This reconstruction does not perform Phase 03 deployment or final QA.

**Current known limitations:** Inter differs from the original Cargo fonts, and one external Google Fonts request is used. Missing asset records are inactive and do not leave gaps in the current visible content. Exact Cargo easing is approximated with CSS `ease` over the source's 0.5-second duration; the source does not expose the rendered easing in the saved markup.

## Phase 02 implementation update — asset map and owner-directed layout revisions

Created `ASSET-MAP.md` after comparing active media IDs/order from the live Cargo page data with the supplied project folders and full-page desktop/mobile captures. The map documents 51 ordered project media placements, index thumbnails, portrait, logo, and favicon; it identifies source dimensions, native animation/video behavior, the two duplicate Spoon slides, confidence, archive-folder cases, and crop notes. Where active Cargo references an archive-named file, that exact file is used. For Far Away's index thumb, the original 1280×854 project-folder JPEG is preferred to a 500×334 duplicate in the index folder.

The owner requested consistent 16:9 presentation and clarified that media should scale without cropping. Later directions set Far Away and Ahead project galleries to fill and crop within 16:9 frames (`object-fit: cover`); other project gallery media remains `contain`. Source images/GIFs/videos remain untouched. Index thumbnails retain their existing treatment. The About portrait, logo and favicon retain their natural proportions. Grid gutters are 16 px desktop / 8 px mobile, and homepage case sections use fixed 48 px desktop / 32 px mobile separation. Header copy, About/Index copy and navigation receive the requested approximate 5% size increase. Desktop About Me and Index links align to the Nicolae/Morozov columns. Instagram links target `@nicolae_dymok`; the SVG mark is 24 px on both desktop and mobile. Spoon/Lutnița arrow pairs sit at the left/right edges of each gallery.

The latest supplied screenshots are reflected in `ASSET-MAP.md` and CSS: Lucid rows contain 2, 3, 4, and 3 items, followed by a full-width final video; Ahead rows contain 2, 3, and 4 items; Far Away rows contain 2, 3, and 3. Each project keeps its source order. Gallery media uses 16:9 frames; Ahead and Far Away fill and crop their frames while other project galleries scale media without cropping. Muted inline looping project videos request autoplay and preload immediately after page render; active slideshow video starts when its gallery initializes. Browser download/decode time still determines when the first frame can display. Gallery arrows sit at the left/right edges with 32 px transparent padding around each icon, retaining the hover reveal/highlight.

Linked video items in Far Away's Cargo gallery (Instagram `VHS.mp4`, then YouTube `interview_workflow.mp4`) are treated as regular gallery frames, preserving their external destinations and placing them after the six stills. Both Ahead and Far Away use uniform CSS grid gutters of 16 px on desktop and 8 px on mobile. Ahead and Far Away images and videos use `object-fit: cover` to fill each 16:9 frame; cropping is centered and media sources remain unchanged.

On the homepage, each project's client/year/role description column is vertically offset as a whole to align its first line with the top of its first image row. Original line breaks and text inside each description remain unchanged; project detail pages retain their existing source spacing.

Asset refresh check (2026-09-25): the supplied Lucid `AE_IG_REELS_mockup.png` and Ahead `original_f313e890ff0f2826c46292ea76df6002.png` files were modified in place and are now 1920×1080 and 1700×956 respectively (both native 16:9). The existing page mapping points to those same paths, so the updated files are served without changing markup. The local preview server was restarted on port 8765 and browser request logs confirm that the page and local assets are being served.


## 1. Overview and evidence

The reference is a Cargo-hosted portfolio for Nicolae Morozov, described as “art directing & visual communication.” The site has a portfolio homepage containing full case-study sections, a separate project index, an About Me page, and five project detail pages. The recurring visual character is a white canvas, dark typography, generous negative space, a large name display, restrained navigation, and extensive project imagery/motion.

Evidence reviewed:

- Live homepage text and links: [nicolaemorozov.com](https://nicolaemorozov.com/).
- Live text views of [About Me](https://nicolaemorozov.com/About-Me), [Ahead Studio](https://nicolaemorozov.com/ahead-studio), [Spoon Studio](https://nicolaemorozov.com/Spoon-Studio), and [Lutnița](https://nicolaemorozov.com/Lutni-a).
- Supplied full-page screenshots in `asset folder from nicolaemorozov.com/Screen Shots/desktop/` and `.../mobile/`.
- 106 supplied assets (excluding `.DS_Store`), listed by directory below.
- A later-added `ABCAreal/` font package containing ABC Areal font families and a Dinamo licensing terms PDF.
- User-selected Inter from [Google Fonts](https://fonts.google.com/specimen/Inter), after the Areal package raised public-hosting license concerns.
- User confirmation that Spoon’s case study has a looping-video gallery with an automatic 10-second slider, and Lutnița has an image gallery that visitors can switch through.

Live source and page data were also inspected directly for the homepage, Index, About, and all five projects. Screenshot files are used as the visual checkpoints; direct browser comparison at arbitrary viewport sizes remains a future visual QA item.

## 2. Page and route inventory

| Page | Observed / inferred route | Purpose and structure | Media and interaction |
| --- | --- | --- | --- |
| Portfolio home | `/` | Large identity header followed by five full case studies in order: Lucid, Ahead, Far Away, Spoon, Lutnița. Each project has title, discipline/year, media, client/year/role, narrative, and sometimes external link. Contact and project-list links finish the page. | Long scrolling page; multiple images and motion assets. Exact media ordering and any sticky/scroll effects need verification. |
| Project Index | `/Index` | “Current projects” heading and five project cards; card title below image. | Desktop screenshot: 3 columns. Mobile screenshot: 2 columns. Card links open project pages. |
| About Me | `/About-Me` | Portrait/contact column, professional title and summary, work history, education. | Email, Instagram and education-site links. |
| Lucid Coffee Roastery | `/Lucid-Coffee-Roasters-copy` | Identity/packaging/motion case study. | Supplied PNG/GIF/MP4 media; screenshot shows a long gallery-led case. |
| Ahead Studio | `/ahead-studio` | Brand identity, art direction and social media case study. | Supplied stills, GIF, and MP4 media. LinkedIn company profile. |
| Far Away from Home — Photobook | `/Far-away-from-Home-Photobook` | Editorial and photobook case study. | Six numbered PNGs, thumbnail images, two videos; external YouTube link appears on home page. |
| Spoon Studio | `/Spoon-Studio` | Identity, art direction, editorial and motion case study. | **User-confirmed:** gallery-style presentation; looping video plus automated slider advancing every 10 seconds. Exact slide order, controls, and whether timing pauses on interaction need verification. |
| Contemporary Art Gallery — Lutnița | `/Lutni-a` | Brand identity, art direction, motion and print case study. | **User-confirmed:** gallery-style images can be switched manually. Determine image order and control/touch/keyboard behavior from source. |

All listed route spelling/capitalization has been checked against live source. The homepage and Index are separate pages: the homepage contains detailed cases; Index is a five-card summary.

## 3. Component inventory

Reusable structure implemented for Phase 02:

- Site header / navigation: NM logo mark, About Me, Index, Instagram.
- Identity introduction: descriptor, inquiry email and oversized “Nicolae Morozov” display.
- Project index: responsive card grid, linked thumbnail, project label.
- Case-study header: title, discipline(s), year.
- Project metadata: client, year, role.
- Narrative blocks and external project links.
- Media frame: responsive still image, animated GIF, or video.
- Gallery/slider: shared interaction shell only if visuals and controls are genuinely shared; Spoon and Lutnița interaction behavior differs.
- About modules: portrait/contact, bio, work-history entries, education entries.
- Footer: inquiries/contact and project-list navigation.

Navigation/components are sparse and typographic. The source gallery settings enable arrows on both confirmed slideshows; controls are included with keyboard and touch support.

## 4. Asset inventory

The supplied directory is `asset folder from nicolaemorozov.com/`. It contains **106 non-`.DS_Store` files**: 57 PNG, 15 JPG, 19 GIF, 13 MP4, and 2 SVG. No files were moved or renamed. `arch` / `archival` folders may contain superseded exports; presence does not confirm that a file is used on the live site.

### Root

- `logo.svg`, `NM_potofolio_favicon.svg` — logo/favicon candidates. Confirm which file and mark are used in the site header/browser tab.
- `IMG_5322.jpg` — likely portrait source; compare with About screenshots before use.

### Project and index media

| Directory | Supplied files |
| --- | --- |
| `INDEX thumbnails/` | `Dark_Thumbnail.jpg`; `Logo_Loop_2.gif`; `Spoon_logo_2_1.gif`; `Thumbnail-Ahead-Light.gif`; `Thumbnail-dark.gif` |
| `Lucid/` | `AE_Blueprint_5.gif`; `AE_IG_REELS_mockup.png`; `Colours_reveal.mp4`; `Comp-1_1.gif`; `Logo_reveal.mp4`; `Reels_Combined.mp4`; `Scan-1.png`; `Thumbnail-dark.gif`; `Wide_-Post_Gif_.gif`; `Wide_Extended_Scan-69.mp4`; `asset_23.png`; `asset_25.png`; `asset_32.png`; `asset_36.png` |
| `Lucid/arch/` | `AE_IG_post_mockup.png`; `Asset_11_1 (1).png`; `IG_REELS_mockup.png`; `IG_post_mockup.png`; `asset_18.png`; `black_AE_IG_post_mockup.png`; `wide_RG012672.png` |
| `ahead studio/` | `Ahead_Screen_Mockups_LOOP.mp4`; `Ahead_Showreel_cut.mp4`; `Ahead_Social_media_guide (1).png`; `Ahead_Social_media_guide_2 (1).png`; `Ahead_Social_media_guide_3.png`; `Ahead_logo_reveal.mp4`; `grey_ahead_SM_grid.gif`; `original_cfb1997802589e52ca577eccdea19d3d.png`; `original_f313e890ff0f2826c46292ea76df6002.png` |
| `ahead studio/archivaL/` | `Ahead_Gradient_guide_logo.png`; `Ahead_Social_media_guide.png`; `Ahead_Social_media_guide_2.png`; `Thumbnail-Ahead-Light.gif`; `Wallpaper-Assets.png`; `Wallpaper-Assets_9.png`; `ahead_SM_grid.gif` |
| `Far Away from Home/` | `1.png`–`6.png`; `Dark_Thumbnail.jpg`; `Thumbnail.jpg`; `VHS.mp4`; `interview_workflow.mp4` |
| `Sp00n/` | `Combi_Mega_Light.mp4` |
| `Sp00n/ARCHIVAL/` | `Comp-1_2.gif`; `Spoon_logo_2_1.gif`; `illustrations_Cover_FB.png`; `white_Cover_FB.png` |
| `lutnita/` | `3_to_post.png`; `4_to_post.png`; `Colors_3.png`; `Logo_Loop_2.gif`; `Lutnita_AR_posters.mp4`; `Lutnita_Black_Carousel.mp4`; `Lutnita_Carousel_1.mp4`; `RG012243-2.jpg`; `RG012331.jpg`; `Slow_Stop_motion_Presentation_of_Colors.gif`; `Type_screen_2_2.jpg`; `Type_screen_2_2_1.jpg`; `mockup_mail_envelope.png`; `motion_.gif`; `original_72a1b87a0066a7f5fbcf0c7a696518b6.png`; `original_7b1c6769b4a481f0eb51722fd0531396.gif`; `original_7cc909a9e7001a0f77ef504332843bcf.png`; `to_post.png` |
| `lutnita/archival/` | `2_Newsletter_template_sub_header.jpg`; `Background-Image-Hero-Row.png`; `Colors_2_2.gif`; `Colors_2_2.png`; `Leflet_Side_B_16.10.jpg`; `Newsletter_template_sub_header.jpg`; `RG012266.jpg`; `Type_screen_1_1.jpg`; `Type_screen_5 (1).jpg`; `Type_screen_5.jpg`; `helvetica-neu-italic-times.gif`; `original_8a6486c2ae02893a6efbf07d21a56d47.png` |

### Reference screenshots

All desktop captures are 1436 px wide. All mobile captures are 375 px wide. Heights are full-page capture heights, not viewport heights.

| Folder | Screenshot files (pixel dimensions) |
| --- | --- |
| `Screen Shots/desktop/` | `home.png` 1436×4703; `index.png` 1436×1182; `aboutme.png` 1436×1642; `lucid.png` 1436×1823; `ahead.png` 1436×1106; `farawayfromhome.png` 1436×1243; `spoon.png` 1436×1044; `lutnita.png` 1436×1113 |
| `Screen Shots/mobile/` | `screencapture-nicolaemorozov-2026-09-25-12_16_35.png` 375×7520 (home); `screencapture-nicolaemorozov-Index-2026-09-25-12_19_16.png` 375×854; `screencapture-nicolaemorozov-About-Me-2026-09-25-12_18_27.png` 375×2831; `screencapture-nicolaemorozov-Lucid-Coffee-Roasters-copy-2026-09-25-12_17_02.png` 375×2326; `screencapture-nicolaemorozov-ahead-studio-2026-09-25-12_17_14.png` 375×1806; `screencapture-nicolaemorozov-Far-away-from-Home-Photobook-2026-09-25-12_17_24.png` 375×1930; `screencapture-nicolaemorozov-Spoon-Studio-2026-09-25-12_17_33.png` 375×1169; `screencapture-nicolaemorozov-Lutni-a-2026-09-25-12_17_43.png` 375×1402. |

### Fonts and icons

The supplied site asset folder contains no WOFF/WOFF2, TTF/OTF files. The live Cargo source names its hosted fonts as Diatype, Monument Grotesk Mono Variable, and Neue Haas Grotesk. The reconstruction uses user-selected Inter and a system monospace stack. `logo.svg` supplies the NM header mark and `NM_potofolio_favicon.svg` supplies the favicon; the desktop Instagram mark is rendered as a simple glyph because the source icon font asset was not supplied. The separate `ABCAreal/` package remains excluded from the public site.

## 5. Preliminary visual system

The CSS architecture exposes reconstruction tokens in `styles/site.css`; screenshot-based measurements below remain estimates. The Cargo stylesheet and embedded font declarations were inspected. Inter remains the selected practical webfont; it is not the original Cargo typeface.

### Typography

| Use | Screenshot estimate / observation | Confidence |
| --- | --- | --- |
| Main name display | Inter is the chosen substitute; reconstruction CSS uses 72 px desktop and about 25 px mobile. The name occupies two separated desktop columns and one line on mobile. | Inter differs from live Diatype; metrics tuned from supplied screenshots. |
| Project/page headings | Inter, initially regular; small (roughly 14–16 px) and aligned with content columns. | Approximate size; confirm by screenshot comparison. |
| Body and navigation | Inter, primarily regular; roughly 14 px desktop and 16 px on 375 px mobile captures. | Approximate; browser scaling and screenshot rendering affect measurements. |
| Secondary labels | System monospace stack for visibly monospaced labels, pending visual comparison. Roughly 13–14 px. | Family and weight need comparison; Inter does not provide the mono cut. |
| Weights | Mostly regular; bold used for select role/organization labels. No reliable numeric weights available. | Low confidence. |
| Line height | Compact body copy appears around 1.2–1.35; display is close to 1.0. | Estimate only. |
| Letter spacing | Neutral/tight sans-serif body; visibly tracked mono labels and selected project graphics. | Exact values unknown. |

### Chosen webfont and license

Inter is now the selected family for the site’s sans-serif styles. The foundation links to Google Fonts’ CSS API for Inter’s variable weight range. Google Fonts metadata identifies Inter’s license as OFL and its variable axes as weight 100–900 and optical size 14–32. The [Inter project documentation](https://github.com/rsms/inter) identifies the SIL Open Font License 1.1 and describes Inter as free to use, including commercially. The full [OFL text](https://raw.githubusercontent.com/google/fonts/main/ofl/inter/OFL.txt) permits use, embedding, and redistribution subject to the license conditions, including keeping the copyright and license notice with redistributed font software.

The website currently loads Inter from Google Fonts rather than copying font binaries into the repository. This means visitors’ browsers can fetch the font even if it is not installed on their devices; a CSS/system fallback remains available if the font service cannot be reached. This is an external font-service request and can be replaced with self-hosted WOFF2 files plus the OFL notice if the project later prefers to avoid that dependency.

The locally supplied `ABCAreal/` folder contains 45 files: 22 WOFF2 files, 22 TTF files, and `Dinamo Licensing Terms.pdf`. Its WOFF2 families include ABC Areal, ABC Areal Mono, and ABC Areal Semi Mono, with static and variable builds. The supplied Dinamo terms allow WOFF2 web use on one domain but also restrict public-server and public-repository placement; no invoice/license record is present. These binaries are not used by the site and are excluded from Git via `.gitignore` pending written license clarification.

### Colours

- Main canvas reads as white (`#fff` in the supplied screenshots); confirm whether Cargo uses pure white or a near-white.
- Main canvas is `#fff`; live body text is black and predefined typography uses `rgba(0, 0, 0, 0.85)`.
- Secondary labels use `rgba(0, 0, 0, 0.4)`; gallery captions use `rgba(0, 0, 0, 0.85)`.
- Live body-copy link hover uses `#0066ff`; project media provides the other colors.
- No visible card borders or shadows in the supplied Index screenshot; confirm hover/focus behavior.

### Spacing, grid, margins and proportions

- Desktop page inset appears roughly 24 px (about 1.7% of 1436 px capture width); mobile inset roughly 12 px (about 3.2% of 375 px).
- Desktop Index: three equal columns with gutters around 10–12 px; cards use broad rectangular image frames and labels directly below.
- Mobile Index: two columns with around 6–8 px gutters; project titles may wrap under their thumbnail.
- Home case-study rows use a spacious three-column logic: title/type/year, media area, and project metadata/narrative. The exact column tracks vary across cases and must be measured individually.
- About page uses a portrait/contact rail, a central biography/work column, and an education column at desktop width; mobile becomes a long narrow vertical flow.
- Cargo assets include different proportions. The current owner-directed reconstruction scales project media into 16:9 frames with `object-fit: contain`, preserving complete images rather than cropping them.
- Vertical whitespace around the large name and between projects is substantial. Tighten the layout only where the screenshot indicates it.
- Establish small/medium/large spacing tokens, but defer exact values until source/browser measurement.

### Responsive observations and breakpoints

- Desktop reference width is 1436 px; mobile reference width is 375 px. No tablet screenshot or exact Cargo breakpoint was supplied.
- Index visibly changes from three columns to two between those reference widths.
- Name changes from two-column placement at desktop to a single line on mobile.
- About moves from a multi-column composition to a stacked narrow layout; all copy remains in the flow.
- Project media scales to the mobile content width; project case content is long and scroll-based.
- The reconstruction uses a 700 px breakpoint selected from the supplied desktop/mobile compositions; tablet widths still need visual review.
- Live content shows no persistent sticky header in the captured pages. Autoplay intervals and gallery slide settings are read from live source data as recorded above.

## 6. Navigation and external links

- Top navigation shown in references: logo/home mark, About Me, Index, Instagram.
- Home/identity area includes the descriptor and inquiry email, then large “Nicolae Morozov” name.
- Internal links include project cards, project-list navigation, contact/inquiry links, and project/home navigation on detail pages.
- External destinations visible in text inspection include Instagram for the portfolio and projects, LinkedIn for Ahead Studio, YouTube for Far Away from Home, email, and education institution websites on About Me.
- Link hover/focus/active states have not been verified. Preserve keyboard focus visibility and use semantic anchors during implementation.
- The browser title returned for the home page is “Nicolae Morozov”; per-page title and meta descriptions need inspection. Favicon candidates are `logo.svg` and `NM_potofolio_favicon.svg`.

## 7. Interaction and animation inventory

| Element | Observed/confirmed behavior | Remaining check |
| --- | --- | --- |
| Index cards | Link to corresponding project case pages. | Hover treatment, focus, and exact card image/text destinations. |
| Spoon Studio gallery | Source confirms the same muted looping MP4 is used in both slides, with auto advance at 10 seconds, slide transition duration 0.5 seconds and arrows enabled. | Easing is not exposed in source; visual approval remains useful. |
| Lutnița gallery | Source confirms an ordered slideshow of current images and three MP4s, auto advance at 2.5 seconds, 0.5-second slide transition and arrows enabled. | Easing is not exposed in source; visual approval remains useful. |
| Other project media | Live HTML source provides ordered stills/videos and autoplay/loop attributes; supplied GIFs remain animated. | All currently rendered source assets map locally. |
| Navigation/contact/social links | Standard navigation and external links are visible in reference content. | Hover, focus, current-page treatment, and opening behavior. |
| Scroll/page transitions | Long, vertically scrolling pages are evidenced by full-page screenshots. | Any sticky elements, scroll-triggered animation, custom transitions, or cursor behavior. |

No decorative motion is added. Automatic gallery motion pauses on hover/focus, respects reduced-motion preferences, and is limited to muted inline videos and the source-configured slideshow intervals.

## 8. Technical architecture and initial foundation

**Selected and implemented:** plain static HTML/CSS, one vanilla JavaScript ES module, and a JSON source-content file. This is sufficient for a portfolio with no database, accounts, or server behavior, keeps dependencies at zero, and can be hosted as static files on GitHub Pages.

Each canonical route has a static directory and `index.html`; shared code loads from the domain root, matching the intended custom domain. Existing scaffolded route folders remain the static documents.

Current foundation files:

- `index.html` — minimal semantic entry point and favicon/style/module links.
- `Index/index.html`, `About-Me/index.html`, `Lucid-Coffee-Roasters-copy/index.html`, `ahead-studio/index.html`, `Far-away-from-Home-Photobook/index.html`, `Spoon-Studio/index.html`, `Lutni-a/index.html` — static route documents that load the shared reconstructed page by canonical path.
- `styles/site.css` — global Inter/color/layout tokens, source grid compatibility rules, index/About/project layouts, and 700 px responsive rules.
- `scripts/site.js` — shared header, identity, footer, project/index/About renderers, local asset mapper, and accessible slideshow controller.
- `scripts/source-content.json` — content copied from the live page source, ordered media records, and local asset paths.
- `scripts/components/README.md` — component responsibilities and gallery behavior.
- `asset folder from nicolaemorozov.com/` — original supplied assets retained in place; no duplicate asset folder was made.

The existing source folder provides the asset grouping. No extra component framework or package manager has been introduced. All eight routes have been verified live. The route shells now load the shared reconstruction for the selected path.

## 9. Implementation notes for Phase 02

1. Review the implemented pages against the desktop/mobile screenshots, especially gallery proportions and the Inter substitution.
2. Inspect intermediate widths and refine the provisional 700 px breakpoint.
3. Review the desktop Instagram outline mark and carousel arrow appearance against the source on hover/focus.
4. Continue to preserve supplied live copy; review screenshot/live conflicts only if a specific discrepancy is identified.

## 10. Risks, missing information, and unresolved questions

- **Content drift:** case-study headings and Index labels differ in a few places, such as “Lucid Coffee Roasters copy” on Index vs “Lucid Coffee Roastery” in the case study. The renderer preserves these contexts from source data.
- **Routes:** all routes are confirmed from live page source.
- **Typography fidelity:** Inter is the chosen practical replacement and is served via Google Fonts; it cannot match the original hosted Cargo fonts exactly.
- **Unused Areal package:** The proprietary font binaries remain local and ignored because the Dinamo terms supplied with them leave public GitHub Pages distribution uncertain; do not add them to a public repository without license clarification.
- **Image/video mapping:** every image/video in the current page content maps to a supplied local file. Some inactive source-library records have no supplied local file and are not used.
- **Gallery mechanics:** source slideshow options and order are captured. The exact easing behavior is not present in the saved page markup.
- **Visual QA:** pages have not yet been rendered side-by-side in a browser at desktop, mobile, and intermediate widths.
- **Responsive measurements:** screenshots establish 1436 px and 375 px layouts only; exact breakpoints and tablet behavior are unknown.
- **Social destinations and biography:** current live source copy and links are preserved; confirm they remain current during visual review.
- **Git tooling:** the system Git shim reports missing Xcode Command Line Tools. A bundled Git executable is available in the workspace runtime; no Git operations or deployment were needed for this phase.

**Phase 02 status:** page structures, current source copy/media, shared navigation, responsive layouts, and both source-configured galleries are implemented. All active source media has a local mapping. Direct side-by-side visual review remains open. Phase 03 deployment and final optimization have not started.
