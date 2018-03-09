//Modal
function loadModal() {
  modal = document.getElementsByClassName('modal-wrapper')[0];
  modal.style.display = "block";
}

function closeModal() {
  name = document.getElementById('nameInput').value;
  if (name.length > 0) {
    document.getElementById('playerName').innerHTML = name;
    checkedImage = document.querySelector('input[name=avatar][checked]').value;
    document.getElementById('playerAvatar').src = checkedImage;
    modal = document.getElementsByClassName('modal-wrapper')[0];
    modal.style.display = "none";
    setup();
  }
}

function setup() {
  loadScoreCard();
  loadDice();
}
// UI
function loadDice() {
  dieImages = ['images/question.png', 'images/die1.svg', 'images/die2.svg', 'images/die3.svg', 'images/die4.svg', 'images/die5.svg', 'images/die6.svg']
  yahtzee.dice.forEach(function (die, index) {
    img = document.getElementById('die' + index);
    img.src = dieImages[die.sideUp];
    if (die.saved) {
      img.className = "saved";
    }
    else {
      img.className = "";
    }
  });
  document.getElementById('throwRemainder').innerHTML = ' (' + yahtzee.throwsRemainingInTurn + ')';
}

function calculateScores() {
  yahtzee.scoreCard.forEach(function(scoreCardRow) {
    if (!scoreCardRow.scoreRecorded) {
      if (conditionIsMet(scoreCardRow.scoreCondition)) {
        if (scoreCardRow.scoreMath[0] == 'const') {
          scoreCardRow.score = scoreCardRow.scoreMath[1];
        }
        if (scoreCardRow.scoreMath[0] == 'sum') {
          scoreCardRow.score = sumOfDice(scoreCardRow.scoreMath[1]);
        }
      } else {
      	scoreCardRow.score = 0;
      }
    }
  });
  loadScoreCard();
}
//SCORE CALCULATION
function calculateScores() {
  yahtzee.scoreCard.forEach(function(scoreCardRow) {
    if (!scoreCardRow.scoreRecorded) {
      if (conditionIsMet(scoreCardRow.scoreCondition)) {
        if (scoreCardRow.scoreMath[0] == 'const') {
          scoreCardRow.score = scoreCardRow.scoreMath[1];
        }
        if (scoreCardRow.scoreMath[0] == 'sum') {
          scoreCardRow.score = sumOfDice(scoreCardRow.scoreMath[1]);
        }
      } else {
      	scoreCardRow.score = 0;
      }
    }
  });
  loadScoreCard();
}

function sumOfDice(valueToMatch) {
  total = 0;
  yahtzee.dice.forEach(function(die) {
    if (die.sideUp == valueToMatch || valueToMatch === 0) {
      total += die.sideUp;
    }
  })
  // forloop to add up total
  return total;
}

function conditionIsMet (condition) {
	if (condition[0] == 'none') {
  	return true;
  }
  if (condition[0] == 'ofAKind') {
  	return ofAKind(condition);
  }
  if (condition[0] == 'inARow') {
  	return inARow(condition);
  }
  return flase;
}

function ofAKind(condition) {
	return false;
}

function inARow(condition) {
	return false;
}

function loadScoreCard() {
  document.getElementById('scoreRows').innerHTML = "";
  yahtzee.scoreCard.forEach(function(scoreCardRow, index) {
    document.getElementById('turnsLeft').innerHTML = yahtzee.turnsRemaining + ' Left';
    if (scoreCardRow.top) {
      if (scoreCardRow.scoreRecorded)
        className = "scored";
      else (scoreCardRow.scoreRows)
        className = "unscored";
      buildScoreCardRow(scoreCardRow.title, scoreCardRow.score, (scoreCardRow.scoreRecorded ? "scored" : "unscored"), !scoreCardRow.scoreRecorded, index);
    }
  });
  buildScoreCardRow("Top Subtotal:", " ", "totals", false, 0);
  buildScoreCardRow("Top Bonus:", " ", "totals", false, 0);
  yahtzee.scoreCard.forEach(function(scoreCardRow, index) {
    if (!scoreCardRow.top) {
      buildScoreCardRow(scoreCardRow.title, scoreCardRow.score, (scoreCardRow.scoreRecorded ? "scored" : "unscored"), !scoreCardRow.scoreRecorded, index);
    }
  });
  buildScoreCardRow("Total Score:", " ", "totals", false, 0);
}

function buildScoreCardRow(title, score, columnClassName, clickable, scorecardIndex) {
  tr = document.createElement('tr');
  td1 = document.createElement('td');
  td1.innerHTML = title;
  tr.appendChild(td1);
  td2 = document.createElement('td');
  td2.innerHTML = score;
  td2.className = columnClassName;
  if (clickable) {
    td2.setAttribute('data-scorecardIndex', scorecardIndex);
    td2.onclick = saveScore;
  }
  tr.appendChild(td2);
  document.getElementById('scoreRows').appendChild(tr);
}

// Gameplay
function rollDice() {
  rerolled = false;
  if (yahtzee.throwsRemainingInTurn > 0) {
  yahtzee.dice.forEach(function (die) {
    if (!die.saved) {
      die.sideUp = Math.floor(Math.random() * 6 + 1);
      rerolled = true;
    }
  });
  calculateScores();
  if (rerolled)
    yahtzee.throwsRemainingInTurn--;
  loadDice();
  }
}

function saveScore() {
  if (yahtzee.throwsRemainingInTurn < 3) {
  index = this.getAttribute('data-scoreCardIndex');
  yahtzee.scoreCard[index].scoreRecorded = true;
  scoreSaved = true;
  loadScoreCard();
  yahtzee.throwsRemainingInTurn = 3;
  yahtzee.dice.forEach(function(die){
    die.sideUp = 0;
    die.saved = false;
  });
  if (scoreSaved)
    yahtzee.turnsRemaining--;
  loadDice();
  }
}

function saveDie(dieIndex) {
  if (yahtzee.throwsRemainingInTurn != 3) {
  yahtzee.dice[dieIndex].saved = !yahtzee.dice[dieIndex].saved;
  }
    loadDice();
}

function newGame() {
  yahtzee.turnsRemaining = 13;
  yahtzee.throwsRemainingInTurn = 3;
  yahtzee.scoreCard.forEach(function (scoreCardRow) {
    scoreCardRow.scoreRecorded = false;
    scoreCardRow.score = 0;
  });
  yahtzee.dice.forEach(function (die) {
    die.sideUp = 0;
    die.saved = false;
  })
  loadScoreCard();
  loadDice()
}
