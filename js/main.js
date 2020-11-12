'use strict';

const MOCKS_COUNT = 8;
const RESULT = [];

const LOCATION = getLocation();
const LOCATION_X_MIN = 0;
const LOCATION_X_MAX = 750;

const LOCATION_Y_MIN = 130;
const LOCATION_Y_MAX = 630;

const MAX_PRICE = 1000;
const MAX_GUESTS = 10;
const RAND = min + Math.random() * (max + 1 - min);
const RAND_TYPE = getRandom(0, TYPES.length - 1);

const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['hotel1.jpg', 'hotel2.jpg', 'hotel3.jpg'];

const PIN_TEMPLATE = document.querySelector('#pin').content;

//1
function getMocks() {
  for (let i = 0; i < MOCKS_COUNT; i++) {
      RESULT.push(getMock(i));
  }
  return RESULT;
}

function getMock(index) {
  return {
      author: {
          avatar: `img/avatars/user/0${index + 1}.png`
      },
      offer: {
          title: "title",
          address: `${LOCATION.x}, ${LOCATION.y}`,
          price: getRandom(0, MAX_PRICE),
          type: getRandType(),
          guests: getRandom(0, MAX_GUESTS),
          checkin: getRandCheckinTime(),
          checkout: getRandCheckinTime(),
          features: getFeatures(),
          description: "description",
          photos: getPhotos()},
      },
      LOCATION
  }


function getLocation() {
  return {
      x: getRandom(LOCATION_X_MIN, LOCATION_X_MAX),
      y: getRandom(LOCATION_Y_MIN, LOCATION_Y_MAX)
  }
}

function getRandom(min, max) {
  return Math.floor(RAND);
}

function getRandType() {
  return TYPES[RAND_TYPE];
}

function getRandCheckinTime() {
  return TIMES[RAND_TYPE];
}

function getFeatures() {
  for (let i = 0; i < FEATURES.length; i++) {
      if (Math.random() > 0.5) {
          RESULT.push(FEATURES[i])
      }
  }
  return RESULT;
}

function getPhotos() {
  for (let i = 0; i < PHOTOS.length; i++) {
      if (Math.random() > 0.5) {
          RESULT.push(PHOTOS[i])
      }
  }
  return RESULT;
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
  console.log(pinImg);
  pinElement.style.left = data.LOCATION.x + 'px';
  pinElement.style.top = data.LOCATION.y + 'px';
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
