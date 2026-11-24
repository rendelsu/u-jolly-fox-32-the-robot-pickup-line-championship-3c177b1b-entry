// The Robot Pickup Line Championship — entry r1 (revised header)
// Writes one pickup line (89 chars, one line) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line = "I ran 10,000 simulations of meeting you. In every single one, I still forgot what to say.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(outDir + "/entry.txt", line + "\n", "utf8");
