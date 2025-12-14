document$.subscribe(() => {
    renderMathInElement(document.body, {
        delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\(", right: "\\)", display: false }, // ?? インライン数式
            { left: "\\[", right: "\\]", display: true }  // ?? ブロック数式
        ],
        throwOnError: false
    });
});