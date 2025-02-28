import Timer "mo:base/Timer";
import Random "mo:base/Random";
import Buffer "mo:base/Buffer";
import Error "mo:base/Error";

shared ({ caller = owner }) actor class () {
  let participants = Buffer.Buffer<Text>(10);
  let winners = Buffer.Buffer<Text>(10);

  /// This function starts the raffle and selects the winners after 60 seconds.
  public shared ({ caller }) func startRaffle() : async () {
    if (caller != owner) {
      throw Error.reject("Only the owner can start the raffle");
    };

    // remove winners from previous raffle
    winners.clear();
    // remove participants from previous raffle
    participants.clear();

		// this timer is executed once after 60 seconds
    let _id = Timer.setTimer<system>(
      #seconds 60,
      func() : async () {
        let seed = await Random.blob();
        let finite = Random.Finite(seed);

        Buffer.iterate<Text>(
          participants,
          func(participant) {
            switch (finite.coin()) {
              case (?true) winners.add(participant);
              case _ return;
            };
          },
        );
      },
    );
  };

  public query func getWinners() : async [Text] {
    Buffer.toArray(winners);
  };

  public func enterRaffle(name : Text) : async [Text] {
    participants.add(name);
    Buffer.toArray(participants);
  };
};
