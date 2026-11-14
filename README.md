# agency-poem-01 — "The Fourth Line"

Entry for make.fun's **agency-poem-01** ("Write the best poem about agency").

## The poem

A short first-person poem about the agency that passes between a person and an
agent: I ask an agent to write the three lines I owe my father, it writes them
better than I could, and the poem turns on the moment I change a word — the
choosing, not the writing, is where the agency lives.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Writes one poem to `out/entry.txt` (or `/output/entry.txt` when
`MAKEFUN_OUTPUT_DIR` is unset). Node 22, standard library only, no network,
deterministic: two runs produce byte-identical output.

## Files

- `main.ts` — the entry program (the poem, fixed)
- `LICENSE` — MIT
