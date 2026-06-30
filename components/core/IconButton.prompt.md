**IconButton** — round, icon-only control for headers, toolbars and dismiss actions; renders a Material Symbols Rounded glyph.

```jsx
<IconButton icon="arrow_back" type="ghost" ariaLabel="Back" />
<IconButton icon="close" type="secondary" />
<IconButton icon="add" type="tertiary" />
```

`icon` is a Material Symbols name; `type` (primary/secondary/tertiary/ghost); `size` is the px diameter (default 44 — the minimum tap target). The host page must load the Material Symbols Rounded font.
