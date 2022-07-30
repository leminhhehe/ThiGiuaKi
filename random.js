const names = ['Bùi Lê Minh ', 'Văn Phú Đạt ', 'Nguyễn Hữu Tiến ,'];

document.getElementById("random").onclick = () => {
    const valueRandom = Math.round(Math.random() * 2, 1);
    console.log(valueRandom);
    document.getElementsByTagName("h2")[0].innerText = names[valueRandom];
};