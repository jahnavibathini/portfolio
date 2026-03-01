const fs = require('fs');
const path = require('path');
const plantumlEncoder = require('plantuml-encoder');
const https = require('https');

const diagrams = [
  { src: 'docs/c2-container.puml', out: 'public/diagrams/c2-container.svg' },
  { src: 'docs/c3-component.puml', out: 'public/diagrams/c3-component.svg' },
];

const outDir = path.join(__dirname, '..', 'public', 'diagrams');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, (res2) => {
          res2.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        }).on('error', reject);
      } else {
        res.pipe(file);
        file.on('finish', () => { file.close(); resolve(); });
      }
    }).on('error', reject);
  });
}

(async () => {
  for (const d of diagrams) {
    const puml = fs.readFileSync(path.join(__dirname, '..', d.src), 'utf8');
    const encoded = plantumlEncoder.encode(puml);
    const url = `https://www.plantuml.com/plantuml/svg/${encoded}`;
    console.log(`Generating ${d.out}...`);
    await download(url, path.join(__dirname, '..', d.out));
    console.log(`  Done: ${d.out}`);
  }
})();
