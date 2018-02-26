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
  yahtzee.scoreCard.forEach(function(scoreCardRow) {
    document.getElementById('turnsLeft').innerHTML = yahtzee.turnsRemaining + ' Left';
    if (scoreCardRow.top) {
      buildScoreCardRow(scoreCardRow.title, scoreCardRow.score);
    }
  });
  buildScoreCardRow("Top Subtotal:", " ");
  buildScoreCardRow("Top Bonus:", " ");
  yahtzee.scoreCard.forEach(function(scoreCardRow) {
    if (!scoreCardRow.top) {
      buildScoreCardRow(scoreCardRow.title, scoreCardRow.score);
    }
  });
  buildScoreCardRow("Total Score:", " ");
}

function buildScoreCardRow(title, score) {
  tr = document.createElement('tr');
  td1 = document.createElement('td');
  td1.innerHTML = title;
  tr.appendChild(td1);
  td2 = document.createElement('td');
  td2.innerHTML = score;
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
  if (rerolled)
    yahtzee.throwsRemainingInTurn--;
  loadDice();
  }
}

function saveDie(dieIndex) {
  if (yahtzee.throwsRemainingInTurn != 3) {
  yahtzee.dice[dieIndex].saved = !yahtzee.dice[dieIndex].saved;
  loadDice();
  }
}
