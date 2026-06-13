const fs = require('fs');
const PImage = require('pureimage');

async function findBBox(filepath, bgCheck) {
    if (!fs.existsSync(filepath)) return;
    const img = await PImage.decodePNGFromStream(fs.createReadStream(filepath));
    let minX=img.width, maxX=0, minY=img.height, maxY=0;
    for(let y=0; y<img.height/3; y++) {
        for(let x=0; x<img.width; x++) {
            let rgba = img.getPixelRGBA(x, y);
            let r = (rgba >>> 24) & 0xFF;
            let g = (rgba >>> 16) & 0xFF;
            let b = (rgba >>> 8) & 0xFF;
            let a = rgba & 0xFF;
            if (a > 0 && bgCheck(r,g,b)) {
                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;
            }
        }
    }
    console.log(`${filepath}: text/bg bounding box: x=${minX}..${maxX}, y=${minY}..${maxY}`);
}

async function main() {
    await findBBox('game-source/public/game/assets/img/door-accepted.png', (r,g,b) => r>200 && g>200 && b>200);
    await findBBox('game-source/public/game/assets/spritesheets/office-door/door.png', (r,g,b) => r>200 && g>200 && b>200);
    await findBBox('game-source/public/game/assets/spritesheets/data-server-accepted/data-server-accepted.png', (r,g,b) => r<150 && g<150 && b<150 && r>50); // find grey text
}
main().catch(console.error);
