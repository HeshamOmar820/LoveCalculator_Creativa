function calculateLoveScore() {
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;

    if (name1 === '' || name2 === '') {
        alert('Please enter both names.');
        return;
    }
    const loveScore = Math.floor(Math.random()*100) +1;
    const result = document.getElementById('result');
    result.innerHTML = `Love Score for ${name1} and ${name2}: ${loveScore}%`;
}
