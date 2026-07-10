const unsplash = (id, w = 640) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const SERVICES = [
  {
    id: 'bath-brush',
    amount: 35,
    color: 'c-butter',
    icon: '🛁',
    title: 'Bath & Brush',
    body: 'Warm oatmeal bath, double shampoo, fluff-dry and a thorough brush-out. Smells like victory (and coconut).',
    price: 'from $35',
  },
  {
    color: 'c-pink',
    id: 'full-groom',
    amount: 65,
    icon: '✂️',
    title: 'Full Groom',
    body: 'The works: bath, breed-standard or freestyle haircut, nails, ears and a bandana of their choosing.',
    price: 'from $65',
  },
  {
    color: 'c-teal',
    id: 'de-shed',
    amount: 45,
    icon: '🫧',
    title: 'De-shed Treatment',
    body: 'Undercoat rescue mission for the fluff-storms. Reduces shedding up to 80% — your couch says thanks.',
    price: 'from $45',
  },
  {
    color: 'c-lav',
    id: 'nail-spa',
    amount: 15,
    icon: '💅',
    title: 'Nail Spa',
    body: "Trim, grind and buff. Gentle handling for the dramatic ones — we've seen it all, no judgement.",
    price: 'from $15',
  },
  {
    color: 'c-sky',
    id: 'cat-grooming',
    amount: 55,
    icon: '🐈',
    title: 'Cat Grooming',
    body: 'Calm rooms, quiet dryers and a certified cat groomer. Lion cuts available for the bold.',
    price: 'from $55',
  },
  {
    color: 'c-tang',
    id: 'teeth-ears',
    amount: 12,
    icon: '🦷',
    title: 'Teeth & Ears',
    body: 'Fresh-breath brushing and gentle ear cleaning. Add on to any service for a head-to-tail refresh.',
    price: 'from $12',
  },
];

export const PETS = [
  {
    name: 'Biscuit',
    breed: 'Border collie mix',
    tag: 'Full groom + facial',
    tilt: '-2deg',
    ph: 'ph-1',
    emoji: '🐕',
    src: unsplash('photo-1543466835-00a7907e9de1'),
    alt: 'Smiling brown dog after a full groom',
  },
  {
    name: 'Juniper',
    breed: 'Domestic shorthair',
    tag: 'De-shed + nails',
    tilt: '1.5deg',
    ph: 'ph-2',
    emoji: '🐈',
    src: unsplash('photo-1514888286974-6c03e2ca1dba'),
    alt: 'Green-eyed cat looking freshly brushed',
  },
  {
    name: 'Peanut',
    breed: 'Bulldog puppy',
    tag: 'Puppy first groom',
    tilt: '-1.5deg',
    ph: 'ph-3',
    emoji: '🐶',
    src: unsplash('photo-1583511655857-d19b40a7a54e'),
    alt: 'Happy puppy mid-jump at the park after grooming',
  },
  {
    name: 'Cheeto',
    breed: 'Orange tabby',
    tag: 'Kitten spa day',
    tilt: '2deg',
    ph: 'ph-4',
    emoji: '🐱',
    src: unsplash('photo-1518791841217-8f162f1e1131'),
    alt: 'Orange tabby kitten with bright eyes',
  },
  {
    name: 'Bonnie & Clyde',
    breed: 'Sibling special',
    tag: 'Double bath & brush',
    tilt: '-2deg',
    ph: 'ph-2',
    emoji: '🐕',
    src: unsplash('photo-1548199973-03cce0bbc87b'),
    alt: 'Two dogs running together on grass',
  },
  {
    name: 'Mochi',
    breed: 'Weimaraner pup',
    tag: 'Bath & brush',
    tilt: '1deg',
    ph: 'ph-1',
    emoji: '🐶',
    src: unsplash('photo-1507146426996-ef05306b995a'),
    alt: 'Grey puppy resting after a grooming session',
  },
  {
    name: 'Clover',
    breed: 'Holland lop',
    tag: 'Gentle brush-out',
    tilt: '-1deg',
    ph: 'ph-3',
    emoji: '🐰',
    src: unsplash('photo-1585110396000-c9ffd4e4b308'),
    alt: 'Fluffy rabbit sitting calmly',
  },
  {
    name: 'Pickle',
    breed: 'Syrian hamster',
    tag: 'Tiny tidy-up',
    tilt: '2deg',
    ph: 'ph-4',
    emoji: '🐹',
    src: unsplash('photo-1425082661705-1834bfd09dca'),
    alt: 'Small hamster sitting upright',
  },
  {
    name: 'Sunny',
    breed: 'Golden retriever',
    tag: 'Blowout + bandana',
    tilt: '-1.5deg',
    ph: 'ph-2',
    emoji: '🐕',
    src: unsplash('photo-1537151625747-768eb6cf92b2'),
    alt: 'Golden puppy wrapped up cozy after a blow-dry',
  },
];

export const STEPS = [
  {
    n: '01',
    title: 'Sniff & settle',
    body: 'Meet the groomer, explore the room, earn a snack. No tables until tails are relaxed.',
  },
  {
    n: '02',
    title: 'Suds & scrub',
    body: "Warm water, pet-safe shampoo matched to their coat, and a massage they'll pretend to hate.",
  },
  {
    n: '03',
    title: 'Snip & style',
    body: 'Breed-standard cut or something more avant-garde — you choose, they model.',
  },
  {
    n: '04',
    title: 'Strut & snack',
    body: 'Photo for the wall, treat for the road, and a very smug walk back to the car.',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      '"I went in smelling like a swamp and came out smelling like a birthday cake. I am now the most powerful dog at the park."',
    name: 'Biscuit, 4',
    detail: 'Border collie mix · regular since 2021',
    avatar: unsplash('photo-1543466835-00a7907e9de1', 120),
  },
  {
    quote:
      '"I permitted the bath. I permitted the brush. The lion cut was my idea and I look magnificent. Five stars, do not touch my tail."',
    name: 'Juniper, 6',
    detail: 'Domestic shorthair · tolerates Tuesdays',
    avatar: unsplash('photo-1514888286974-6c03e2ca1dba', 120),
  },
  {
    quote:
      '"They gave me a bandana and called me a good boy eleven times. I counted. This is the best place on Earth."',
    name: 'Bruno, 3',
    detail: 'Pug · eleven-time good boy',
    avatar: unsplash('photo-1517849845537-4d257902454a', 120),
  },
];

export const HERO_STICKERS = [
  {
    cls: 'sticker-1',
    emoji: '🐕',
    src: unsplash('photo-1552053831-71594a27632d', 700),
    alt: 'Golden retriever puppy with a happy expression after grooming',
    caption: 'Waffles · full groom',
  },
  {
    cls: 'sticker-2',
    emoji: '🐈',
    src: unsplash('photo-1533738363-b7f9aef128ce', 600),
    alt: 'Cat against a bright yellow background looking freshly brushed',
    caption: 'Nacho · de-shed',
  },
  {
    cls: 'sticker-3',
    emoji: '🐶',
    src: unsplash('photo-1517849845537-4d257902454a', 600),
    alt: 'Pug tilting its head after a bath and brush',
    caption: 'Bruno · bath & brush',
  },
];

export const MARQUEE_ITEMS = [
  '🛁 BUBBLE BATHS',
  '✂️ BREED TRIMS',
  '💅 NAIL SPAS',
  '🫧 BLUEBERRY FACIALS',
  '🐈 CAT-FRIENDLY',
  '🦴 TREAT ON EXIT',
];
