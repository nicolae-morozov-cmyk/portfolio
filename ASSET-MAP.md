# Asset map — Phase 02

**Reference checked:** live Cargo content and supplied desktop/mobile page captures (1436 px / 375 px), 2026-09-25. Ordered asset IDs and active media were read from `scripts/source-content.json`, which was extracted from the live pages. The asset paths below point to original supplied files; no media files were renamed or recompressed.

Project images and GIFs remain inline and do not open a modal when clicked. The Spoon and Lutnița slideshow galleries retain their own previous/next controls.

## Display rule applied by request

The source files are preserved at their original dimensions and quality. Project stills, GIFs, and videos generally scale to fit 16:9 frames without cropping (`object-fit: contain`). The Far Away project gallery is an owner-approved exception: its media fills and crops within 16:9 frames (`object-fit: cover`). About portrait and identity/logo graphics retain their proportions.

Confidence means confidence in the source-file match. Live Cargo's media IDs and order match the supplied files; screenshot descriptions are concise positional references because the full-page screenshots do not label individual media.

## Homepage

The homepage embeds the current project media in this order: **Lucid → Ahead → Far Away → Spoon → Lutnița**. Its media therefore maps to the matching numbered rows in each project section below (use the desktop `Screen Shots/desktop/home.png` and mobile full-home capture for section positions). The Spoon home sequence uses the same two-entry looping-video gallery as the Spoon page.

| Shared visible/reference asset | Matched source | Type and dimensions | Display behavior | Confidence / notes |
|---|---|---|---|---|
| Header NM mark | `logo.svg` | SVG vector; viewBox 117×80.6 | Contain within header mark box; preserve ratio | High; source file used in shared header |
| Browser tab mark | `NM_potofolio_favicon.svg` | SVG vector; viewBox 16×16 | Browser favicon; preserve ratio | High |
| Instagram control | Inline SVG in `scripts/site.js` | Generated icon; 24×24 CSS size | Outline icon, links to `https://www.instagram.com/nicolae_dymok/` | High; no separate Instagram image was supplied |

## Lucid Coffee Roasters

Screenshot references: supplied `Screenshot 2026-09-25 at 14.43.31.png` and `Screenshot 2026-09-25 at 14.43.42.png`; also `Screen Shots/desktop/lucid.png` and mobile `.../screencapture-nicolaemorozov-Lucid-Coffee-Roasters-copy-2026-09-25-12_17_02.png`. The homepage section also appears in the home captures.

| Position / screenshot description | Matched source asset | Type; source dimensions | Intended display behavior and fit | Confidence / notes |
|---|---|---|---|---|
| 1 — opening logo reveal | `Lucid/Logo_reveal.mp4` | MP4; 1920×1080 | Muted inline autoplay, loop; scale to fit within 16:9 without cropping | High; exact live video filename/order |
| 2 — first still after reveal | `Lucid/Scan-1.png` | PNG; 1920×1080 | Still; scale to fit within 16:9 without cropping | High; exact live media ID |
| 3 — animated wide post | `Lucid/Wide_-Post_Gif_.gif` | GIF; 1920×1080 | Animated; scale to fit within 16:9 without cropping | High; exact live media ID |
| 4 — packaging/identity still | `Lucid/asset_23.png` | PNG; 1920×1080 | Still; scale to fit within 16:9 without cropping | High; exact live media ID |
| 5 — row 2, third cell: colour reveal | `Lucid/Colours_reveal.mp4` | MP4; 1920×1080 | Muted autoplay, loop, preload requested at page render; scaled to fit 16:9 without cropping | High; source order is retained |
| 6 — identity still | `Lucid/asset_32.png` | PNG; 1920×1080 | Still; scale to fit within 16:9 without cropping | High; exact live media ID |
| 7 — identity still | `Lucid/asset_36.png` | PNG; 1920×1080 | Still; scale to fit within 16:9 without cropping | High; exact live media ID |
| 8 — identity/packaging still | `Lucid/asset_25.png` | PNG; 1920×1080 | Still; scale to fit within 16:9 without cropping | High; exact live media ID |
| 9 — animated blueprint | `Lucid/AE_Blueprint_5.gif` | GIF; 1920×1080 | Animated; scale to fit within 16:9 without cropping | High; exact live media ID. `AE_Blueprint_4.gif` is not selected. |
| 10 — row 4, first cell: extended scan video | `Lucid/Wide_Extended_Scan-69.mp4` | MP4; 1920×1080 | Muted autoplay, loop, preload requested at page render; scaled to fit 16:9 without cropping | High; matches the attached reference sequence |
| 11 — reels mockup | `Lucid/AE_IG_REELS_mockup.png` | PNG; 1920×1080 | Still; native 16:9; scale to fit without cropping | High; exact live media ID; asset modified 2026-09-25 16:55 |
| 12 — animated composition | `Lucid/Comp-1_1.gif` | GIF; 1920×1080 | Animated; scale to fit within 16:9 without cropping | High; exact live media ID |
| 13 — closing reels video | `Lucid/Reels_Combined.mp4` | MP4; 1920×1080 | Muted inline autoplay, loop; scale to fit within 16:9 without cropping | High; exact live video filename/order |

