'use strict';

const MOCKS_COUNT = 8;

const LOCATION_X_MIN = 0;
const LOCATION_X_MAX = 750;

const LOCATION_Y_MIN = 130;
const LOCATION_Y_MAX = 630;

const MAX_PRICE = 1000;
const MAX_GUESTS = 10;

const PIN_TEMPLATE = document.querySelector('#pin').content;
const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const RAND = getRandom(0, types.length - 1);
const TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['hotel1.jpg', 'hotel2.jpg', 'hotel3.jpg'];


//1
function getMocks() {
  const result = [];
  for (let i = 0; i < MOCKS_COUNT; i++) {
      result.push(getMock(i));
  }
  return result;
}

function getMock(index) {
  const location = getLocation();
  return {
      author: {
          avatar: `img/avatars/user/0${index + 1}.png`
      },
      offer: {
          title: "title",
          address: `${location.x}, ${location.y}`,
          price: getRandom(0, MAX_PRICE),
          type: getRandType(),
          guests: getRandom(0, MAX_GUESTS),
          checkin: getRandCheckinTime(),
          checkout: getRandCheckinTime(),
          features: getFeatures(),
          description: "description",
          photos: getPhotos()},
      },
      location
  }


function getLocation() {
  return {
      x: getRandom(LOCATION_X_MIN, LOCATION_X_MAX),
      y: getRandom(LOCATION_Y_MIN, LOCATION_Y_MAX)
  }
}

function getRandom(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function getRandType() {
  return TYPES[RAND];
}

function getRandCheckinTime() {
  return TIMES[RAND];
}

function getFeatures() {
  const result = [];
  for (let i = 0; i < features.length; i++) {
      if (Math.random() > 0.5) {
          result.push(features[i])
      }
  }
  return result;
}

function getPhotos() {
  const result = [];
  for (let i = 0; i < photos.length; i++) {
      if (Math.random() > 0.5) {
          result.push(photos[i])
      }
  }
  return result;
}


//2
function imitateActiveMode () {
  var mapMode = document.querySelector('.map__pin');
  mapMode.classList.remove('map--fadded');
  }

//3
function createPin (data) {
  let pinElement = PIN_TEMPLATE.cloneNode(true);
  let pinImg = pinElement.querySelector('img');
  pinImg.src = data.author.avatar;
  pinImg.alt = data.offer.title;
  pinElement.style.left = data.location.x + 'px';
  pinElement.style.top = data.location.y + 'px';
  return pinElement;
};

//4
function renderPins(data, number) {
  let fragment = document.createDocumentFragment();
  for (var i = 0; i < pins.length; i++){
    document.querySelector('.map__pins').appendChild(createPin());
  }
  return fragment;
}


