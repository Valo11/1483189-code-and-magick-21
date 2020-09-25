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
var GAP_BUTTOM_POST = 250;
var GAP_BUTTOM_TEXT = 230;


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

function getRedColor() {
  return 'rgba(240, 52, 52, 1)';
}

function getRandanColor(i) {
  return 'rgba(44,' + (130 + i * 30) + ', 201, 1)';
}

function colorRectangle(ctx, height, width, axisX, axisY, color) {
  ctx.fillStyle = color;
  ctx.fillRect(height, width, axisX, axisY);
}

function drawingTextByCoordinates(text, axisX, axisY, ctx, color) {
  ctx.fillStyle = color;
  ctx.fillText(text, axisX, axisY);
}

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
      var color = getRedColor();
    } else {
      color = getRandanColor(i);
    }
    var sumMax = times[i] * onePoint;

    colorRectangle(ctx, GAP_POST + i * GAP_BETWEEN_POST, GAP_BUTTOM_POST, BAR_HEIGHT, -sumMax, color);
    drawingTextByCoordinates(players[i], CLOUD_X + (GAP * GAP_NAME_X) + (FONT_GAP * GAP_NAME_X + BAR_HEIGHT) * i, CLOUD_Y + (GAP * GAP_NAME_Y), ctx, '#000');
    drawingTextByCoordinates(Math.round(times[i]), GAP_POST + i * GAP_BETWEEN_POST, GAP_BUTTOM_TEXT - sumMax, ctx, '#000');
  }
};
