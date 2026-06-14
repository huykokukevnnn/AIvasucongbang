const fs = require('fs');
const PImage = require('pureimage');

async function processSingleImage(filepath, text, textColor, bgSamplerY) {
    if (!fs.existsSync(filepath)) return;
    const img = await PImage.decodePNGFromStream(fs.createReadStream(filepath));
    const ctx = img.getContext('2d');
    
    let rgba = img.getPixelRGBA(Math.floor(img.width/2), bgSamplerY);
    let r = (rgba >>> 24) & 0xFF;
    let g = (rgba >>> 16) & 0xFF;
    let b = (rgba >>> 8) & 0xFF;
    
    ctx.fillStyle = `rgb(${r},${g},${b})`;
    let textW = img.width * 0.7;
    let textX = (img.width - textW) / 2;
    ctx.fillRect(textX, bgSamplerY - 5, textW, 35);
    
    ctx.fillStyle = textColor;
    ctx.font = '24px SpaceMono';
    let measure = ctx.measureText(text);
    let startX = (img.width - measure.width) / 2;
    ctx.fillText(text, startX, bgSamplerY + 20);
    
    await PImage.encodePNGToStream(img, fs.createWriteStream(filepath));
    console.log("Processed", filepath);
}

async function processSpritesheet(jsonPath, imgPath, text, textColor, boxRelX, boxRelY, boxW, boxH, bgSamplerRelX, bgSamplerRelY, fontScale) {
    if (!fs.existsSync(jsonPath) || !fs.existsSync(imgPath)) return;
    const json = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    const img = await PImage.decodePNGFromStream(fs.createReadStream(imgPath));
    const ctx = img.getContext('2d');
    
    for (let key in json.frames) {
        let f = json.frames[key].frame;
        // some frames might be rotated so w/h are swapped, but let's assume text is always near top relative to original unrotated?
        // Actually, if rotated, x/y is the top-left of the rotated box.
        // Let's just use the bounds from the frame.
        let sx = f.x + bgSamplerRelX;
        let sy = f.y + bgSamplerRelY;
        if (sx >= img.width) sx = img.width - 1;
        if (sy >= img.height) sy = img.height - 1;

        let rgba = img.getPixelRGBA(sx, sy);
        let r = (rgba >>> 24) & 0xFF;
        let g = (rgba >>> 16) & 0xFF;
        let b = (rgba >>> 8) & 0xFF;
        
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(f.x + boxRelX, f.y + boxRelY, boxW, boxH);
        
        ctx.fillStyle = textColor;
        ctx.font = `${fontScale}px SpaceMono`;
        let measure = ctx.measureText(text);
        let startX = f.x + boxRelX + (boxW - measure.width) / 2;
        ctx.fillText(text, startX, f.y + boxRelY + boxH * 0.7);
    }
    
    await PImage.encodePNGToStream(img, fs.createWriteStream(imgPath));
    console.log("Processed", imgPath);
}

async function main() {
    const font = PImage.registerFont('SpaceMono-Bold.ttf', 'SpaceMono');
    await font.load();

    await processSingleImage('game-source/public/game/assets/img/door-accepted.png', 'VĂN PHÒNG', 'white', 10);
    await processSingleImage('game-source/public/game/assets/img/door-rejected.png', 'LỐI RA', 'white', 10);
    
    await processSpritesheet(
        'game-source/public/game/assets/spritesheets/office-door/office-door.json',
        'game-source/public/game/assets/spritesheets/office-door/door-office-{1}.png',
        'VĂN PHÒNG', 'white',
        30, 2, 220, 42, 
        140, 10, 
        30 
    );

    await processSpritesheet(
        'game-source/public/game/assets/spritesheets/way-out-door/door-rejected.json',
        'game-source/public/game/assets/spritesheets/way-out-door/door-rejected.png',
        'LỐI RA', 'white',
        30, 2, 220, 42,
        140, 10,
        30
    );

    await processSpritesheet(
        'game-source/public/game/assets/spritesheets/data-server-accepted/data-server-accepted.json',
        'game-source/public/game/assets/spritesheets/data-server-accepted/data-server-accepted.png',
        'ĐÃ NHẬN', '#808080',
        25, 80, 535, 60,
        150, 90, 
        40
    );

    await processSpritesheet(
        'game-source/public/game/assets/spritesheets/data-server-rejected/data-server-rejected.json',
        'game-source/public/game/assets/spritesheets/data-server-rejected/data-server-rejected.png',
        'ĐÃ LOẠI', '#808080',
        25, 80, 535, 60,
        150, 90,
        40
    );
}
main().catch(console.error);
