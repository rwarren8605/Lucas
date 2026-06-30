**AnswerRow** — a multiple-choice option. Letter token (A/B/C/D) by default; turns into a green check or red x when graded. `correct`/`incorrect` tint the row and border.

```jsx
<AnswerRow letter="A">Length of credit history (15%)</AnswerRow>
<AnswerRow state="correct">Payment history (35%)</AnswerRow>
<AnswerRow state="incorrect">Number of open cards</AnswerRow>
```

`letter`, `state` (default/selected/correct/incorrect), `onClick`.
