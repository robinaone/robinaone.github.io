yahtzee = {
  'turnsRemaining' : 13,
  'throwsRemainingInTurn' : 3,
  'player' : {
    'name' : 'Bill',
    'avatar' : 'https://lorempixel.com/200/200/people/3/'
  }
  'dice' : [
    {
      'sideUp' : 4,
      'saved' : false
    },
    {
      'sideUp' : 3,
      'saved' : true
    },
    {
      //to call this: 'yahtzee.dice[3].saved'
      'sideUp' : 6,
      'saved' : false
    },
    {
      'sideUp' : 2,
      'saved' : true
    },
    {
      'sideUp' : 1,
      'saved' : false
    }
  ]
  'scoreCard' : [
    {
      'title' : 'Aces',
      'top' : true,
      'displaySequence' : 1,
      'scoreRecorded' : false,
      'scoreCondition' : 'addAces',
      'scoreMath' : 'sumOfAces'
    },
    {
      'title' : 'Twos',
      'top' : true,
      'displaySequence' : 2,
      'scoreRecorded' : false,
      'scoreCondition' : 'addTwos',
      'scoreMath' : 'sumOfTwos'
    },
    {
      'title' : 'Threes',
      'top' : true,
      'displaySequence' : 3,
      'scoreRecorded' : false,
      'scoreCondition' : 'addThrees',
      'scoreMath' : 'sumOfThrees'
    },
    {
      'title' : 'Fours',
      'top' : true,
      'displaySequence' : 4,
      'scoreRecorded' : false,
      'scoreCondition' : 'addFours',
      'scoreMath' : 'sumOfFours'
    },
    {
      'title' : 'Fives',
      'top' : true,
      'displaySequence' : 5,
      'scoreRecorded' : false,
      'scoreCondition' : 'addFives',
      'scoreMath' : 'sumOfFives'
    },
    {
      'title' : 'Sixes',
      'top' : true,
      'displaySequence' : 6,
      'scoreRecorded' : false,
      'scoreCondition' : 'addSixes',
      'scoreMath' : 'sumOfSixes'
    },
    {
      'title' : 'Three of a Kind',
      'top' : true,
      'displaySequence' : 7,
      'scoreRecorded' : false,
      'scoreCondition' : 'addThreeOfAKind',
      'scoreMath' : 'sumOfThreeOfAKind'
    },
    {
      'title' : 'Four of a Kind',
      'top' : true,
      'displaySequence' : 8,
      'scoreRecorded' : false,
      'scoreCondition' : 'addFourofAKind',
      'scoreMath' : 'sumOfFourOfAKind'
    },
    {
      'title' : 'Full House',
      'top' : true,
      'displaySequence' : 9,
      'scoreRecorded' : false,
      'scoreCondition' : 'threeOfAKindAndPair',
      'scoreMath' : 25
    },
    {
      'title' : 'Small Straight',
      'top' : true,
      'displaySequence' : 10,
      'scoreRecorded' : false,
      'scoreCondition' : 'sequenceOfFour',
      'scoreMath' : 30
    },
    {
      'title' : 'Large Straight',
      'top' : true,
      'displaySequence' : 11,
      'scoreRecorded' : false,
      'scoreCondition' : 'sequenceofFive',
      'scoreMath' : 40
    },
    {
      'title' : 'Yahtzee!',
      'top' : true,
      'displaySequence' : 12,
      'scoreRecorded' : false,
      'scoreCondition' : 'fiveOfAKind',
      'scoreMath' : 50
    },
    {
      'title' : 'Chance',
      'top' : true,
      'displaySequence' : 13,
      'scoreRecorded' : false,
      'scoreCondition' : 'addAllDie',
      'scoreMath' : 'sumOfAllDie'
    }
  ]
}
