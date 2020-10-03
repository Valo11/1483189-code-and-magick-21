'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристов', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS =  ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

//Случайный индекс массива
var elementIndex = Math.floor(Math.random() * WIZARD_NAMES.length)

var funcElement = function (name);

//console.log(WIZARD_NAMES[elementIndex]);

/*
* Я ДОЛЖЕН НАУЧИТЬСЯ СОЗДАВАТЬ 4 СЛУЧАЙНЫХ ОБЬЕКТА СО СЛУЧАЙНЫМИ ДАННЫМИ:
* 1) научиться создавать один обьект со случайными данными:
*    1.1 - НАУЧИТЬСЯ ПОЛУЧАТЬ СЛУЧАЙНЫЕ ДАННЫЕ:
*       1.1.1 - ПОЛУЧИТЬ СЛУЧАЙНЫЙ ЭЛЛЕМЕНТ МАССИВА(WIZARD_NAMES, WIZARD_LAST_NAMES, COAT_COLORS, EYES_COLORS) готово
*       1.1.2 - написать функцию которая возвращает случайный эллемент массива :а)что принимает функция б) что возвращает функция в)что делает функция
*
*1.2 - НАУЧИТЬСЯ ЭТИ СЛУЧАЦНЫЕ ДАННЫЕ ЗАПИХИВАТЬ В ОБЬЕКТ
*
* ЧТОБЫ ПОЛУЧИТЬ КОНКРЕТНЫЙ ЭЛЛЕМЕНТ МАССИВА НУЖНО ОБРАТИТЬСЯ К НЕМУ ПО ИНДЕКСУ
* ЧТОБЫ ПОЛУЧИТЬ СЛУЧАЙНЫЙ ЭЛЛЕМЕНТ МАССИВА НУЖНО ОБРАТИТЬСЯ К НЕМУ ПО СЛУЧАЙНОМУ ИНДЕКСУ
* */



/*
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');


var renderWizard = function(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;

  return wizardElement;
}


var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');*/
