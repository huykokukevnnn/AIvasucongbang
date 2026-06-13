const fs = require('fs');
const PImage = require('pureimage');

async function main() {
    const paths = [
        'game-source/public/game/assets/img/door-accepted.png'
    ];

    const img = await PImage.decodePNGFromStream(fs.createReadStream(paths[0]));
    console.log(`Image ${paths[0]}: ${img.width} x ${img.height}`);
    
    for(let y=0; y<50; y+=10) {
        let row = [];
        for(let x=0; x<img.width; x+=20) {
            let rgba = img.getPixelRGBA(x, y);
            let r = (rgba >>> 24) & 0xFF;
            let g = (rgba >>> 16) & 0xFF;
            let b = (rgba >>> 8) & 0xFF;
            row.push(`${r},${g},${b}`);
        }
        console.log(`y=${y}: `, row.join(' | '));
    }
}
main().catch(console.error);
