**Chip** — selectable filter or category pill used in toolbars (e.g. the inbox "All / Unread / Flagged" row). Outlined when off, yellow-filled when selected.

```jsx
<Chip selected count={2} leadingIcon="settings">All Mail</Chip>
<Chip>Unread</Chip>
```

`selected` toggles the yellow fill; `count` renders a small bubble; `leadingIcon` is a Material Symbols name.
