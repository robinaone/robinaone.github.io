yahtzee = {
  'turnsRemaining' : 7,
  'throwsRemainingInTurn' : 2,
  'player' : {
    'name' : 'Caleb',
    'avatar' : 'images/avatar.jpeg'
  },
  'dice' : [
    {
      'sideUp' : 3,
      'saved' : true
    },
    {
      'sideUp' : 4,
      'saved' : false
    },
    {
      'sideUp' : 5,
      'saved' : false
    },
    {
      'sideUp' : 3,
      'saved' : true
    },
    {
      'sideUp' : 3,
      'saved' : true
    }
  ],
  'scoreCard' : [
    {
      'title' : 'Ones',
      'top' : true,
      'displaySequence' : 1,
      'scoreRecorded' : true,
      'score' : 3,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 'sumOfOnes'
    },
    {
      'title' : 'Twos',
      'top' : true,
      'displaySequence' : 2,
      'scoreRecorded' : true,
      'score' : 6,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 'sumofTwos'
    },
    {
      'title' : 'Threes',
      'top' : true,
      'displaySequence' : 3,
      'scoreRecorded' : false,
      'score' : 0,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 'sumofThrees'
    },
    {
      'title' : 'Fours',
      'top' : true,
      'displaySequence' : 4,
      'scoreRecorded' : false,
      'score' : 0,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 'sumofFours'
    },
    {
      'title' : 'Fives',
      'top' : true,
      'displaySequence' : 5,
      'scoreRecorded' : true,
      'score' : 15,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 'sumofFives'
    },
    {
      'title' : 'Sixes',
      'top' : true,
      'displaySequence' : 6,
      'scoreRecorded' : false,
      'score' : 0,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 'sumofSixes'
    },
    {
      'title' : 'Three of a Kind',
      'top' : false,
      'displaySequence' : 7,
      'scoreRecorded' : true,
      'score' : 15,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 'sumofDice'
    },
    {
      'title' : 'Four of a Kind',
      'top' : false,
      'displaySequence' : 8,
      'scoreRecorded' : false,
      'score' : 0,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 'sumofDice'
    },
    {
      'title' : 'Full House',
      'top' : false,
      'displaySequence' : 9,
      'scoreRecorded' : true,
      'score' : 25,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 25
    },
    {
      'title' : 'Small Straight',
      'top' : false,
      'displaySequence' : 10,
      'scoreRecorded' : true,
      'score' : 30,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 30
    },
    {
      'title' : 'Large Straight',
      'top' : false,
      'displaySequence' : 11,
      'scoreRecorded' : false,
      'score' : 0,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 40
    },
    {
      'title' : 'Chance',
      'top' : false,
      'displaySequence' : 12,
      'scoreRecorded' : false,
      'score' : 0,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 'sumofDice'
    },
    {
      'title' : 'Yahtzee!',
      'top' : false,
      'displaySequence' : 13,
      'scoreRecorded' : false,
      'score' : 0,
      'scoreCondition' : 'notSureYet',
      'scoreMath' : 50
    }
  ]
}