## Ahead Studio

Screenshot references: supplied `Screenshot 2026-09-25 at 14.43.51.png`, `Screen Shots/desktop/ahead.png`, and mobile `.../screencapture-nicolaemorozov-ahead-studio-2026-09-25-12_17_14.png`; homepage section also appears in home captures.

| Position / screenshot description | Matched source asset | Type; source dimensions | Intended display behavior and crop | Confidence / notes |
|---|---|---|---|---|
| 1 — row 1, left: logo reveal | `ahead studio/Ahead_logo_reveal.mp4` | MP4; 1920×1080 | Muted autoplay, loop, preload requested at page render; fill and crop to 16:9 (`cover`) | High; exact live filename; matches first screenshot cell |
| 2 — row 1, right: screen mockups | `ahead studio/Ahead_Screen_Mockups_LOOP.mp4` | MP4; 1920×1080 | Muted autoplay, loop, preload requested at page render; fill and crop to 16:9 (`cover`) | High; exact live filename; matches second screenshot cell |
| 3 — row 2, left: showreel | `ahead studio/Ahead_Showreel_cut.mp4` | MP4; 1920×1080 | Muted autoplay, loop, preload requested at page render; fill and crop to 16:9 (`cover`) | High; exact live filename; screenshot match |
| 4 — row 2, center: graphic still | `ahead studio/original_cfb1997802589e52ca577eccdea19d3d.png` | PNG; 1700×1152 | Still; fill and crop to 16:9 (`cover`), centered | High; exact live media ID |
| 5 — row 2, right: animated social grid | `ahead studio/grey_ahead_SM_grid.gif` | GIF; 1920×1080 | Animated; fill and crop to 16:9 (`cover`) | High; exact live media ID. Similar archive GIF is not used. |
| 6 — row 3, left: second graphic still | `ahead studio/original_f313e890ff0f2826c46292ea76df6002.png` | PNG; 1700×956 | Still; native 16:9; fill frame (`cover`) | High; exact live media ID; asset modified 2026-09-25 16:28 |
| 7 — row 3, second: social media guide | `ahead studio/archivaL/Ahead_Social_media_guide.png` | PNG; 2155×1350 | Still; fill and crop to 16:9 (`cover`), centered | High; exact active Cargo ID points to archive-named folder |
| 8 — row 3, third: social media guide | `ahead studio/Ahead_Social_media_guide_3.png` | PNG; 1920×1080 | Still; fill and crop to 16:9 (`cover`) | High; exact live media ID |
| 9 — row 3, right: social media guide | `ahead studio/archivaL/Ahead_Social_media_guide_2.png` | PNG; 2155×1350 | Still; fill and crop to 16:9 (`cover`), centered | High; exact active Cargo ID points to archive-named folder |

