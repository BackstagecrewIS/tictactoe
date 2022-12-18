const getWinners = require("../game");

describe ("Check getWinners function", () => {
    test("Should retrieve first winning combinations from wins array", () => {
        expect(getWinners(0)).toEqual([1,2,3]);
    })
});

