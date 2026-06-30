**SegmentedControl** — compact one-of-N selector; the active segment fills yellow. Use for 2–3 short options (e.g. a view toggle).

```jsx
<SegmentedControl options={["Day", "Week", "Month"]} value={tab} onChange={setTab} />
```

`options` (strings or `{label,value}`), `value`, `onChange`.