The supplied Ahead screenshot groups the project into 2, 3, and 4 images per row. All nine items keep their live source order and fill 16:9 frames with centered cropping where their native ratio differs. Every frame has the same dimensions within its row, with a consistent 16 px desktop / 8 px mobile gutter throughout.

## Far Away from Home — Photobook

Screenshot references: supplied `Screenshot 2026-09-25 at 14.44.00.png`, `Screen Shots/desktop/farawayfromhome.png`, and mobile `.../screencapture-nicolaemorozov-Far-away-from-Home-Photobook-2026-09-25-12_17_24.png`; homepage section also appears in home captures.

| Position / screenshot description | Matched source asset | Type; source dimensions | Intended display behavior and crop | Confidence / notes |
|---|---|---|---|---|
| 1 — row 1, left: person holding the photobook | `Far Away from Home/1.png` | PNG; 1280×854 | Still; crop to fill 16:9 (`cover`), centered | High; matches first screenshot cell |
| 2 — row 1, right: red cover on a table | `Far Away from Home/2.png` | PNG; 1280×854 | Still; crop to fill 16:9 (`cover`), centered | High; matches second screenshot cell |
| 3 — row 2, left: close view of the cover | `Far Away from Home/3.png` | PNG; 1280×854 | Still; crop to fill 16:9 (`cover`), centered | High; screenshot and supplied image order match |
| 4 — row 2, center: stack of books | `Far Away from Home/4.png` | PNG; 1280×854 | Still; crop to fill 16:9 (`cover`), centered | High; screenshot and supplied image order match |
| 5 — row 2, right: open book | `Far Away from Home/5.png` | PNG; 1280×854 | Still; crop to fill 16:9 (`cover`), centered | High; screenshot and supplied image order match |
| 6 — row 3, left: book spines | `Far Away from Home/6.png` | PNG; 1280×854 | Still; crop to fill 16:9 (`cover`), centered | High; screenshot and supplied image order match |
| 7 — row 3, center: book walkthrough | `Far Away from Home/VHS.mp4` | MP4; 1920×1080 | Muted autoplay, loop; fill 16:9 frame (`cover`); transparent frame background | High; matches screenshot cell and live filename/order |
| 8 — row 3, right: interview/workflow video | `Far Away from Home/interview_workflow.mp4` | MP4; 1920×1080 | Muted autoplay, loop; fill 16:9 frame (`cover`); transparent frame background | High; matches screenshot cell and live filename/order |

The six stills remain first in their Cargo order. The Instagram-linked `VHS.mp4` and YouTube-linked `interview_workflow.mp4` follow as positions 7 and 8. Their external links are preserved, and each linked video now occupies a regular 16:9 frame in the same grid with the same 16 px desktop / 8 px mobile gutter as the stills. The rows remain 2, 3, and 3 items on desktop and flow into two columns on mobile.

The supplied Far Away screenshot groups the eight media items into **2, 3, and 3** per row. All items keep the live source order and fill centered 16:9 frames; the 3:2 stills are cropped at the top/bottom as needed, and the videos fill their frames without a grey contain background.

## Spoon Studio

Screenshot references: `Screen Shots/desktop/spoon.png`, mobile `.../screencapture-nicolaemorozov-Spoon-Studio-2026-09-25-12_17_33.png`; homepage section also appears in home captures.

| Position / screenshot description | Matched source asset | Type; source dimensions | Intended display behavior and crop | Confidence / notes |
|---|---|---|---|---|
| Gallery slide 1 | `Sp00n/Combi_Mega_Light.mp4` | MP4; 1920×1080 | Muted looping video; automatic advance every 10 s; user arrows; scale to fit within 16:9 without cropping | High; live gallery record |
| Gallery slide 2 | `Sp00n/Combi_Mega_Light.mp4` | MP4; 1920×1080 | Same source video as slide 1; automatic advance every 10 s; user arrows; scale to fit within 16:9 without cropping | High; Cargo has two slide entries for the same file, preserved intentionally |

## Contemporary Art Gallery — Lutnița

Screenshot references: `Screen Shots/desktop/lutnita.png`, mobile `.../screencapture-nicolaemorozov-Lutni-a-2026-09-25-12_17_43.png`; homepage section also appears in home captures.

