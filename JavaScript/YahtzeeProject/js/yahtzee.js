function setup() {
  playerSetup();
  loadScoreCard();
  loadDice();
}
// UI
function playerSetup() {
  document.getElementById('playerName').innerHTML = yahtzee.player.name;
  document.getElementById('playerAvatar').src = yahtzee.player.avatar;
}

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

function loadScoreCard() {
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
  tr.appendChild(td2);
  if (clickable) {
    td2.setAttribute('data-scorecardIndex', scorecardIndex);
    td2.onclick = saveScore;
  }
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
  if (rerolled)
    yahtzee.throwsRemainingInTurn--;
  loadDice();
  }
}

function saveScore() {
  index = this.getAttribute('data-scorecardIndex');
  this.className = "scored";
  alert(index);
}

function saveDie(dieIndex) {
  if (yahtzee.throwsRemainingInTurn != 3) {
  yahtzee.dice[dieIndex].saved = !yahtzee.dice[dieIndex].saved;
  loadDice();
  }
}
