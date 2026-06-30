**ModuleItem** — a row in the 10-module HBE list: status icon (green check / yellow play / gray lock), title, meta line, and a trailing badge.

```jsx
<ModuleItem status="completed" title="Understanding Your Budget" meta="Module 1 · 12 Min"
  badge={<StatusBadge status="success">Done</StatusBadge>} />
<ModuleItem status="active" title="Your Credit Score" meta="Module 2 · 12 Min"
  badge={<StatusBadge status="solidBrand">Start</StatusBadge>} />
<ModuleItem status="locked" title="Closing Day" meta="Module 10 · 15 Min"
  badge={<StatusBadge status="neutral" icon="lock">Locked</StatusBadge>} />
```

`status` (completed/active/locked), `title`, `meta`, `badge`, `onClick`.
