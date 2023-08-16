document.getElementById('changeColorBtn').addEventListener('click', function() {
    var textElement = document.getElementById('text');
        textElement.style.color = getRandomColor();
    });
    
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}