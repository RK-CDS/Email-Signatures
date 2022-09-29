function copyElem(node) {
    if (document.body.createTextRange) {
        const range = document.body.createTextRange();
        range.moveToElementText(node);
        range.select();
        document.execCommand('copy');
        alert('Signature Copied to clipboard');
    } else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        alert('Signature Copied to clipboard');
    } else {
        alert('Unable to copy signature');
    }
}
function copy1() {
    node = document.getElementById("sig1");
    copyElem(node);
}
function copy2() {
    node = document.getElementById("sig2");
    copyElem(node);
}