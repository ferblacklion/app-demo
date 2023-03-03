import { CoffeeItem, Quality } from '../pages/best-match/types';
import { Questions } from '../pages/question/types';
import imageEnthusiast from '/src/assets/enthusiast-desktop.svg';
import imageRefining from '/src/assets/refining-my-palate-desktop.svg';
import imagePrettyMuch from '/src/assets/pretty-much-a-barista-desktop.svg';
import imageNotSure from '/src/assets/im-not-sure-desktop.svg';
import coffeeMaker from '/src/assets/coffee-maker-desktop.svg';
import frenchPress from '/src/assets/french-press-desktop.svg';
import pourOver from '/src/assets/pour-over-desktop.svg';
import aeroPress from '/src/assets/aeropress-desktop.svg';
import espresso from '/src/assets/espresso-desktop.svg';
import pods from '/src/assets/pods-desktop.svg';
import mokaPot from '/src/assets/moka-pot-desktop.svg';
import TastingNotes from '/src/assets/tasting-notes.svg';
import Roast from '/src/assets/roast.svg';
import Sipping from '/src/assets/sipping.svg';
import Brew from '/src/assets/brew.svg';

export const coffeesData: CoffeeItem[] = [
  {
    img: '/product.jpg',
    title: 'early bird espresso',
    subtitle: 'dried plum · orange · hazelnut',
    price: '$24.25',
  },
  {
    img: '/product.jpg',
    title: 'early bird espresso.',
    subtitle: 'molasses · dark chocolate · fig',
    price: '$16.50',
  },
];
export const coffeesSetTwoData: CoffeeItem[] = [
  {
    img: '/coffee-1.jpg',
    title: 'classic mug',
    price: '$24.25',
  },
  {
    img: '/coffee-1.jpg',
    title: 'coffee canister',
    price: '$29.95',
  },
];

export const questions: Questions[] = [
  {
    question: 'Where are you on your coffee journey?',
    answers: [
      {
        title: 'I’m an <br /> enthusiast',
        text: 'I know a bit about brewing and roast levels',
        result: "Coffee education is our passion. You're in the right place.",
        bgColor: '#da8464',
        img: imageEnthusiast,
      },
      {
        title: ' I’m refining <br /> my palate',
        text: 'I can recognize different coffee types/flavors',
        result: 'We’re here to help you improve your coffee expertise.',
        bgColor: '#EEB426',
        img: imageRefining,
      },
      {
        title: 'I’m pretty <br /> much a barista',
        text: 'I work in the industry... or probably should',
        result: 'We’ll find coffee that’s on your level.',
        bgColor: '#9CAF96',
        img: imagePrettyMuch,
      },
      {
        title: 'I’m not sure',
        text: 'I know that I just like coffee',
        bgColor: '#D4A1A6',
        result: 'You’re in good company. We love coffee too.',
        img: imageNotSure,
      },
    ],
  },
  {
    question: 'How do you brew at home?',
    answers: [
      {
        title: 'Coffee Maker',
        text: '',
        bgColor: '#EEB426',
        result: '',
        img: coffeeMaker,
      },
      {
        title: 'French Press',
        text: '',
        bgColor: '#9CAF96',
        result: '',
        img: frenchPress,
      },
      {
        title: 'Pour Over',
        text: '',
        bgColor: '#D4A1A6',
        result: '',
        img: pourOver,
      },
      {
        title: 'AeroPress',
        text: '',
        bgColor: '#DA8464',
        result: '',
        img: aeroPress,
      },
      {
        title: 'Espresso',
        text: '',
        bgColor: '#A9C9E1',
        result: '',
        img: espresso,
      },
      {
        title: 'Pods',
        text: '',
        bgColor: '#C47D30',
        result: '',
        img: pods,
      },
      {
        title: 'Moka Pot',
        text: '',
        bgColor: '#D2C6C3',
        result: '',
        img: mokaPot,
      },
    ],
  },
];

export const qualities: Quality[] = [
  {
    title: 'WHY YOU’LL LOVE IT',
    text: 'If you’ve ever taken a bite from a ripe red apple, you’ll know the way this coffee tastes. ',
  },
  {
    title: 'Tasting Notes',
    text: 'Red Apple, Lemongrass, Malt Chocolate',
    img: TastingNotes,
  },
  {
    title: 'roast level',
    text: 'Medium',
    img: Roast,
  },
  {
    title: 'sipping style',
    text: 'Great with milk/cream',
    img: Sipping,
  },
  {
    title: 'brew method',
    text: 'Brews a delicious cup with a pour over',
    img: Brew,
  },
];
