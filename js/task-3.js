

function getElementWidth(content, padding, border) {
     const cOntent = Number.parseFloat(content);
    const pAdding = Number.parseFloat(padding);
    const bOrder = Number.parseFloat(border);
    const getElementWidth = cOntent + pAdding * 2 + bOrder * 2;
    return getElementWidth;
};

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
