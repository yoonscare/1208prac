document.getElementById('drawButton').addEventListener('click', function() {
    const numbers = [];
    while (numbers.length < 6) {
        const num = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    numbers.sort((a, b) => a - b);
    document.getElementById('lottoNumbers').innerText = `추첨된 번호: ${numbers.join(', ')}`;
});
