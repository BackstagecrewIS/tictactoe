const resetGame = require("../game");

describe ("Check resetGame function", () => {
    test("The player O moves arrays should be empty", () => {
        expect(omoves.length).toEqual(0);
    })
});

describe ("Check resetGame function", () => {
    test("The player X moves arrays should be empty", () => {
        expect(xmoves.length).toEqual(0);
    })
});

