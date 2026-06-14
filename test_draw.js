const fs = require('fs');
const PImage = require('pureimage');

async function debugFrame(jsonPath, imgPath, outPath, boxRelX, boxRelY, boxW, boxH, bgSamplerRelX, bgSamplerRelY) {
    if (!fs.existsSync(jsonPath) || !fs.existsSync(imgPath)) return;
    const json = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    const img = await PImage.decodePNGFromStream(fs.createReadStream(imgPath));
    
    let f = json.frames[Object.keys(json.frames)[0]].frame;
    
    // Create a new image for the single frame
    const frameImg = PImage.make(f.w, f.h);
    const ctx = frameImg.getContext('2d');
    
    // Copy the frame pixels
    ctx.drawImage(img, f.x, f.y, f.w, f.h, 0, 0, f.w, f.h);
    
    // Draw bounding box
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 1;
    ctx.strokeRect(boxRelX, boxRelY, boxW, boxH);
    
    // Draw sample pixel
    ctx.fillStyle = 'red';
    ctx.fillRect(bgSamplerRelX - 2, bgSamplerRelY - 2, 5, 5);
    
    await PImage.encodePNGToStream(frameImg, fs.createWriteStream(outPath));
    console.log("Debug frame saved to", outPath);
}

async function main() {
    await debugFrame(
        'game-source/public/game/assets/spritesheets/office-door/office-door.json',
        'game-source/public/game/assets/spritesheets/office-door/door-office-{1}.png',
        'debug_office.png',
        30, 10, 220, 40,
        140, 20
    );
    await debugFrame(
        'game-source/public/game/assets/spritesheets/way-out-door/door-rejected.json',
        'game-source/public/game/assets/spritesheets/way-out-door/door-rejected.png',
        'debug_rejected.png',
        30, 10, 220, 40,
        140, 20
    );
}
main().catch(console.error);