| Position / screenshot description | Matched source asset | Type; source dimensions | Intended display behavior and crop | Confidence / notes |
|---|---|---|---|---|
| 1 — animated logo | `lutnita/Logo_Loop_2.gif` | GIF; 1920×1080 | Animated; scale to fit within 16:9 without cropping | High; exact live media ID |
| 2 — carousel motion | `lutnita/Lutnita_Carousel_1.mp4` | MP4; 1920×1080 | Muted inline autoplay, loop; scale to fit within 16:9 without cropping | High; exact live filename/order |
| 3 — colour stop motion | `lutnita/Slow_Stop_motion_Presentation_of_Colors.gif` | GIF; 1920×1080 | Animated; scale to fit within 16:9 without cropping | High; exact live media ID |
| 4 — type specimen | `lutnita/Type_screen_2_2_1.jpg` | JPG; 1920×1080 | Still; scale to fit within 16:9 without cropping | High; exact live media ID |
| 5 — type specimen | `lutnita/Type_screen_2_2.jpg` | JPG; 1920×1080 | Still; scale to fit within 16:9 without cropping | High; exact live media ID |
| 6 — type specimen (archive-named folder) | `lutnita/archival/Type_screen_1_1.jpg` | JPG; 1920×1080 | Still; scale to fit within 16:9 without cropping | High; active Cargo media ID explicitly points here |
| 7 — gallery photograph | `lutnita/RG012331.jpg` | JPG; 4928×3264 | Still; scale to fit within 16:9 without cropping | High; exact live media ID |
| 8 — gallery photograph | `lutnita/RG012243-2.jpg` | JPG; 4857×3217 | Still; scale to fit within 16:9 without cropping | High; exact live media ID |
| 9 — animated motion study | `lutnita/motion_.gif` | GIF; 1920×1272 | Animated; scale to fit within 16:9 without cropping | High; exact live media ID |
| 10 — colour system | `lutnita/Colors_3.png` | PNG; 1920×1080 | Still; scale to fit within 16:9 without cropping | High; exact live media ID |
| 11 — AR posters | `lutnita/Lutnita_AR_posters.mp4` | MP4; 1920×1080 | Muted inline autoplay, loop; scale to fit within 16:9 without cropping | High; exact live filename/order |
| 12 — poster 3 | `lutnita/3_to_post.png` | PNG; 1920×1280 | Still; scale to fit within 16:9 without cropping | High; exact live media ID |
| 13 — poster 4 | `lutnita/4_to_post.png` | PNG; 1920×1280 | Still; scale to fit within 16:9 without cropping | High; exact live media ID |
| 14 — poster | `lutnita/to_post.png` | PNG; 1920×1280 | Still; scale to fit within 16:9 without cropping | High; exact live media ID |
| 15 — identity application | `lutnita/original_72a1b87a0066a7f5fbcf0c7a696518b6.png` | PNG; 2088×1442 | Still; scale to fit within 16:9 without cropping | High; exact live media ID |
| 16 — square identity application | `lutnita/original_7cc909a9e7001a0f77ef504332843bcf.png` | PNG; 1080×1080 | Still; scale to fit within 16:9 without cropping | High; exact live media ID; crop warrants visual review |
| 17 — envelope mockup | `lutnita/mockup_mail_envelope.png` | PNG; 1300×1300 | Still; scale to fit within 16:9 without cropping | High; exact live media ID; crop warrants visual review |
| 18 — animated identity | `lutnita/original_7b1c6769b4a481f0eb51722fd0531396.gif` | GIF; 1920×1280 | Animated; scale to fit within 16:9 without cropping | High; exact live media ID |
| 19 — closing black carousel | `lutnita/Lutnita_Black_Carousel.mp4` | MP4; 1920×1080 | Muted inline autoplay, loop; scale to fit within 16:9 without cropping | High; exact live filename/order |

