# Shared UI structure

The shared vanilla JavaScript renderer lives in `../site.js`; source Cargo page content and media ID mappings are stored in `../source-content.json`. The renderer provides the shared header/footer, index cards, source-content localizer, and gallery controller. Source content remains in the structure delivered by Cargo so its project-specific compositions are retained.

Gallery behavior is derived from each source gallery's settings: Spoon advances every 10 seconds, Lutnița every 2.5 seconds and supports previous/next, keyboard, and touch input. Reduced-motion users can switch slides manually without automatic advancement.
