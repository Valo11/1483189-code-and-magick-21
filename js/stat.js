'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var BAR_HEIGHT = 40;
var MAX_HEIGHT = 150;
var GAP_POST = 140;
var GAP_BETWEEN_POST = 100;
var GAP_NAME_X = 4;
var GAP_NAME_Y = 25;
var GAP_BUTTON_POST = 250;
var GAP_BUTTON_TEXT = 230;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 130, 25);
  ctx.fillText('Список результатов:', 130, 45);

  var maxTime = getMaxElement(times);
  var onePoint = MAX_HEIGHT / maxTime;

  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(44,' + (130 + i * 30) + ', 201, 1)';
    }
    var sumMax = times[i] * onePoint;

    ctx.fillRect(GAP_POST + i * GAP_BETWEEN_POST, GAP_BUTTON_POST, BAR_HEIGHT, -sumMax);

    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + (GAP * GAP_NAME_X) + (FONT_GAP * GAP_NAME_X + BAR_HEIGHT) * i, CLOUD_Y + (GAP * GAP_NAME_Y));
    ctx.fillText(Math.round(times[i]), GAP_POST + i * GAP_BETWEEN_POST, GAP_BUTTON_TEXT - sumMax);
  }
};