The supplied Lucid reference screenshots group the gallery as rows of **2, 3, 4, 3, and 1 full-width item**, respectively. The last row begins with `Wide_Extended_Scan-69.mp4`, then the reels mockup and animated composition; `Reels_Combined.mp4` occupies the final full-width row. The same 16:9 scale-to-fit treatment is applied to every asset without cropping.

The live Lutnița gallery configuration enables arrows and automatic advance at 2.5 s (0.5 s transition). Manual navigation remains available. Spoon uses a 10 s interval (0.5 s transition) and the same supplied video in each of two slide records. The reconstructed arrow controls sit at the left/right image edges and vertically center on the frame. Each arrow has a 32 px transparent hit-area surround; the existing hover reveal and white hover state are preserved.

## Index thumbnails and About portrait

Screenshot references: desktop `Screen Shots/desktop/index.png` / `aboutme.png`; mobile `Screen Shots/mobile/screencapture-nicolaemorozov-Index-2026-09-25-12_19_16.png` / `.../screencapture-nicolaemorozov-About-Me-2026-09-25-12_18_27.png`.

| Page / position | Matched source asset | Type; source dimensions | Display behavior | Confidence / notes |
|---|---|---|---|---|
| Index — Lucid | `INDEX thumbnails/Thumbnail-dark.gif` | GIF; 1920×1080 | Animated thumbnail, 16:9 cover | High; matches exact project listing asset |
| Index — Ahead | `INDEX thumbnails/Thumbnail-Ahead-Light.gif` | GIF; 1920×1080 | Animated thumbnail, 16:9 cover | High; exact supplied index-specific variant |
| Index — Far Away | `Far Away from Home/Dark_Thumbnail.jpg` | JPG; 1280×854 | Still thumbnail, 16:9 cover | High; Cargo's live thumbnail metadata names this file at 1280×854. The smaller 500×334 copy in `INDEX thumbnails/` is a derivative, so the supplied project-folder original is used. |
| Index — Spoon | `INDEX thumbnails/Spoon_logo_2_1.gif` | GIF; 1920×1080 | Animated thumbnail, 16:9 cover | High; supplied index-specific file |
| Index — Lutnița | `INDEX thumbnails/Logo_Loop_2.gif` | GIF; 1920×1080 | Animated thumbnail, 16:9 cover | High; byte-identical to `lutnita/Logo_Loop_2.gif`; index folder is the clearer source location |
| About — portrait | `IMG_5322.jpg` | JPG; 634×821 | Portrait; preserve source ratio, no 16:9 crop | High; exact About source media ID |

## Alternatives, exclusions, and unresolved items

- Similar files in `Lucid/arch/`, `ahead studio/archivaL/`, `Sp00n/ARCHIVAL/`, and `lutnita/archival/` were not substituted unless the active Cargo page media ID points to them. Archive-folder path alone does not mean inactive: the three Ahead/Lutnița entries explicitly referenced by the live page remain active.
- File-size/hash comparison for matching thumbnail variants: Lucid's two supplied `Thumbnail-dark.gif` copies are byte-identical (13,099,886 bytes); Ahead's two `Thumbnail-Ahead-Light.gif` copies are byte-identical (14,428,834 bytes); Spoon's copies are byte-identical (5,860,561 bytes); Lutnița's `Logo_Loop_2.gif` copies are byte-identical (2,358,329 bytes). Far Away's index-folder JPEG is a 500×334, 21,860-byte derivative; its same-named project-folder JPEG is 1280×854, 70,199 bytes and is used for the index instead.
- The Lucid reference layout follows the supplied screenshots and retains the live asset order: positions 1–2, 3–5, 6–9, 10–12, and 13 form each successive row.
- The two Lutnița square media items (positions 16–17) are source-matched with high confidence and scale whole into 16:9 frames without cropping.
- Cargo's desktop/mobile captures show the original page composition. Uniform 16:9 scale-to-fit frames are a new explicit direction from the site owner; the source asset mapping itself is not unresolved.
- No active visible project media is marked unresolved. The supplied About source also contains an unused `vertical.svg` library record; it is not in the current visible page composition. The active About portrait is `IMG_5322.jpg`.
