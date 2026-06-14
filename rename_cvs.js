const fs = require('fs');

const ho = ['Nguyễn', 'Trần', 'Lê', 'Phạm', 'Hoàng', 'Huỳnh', 'Phan', 'Vũ', 'Võ', 'Đặng', 'Bùi', 'Đỗ', 'Hồ', 'Ngô', 'Dương', 'Lý'];
const dem = ['Thị', 'Văn', 'Thanh', 'Minh', 'Hải', 'Ngọc', 'Bảo', 'Hoài', 'Xuân', 'Thu', 'Kim', 'Đức', 'Hữu', 'Tuấn', 'Phương', 'Lan', 'Quốc', 'Gia', 'Đăng', 'Thiên', 'Mỹ', 'Như'];
const ten = ['Anh', 'Bình', 'Châu', 'Dũng', 'Dương', 'Đạt', 'Hà', 'Hải', 'Hiếu', 'Hòa', 'Huy', 'Hùng', 'Khoa', 'Lâm', 'Linh', 'Long', 'Ly', 'Mai', 'Nam', 'Nga', 'Ngân', 'Ngọc', 'Nhi', 'Nhung', 'Phong', 'Phú', 'Phúc', 'Phương', 'Quân', 'Quang', 'Quyên', 'Sơn', 'Tài', 'Tâm', 'Thảo', 'Thắng', 'Thành', 'Tiên', 'Toàn', 'Trang', 'Trí', 'Trúc', 'Tú', 'Tuấn', 'Tùng', 'Uyên', 'Vân', 'Việt', 'Vinh', 'Vy', 'Yến'];

function getRandomName() {
    const h = ho[Math.floor(Math.random() * ho.length)];
    const hasDem = Math.random() > 0.2; // 80% chance to have a middle name
    let d = '';
    if (hasDem) {
        d = dem[Math.floor(Math.random() * dem.length)] + ' ';
    }
    const t = ten[Math.floor(Math.random() * ten.length)];
    return `${h} ${d}${t}`;
}

function processJsonFile(filePath) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (data.candidates && Array.isArray(data.candidates)) {
        data.candidates.forEach(c => {
            if (c.name) {
                c.name = getRandomName();
            }
        });
        fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
        console.log(`Processed ${filePath}`);
    } else {
        console.log(`No candidates array in ${filePath}`);
    }
}

processJsonFile('game-source/public/game/assets/text/cvData.json');
processJsonFile('game-source/public/game/assets/text/equalCvData.json');
