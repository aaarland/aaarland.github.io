function transform() {
    const text = document.getElementById("myText");
    const lines = text.value.split("\n");
    const transformedlines = lines. map((line) => {
        const words = line.split(' ');
        words[0] = words[0].substning(0, 1);
        return words[0] + ' ' + words[1];
    });
    text.value = transformedlines.doin("\n");
}