describe("Game", function() {
  // var game;

  // beforeEach(function() {
  //   game = new GameOfLife();
  // });

  describe("the count checking function", function() {
    it("should handle the zero case", function() {
      let count = GameOfLife.checkAround([[0, 0], [0, 0]], 0, 0)
      expect(count).toEqual(0);
    });
    it("should pass this group of test cases", function() {
      let count = GameOfLife.checkAround([[1, 0], [1, 1]], 1, 1)
      expect(count).toEqual(2);
      let count2 = GameOfLife.checkAround([[1, 0, 1], [1, 1, 1], [0, 0, 1]], 1, 1)
      expect(count2).toEqual(5);
    });
  })

  describe("the blank board function", function() {
    it("should pass this group of test cases", function() {
      let newBoard = GameOfLife.createBlankBoard(2)
      expect(newBoard).toEqual([[], []]);
      let newBoard2 = GameOfLife.createBlankBoard([[1, 0, 1], [1, 1, 1], [0, 0, 1]].length)
      expect(newBoard2).toEqual([[], [], []]);
    });
  })

  describe("the play turn function", function() {
    it("should pass this group of test cases", function() {
      let newBoard = GameOfLife.playTurn([[1, 0, 1], [1, 1, 1], [0, 0, 1]])
      expect(newBoard).toEqual([[1, 0, 1], [1, 0, 1], [0, 0, 1]]);
      let newBoard2 = GameOfLife.playTurn([[0, 1, 1, 1, 0], [1, 0, 1, 0, 1], [1, 1, 0, 1, 1], [1, 0, 1, 0, 1], [0, 1, 1, 1, 0]])
      expect(newBoard2).toEqual([[0, 1, 1, 1, 0], [1, 0, 0, 0, 1], [1, 0, 0, 0, 1], [1, 0, 0, 0, 1], [0, 1, 1, 1, 0]]);
    });
  })
  // stable example:
// 0	1	1	1	0
// 1	0	1	0	1
// 1	1	0	1	1
// 1	0	1	0	1
// 0	1	1	1	0
})
