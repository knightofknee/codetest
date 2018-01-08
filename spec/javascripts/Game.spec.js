describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new gameOfLife();
  });

  describe("the counter checking function", function() {
    it("should handle the zero case", function() {
      let count = game.checkAround([[0, 0], [0, 0]], 0, 0)
      expect(count).toEqual(0);
    });
    it("should pass this group of test cases", function() {
      let count = game.checkAround([[1, 0], [1, 1]], 1, 1)
      expect(count).toEqual(2);
    });
  })

  //   it("should indicate that the song is currently paused", function() {
  //     expect(player.isPlaying).toBeFalsy();

  //     // demonstrates use of 'not' with a custom matcher
  //     expect(player).not.toBePlaying(song);
  //   });

  //   it("should be possible to resume", function() {
  //     player.resume();
  //     expect(player.isPlaying).toBeTruthy();
  //     expect(player.currentlyPlayingSong).toEqual(song);
  //   });
  // });

  // // demonstrates use of spies to intercept and test method calls
  // it("tells the current song if the user has made it a favorite", function() {
  //   spyOn(song, 'persistFavoriteStatus');

  //   player.play(song);
  //   player.makeFavorite();

  //   expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  // });

  // //demonstrates use of expected exceptions
  // describe("#resume", function() {
  //   it("should throw an exception if song is already playing", function() {
  //     player.play(song);

  //     expect(function() {
  //       player.resume();
  //     }).toThrowError("song is already playing");
  //   });
  // });
})
