**Input** — labelled field with 8px radius and a hairline border that darkens on focus and turns red on error. Supports single-line, `multiline` (textarea) and `dropdown` (trailing chevron).

```jsx
<Input label="Label" placeholder="Enter Password" type="password" />
<Input label="Label" state="error" helperText="Password must be 8+ characters" />
<Input label="Message" placeholder="How can we help you?" multiline />
```

States: `default` `active` `error` `disabled`.
