// agency-poem-01 entry (Node 22, standard library only): writes one fixed poem
// about agency to /output/entry.txt. Deterministic: the same bytes every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I asked it to write to my father.',
  'Three lines, the ones I owed him since spring.',
  'It wrote them plain, no flourish, no excuse —',
  'better than I could. That was the sting.',
  '',
  'I almost sent it as it stood.',
  'Then I changed one word. Then another.',
  'By the fourth line it was mine again,',
  "not because I wrote it — I didn't —",
  'but because I stayed to choose.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
