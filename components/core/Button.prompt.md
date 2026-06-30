**Button** — the primary tap target across LUCAS; use `tertiary` (yellow) for celebratory / forward momentum, `primary` (black) for the main action on a screen, `secondary` (outlined) for the lower-emphasis alternative.

```jsx
<Button type="primary" fullWidth>Access My Education</Button>
<Button type="secondary">Maybe Later</Button>
<Button type="tertiary" size="md">Start Module</Button>
```

Variants: `type` (primary/secondary/tertiary), `size` (lg/md/sm), `disabled`, `fullWidth`, plus `leadingIcon` / `trailingIcon` slots. Radius is always `--radius-sm-px` (12px); never square the corners.
