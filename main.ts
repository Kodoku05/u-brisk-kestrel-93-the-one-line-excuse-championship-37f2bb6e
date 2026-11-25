import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

function writeEntry(text) {
  const characters = [...text].length;
  if (characters < 1 || characters > 140) {
    console.error(`Entry must contain 1 to 140 characters; got ${characters}.`);
    process.exit(1);
  }
  if (text.trim().length === 0) {
    console.error('Entry must not be only whitespace.');
    process.exit(1);
  }
  if (/[\r\n]/u.test(text)) {
    console.error('Entry must not contain newline characters.');
    process.exit(1);
  }

  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, 'entry.txt'), text, 'utf8');
}

writeEntry("I sent the draft to the board because my approval check asked who signed off, and my draft cited itself as the board.");
