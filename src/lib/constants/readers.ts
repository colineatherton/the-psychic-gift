import { ReaderConfig, Status } from "@/lib/types/readers";
import { Reader } from "@/components/ReaderGrid/ReaderGrid";

export const READER_CONFIG_MAP: Record<string, ReaderConfig> = {
  ["adele-3622"]: {
    name: "Adele",
    pin: 3622,
    slug: "adele-psychic",
    description:
      "Adele's intuitive abilities started from a young age; she now has over 30 years of psychic experience. In a reading she combines her empath and clairsentient abilities, alongside healing arts and spiritual counselling. Adele understands the complex nature of both family and romantic relationships. Let her tune into your energies and aura.",
    specialties: {
      abilities: [
        "spiritual counselling",
        "psychic",
        "clairsentience",
        "empathy",
      ],
      tools: [],
      topics: ["relationships", "emotional healing"],
      themes: [],
    },
    ctaText: "Connect with Adele",
    imageUrl: "img/readers/original/by_pin/3622.png",
  },
  ["aelissa-4444"]: {
    name: "Aelissa",
    pin: 4444,
    slug: "aelissa-psychic",
    description:
      "Aelissa's ancestry is Celtic and she is a clairaudient, clairsentient far seer. Her tool of choice is Tarot cards; she finds them particularly useful in gaining a quick connection with clients and in providing specific timings. Aelissa has strong visualisation abilities and will use these with her natural empathy to give you a kind-hearted reading.",
    specialties: {
      abilities: ["clairsentience", "clairaudience", "empathy"],
      tools: ["tarot"],
      topics: [],
      themes: ["gentle", "precise"],
    },
    ctaText: "Connect with Aelissa",
    imageUrl: "img/readers/original/by_pin/4444.png",
  },
  ["alice-6543"]: {
    name: "Alice",
    pin: 6543,
    slug: "alice-psychic",
    description:
      "Alice feels her purpose in life is to guide others on their spiritual journey; her ability to provide insight information and clarity in times of crisis will let you find your new direction. Alice has been connected with Spirit from an early age; she has worked globally and continues to learn new healing skills, such as hypnotherapy and past life regression.",
    specialties: {
      abilities: ["healing"],
      tools: [],
      topics: ["emotional healing"],
      themes: ["direct"],
    },
    ctaText: "Connect with Alice",
    imageUrl: "img/readers/original/by_pin/6543.png",
  },
  ["andy-3399"]: {
    name: "Andy",
    pin: 3399,
    slug: "andy-psychic",
    description:
      "Andy, from North Wales, is a calm, empathetic psychic with strong Celtic roots. He uses clairvoyance, Angel Cards, crystals, and telepathy to guide others. Deeply spiritual, he supports people in crisis, including the homeless and housebound. His family shares psychic gifts, and he values simplicity, nature, and compassionate connection.",
    specialties: {
      abilities: ["clairvoyance", "psychic", "empathy"],
      tools: ["crystals", "angel cards"],
      topics: [],
      themes: ["supportive", "compassionate"],
    },
    ctaText: "Connect with Andy",
    imageUrl: "img/readers/original/by_pin/3399.png",
  },
  ["angel-1441"]: {
    name: "Angel",
    pin: 1441,
    slug: "angel-psychic",
    description:
      "Angel has a colourful aura that radiates healing energy; she uses her unique gift of pure insight to lead clients to their rightful soul path. She is a very approachable reader, who has the support of archangels and ascended masters. If you feel your life is off kilter in some way then Angel will provide intuitive advice to guide you.",
    specialties: {
      abilities: ["healing"],
      tools: [],
      topics: ["emotional healing", "life path"],
      themes: ["supportive"],
    },
    ctaText: "Connect with Angel",
    imageUrl: "img/readers/original/by_pin/1441.png",
  },
  ["bryony-2727"]: {
    name: "Bryony",
    pin: 2727,
    slug: "bryony-psychic",
    description:
      "Bryony is an insightful spiritual reader with a natural born gift, she specialises in supporting clients through major life changes, relationship difficulties and business/career problems. You will find her to be an empathetic and honest reader, with a great sense of humour – perfect for guiding you onto the right path.",
    specialties: {
      abilities: ["empathy"],
      tools: [],
      topics: ["relationships", "career"],
      themes: ["supportive", "direct"],
    },
    ctaText: "Connect with Bryony",
    imageUrl: "img/readers/original/by_pin/2727.png",
  },
  ["daisy-6006"]: {
    name: "Daisy",
    pin: 6006,
    slug: "daisy-psychic",
    description:
      "Daisy is an intuitive psychic and spiritual medium with strong Celtic and Romany roots. Aware of her gifts from early childhood, she works both psychically and with spirit to offer clear, insightful guidance. Daisy uses tools such as tarot and oracle cards, crystal ball, tea leaf readings and psychometry. Daisy is polite, honest and focused on clarity.",
    specialties: {
      abilities: ["psychic", "medium", "intuitive"],
      tools: ["tarot", "oracle cards", "crystal ball", "tea leaves", "psychometry"],
      topics: ["guidance"],
      themes: ["honest", "direct"],
    },
    ctaText: "Connect with Daisy",
    imageUrl: "img/readers/original/by_pin/6006.png",
  },
  ["ellie-1180"]: {
    name: "Ellie",
    pin: 1180,
    slug: "ellie-psychic",
    description:
      "Ellie has a tremendous connection to nature and the animal kingdom and she draws strength from them, as she reads for you. She uses her inner eye to connect to your soul and she can tune into your energy through your aura. Ellie can tell you your destiny and pass messages from loved ones, angels and elders, so you can know you are making the right choices.",
    specialties: {
      abilities: ["clairvoyance", "aura reading"],
      tools: [],
      topics: ["destiny", "spirit messages"],
      themes: ["nature-connected", "spiritual"],
    },
    ctaText: "Connect with Ellie",
    imageUrl: "img/readers/original/by_pin/1180.png",
  },
  ["fran-1133"]: {
    name: "Fran",
    pin: 1133,
    slug: "fran-psychic",
    description:
      "Fran is a psychic medium who is highly experienced with direct spiritual communication during a reading. She has a long involvement with development circles and platform readings. She offers inspiration and enlightenment, to those who are bereaved or feeling lost. Fran will leave you feeling reassured, focused and uplifted.",
    specialties: {
      abilities: ["psychic", "mediumship"],
      tools: [],
      topics: [],
      themes: ["direct"],
    },
    ctaText: "Connect with Fran",
    imageUrl: "img/readers/original/by_pin/1133.png",
  },
  ["jasmine-5115"]: {
    name: "Jasmine",
    pin: 5115,
    slug: "jasmine-psychic",
    description:
      "Jasmine is a compassionate and direct reader, who will answer your questions no matter what the topic. She is both psychic and a medium, and is authoritative in the use of crystal ball, numerology and Runes. She has known about her gift from a very young age, and she has been on a life-long journey of spiritual learning, that she hopes to pass on to you.",
    specialties: {
      abilities: ["psychic", "mediumship"],
      tools: ["numerology", "crystals", "runes"],
      topics: [],
      themes: ["compassionate", "direct"],
    },
    ctaText: "Connect with Jasmine",
    imageUrl: "img/readers/original/by_pin/5115.png",
  },
  ["joanna-4567"]: {
    name: "Joanna",
    pin: 4567,
    slug: "joanna-psychic",
    description:
      "Joanna has a very strong connection to Spirit, and is well studied in the esoteric. She is not an easy reader to shock – so feel free to speak candidly about what is troubling you. Joanna will use her healing energies and compassion to get to the heart of the matter. Together you will find the answers you need, with specific guidance that cuts the confusion.",
    specialties: {
      abilities: ["guidance", "healing"],
      tools: [],
      topics: ["emotional healing"],
      themes: ["compassionate", "direct", "precise"],
    },
    ctaText: "Connect with Joanna",
    imageUrl: "img/readers/original/by_pin/4567.png",
  },
  ["john-5152"]: {
    name: "John",
    pin: 5152,
    slug: "john-psychic",
    description:
      "Whilst John was aware of his gifts from a very young age, it took a near death experience to convince him he needed to utilise them to support and guide others. He really is a spiritual counsellor, and deals so eloquently with those who are bereaved and grieving. He is a candid reader, but delivers his messages with love, so that you can gain a sense of closure.",
    specialties: {
      abilities: ["mediumship", "spiritual counselling"],
      tools: [],
      topics: ["bereavement", "closure"],
      themes: ["compassionate", "direct"],
    },
    ctaText: "Connect with John",
    imageUrl: "img/readers/original/by_pin/5152.png",
  },
  ["julien-4334"]: {
    name: "Julien",
    pin: 4334,
    slug: "julien-psychic",
    description:
      "Julien is an experienced Tarot reader and psychic medium with a loyal and varied client base. His investigative style blends steady clairvoyance with guidance from loved ones in spirit. Using Tarot in every reading, Julien offers clear insight, emotional support and practical options, so you can move forward with confidence and renewed emotional clarity.",
    specialties: {
      abilities: ["clairvoyance", "mediumship", "psychic"],
      tools: ["tarot"],
      topics: ["guidance", "emotional healing"],
      themes: ["investigative", "supportive"],
    },
    ctaText: "Connect with Julien",
    imageUrl: "img/readers/original/by_pin/4334.png",
  },
  ["karen-5791"]: {
    name: "Karen",
    pin: 5791,
    slug: "karen-psychic",
    description:
      "Karen knew she was gifted from a young age and she has a spirit guide that has been with her for many years. She quickly connects through clairvoyance to give insight and guidance on any difficult decisions you are facing. Karen has great life experience and provides a calming influence and comforting messages from Spirit, when you need support.",
    specialties: {
      abilities: ["clairvoyance", "guidance"],
      tools: [],
      topics: ["decision-making"],
      themes: ["supportive"],
    },
    ctaText: "Connect with Karen",
    imageUrl: "img/readers/original/by_pin/5791.png",
  },
  ["mariah-1881"]: {
    name: "Mariah",
    pin: 1881,
    slug: "mariah-psychic",
    description:
      "Mariah has very strong premonitions and is able to sense energies and interpret real feelings in a person's soul. Mariah has spent many years perfecting her craft and is at home as a platform reader or doing telephone work one to one. She can support you through difficult times, assisting with healing, questions you have and past life issues.",
    specialties: {
      abilities: ["healing"],
      tools: [],
      topics: ["emotional healing"],
      themes: ["supportive"],
    },
    ctaText: "Connect with Mariah",
    imageUrl: "img/readers/original/by_pin/1881.png",
  },
  ["mary-5055"]: {
    name: "Mary",
    pin: 5055,
    slug: "mary-psychic",
    description:
      "Mary is a natural psychic who is highly intuitive, with a speciality in energy readings, which often assist with emotional blocks. Mary is a direct reader, with a certain Irish charm, she will provide you with information so you feel empowered to make the right choices for you. Her readings provide comfort as well as solutions.",
    specialties: {
      abilities: ["psychic"],
      tools: [],
      topics: ["emotional blocks"],
      themes: ["direct", "empowering"],
    },
    ctaText: "Connect with Mary",
    imageUrl: "img/readers/original/by_pin/5055.png",
  },
  ["mavis-1010"]: {
    name: "Mavis",
    pin: 1010,
    slug: "mavis-psychic",
    description:
      "Mavis is a professional and honest Medium Clairvoyant; through her connection with the spirit world she guides her clients in a most positive way. Mavis believes that we make our own destiny and her readings are very detailed to allow her clients to make the best decisions and choices in all areas of their lives as they move forward.",
    specialties: {
      abilities: ["clairvoyance", "mediumship"],
      tools: [],
      topics: ["decision-making"],
      themes: ["direct", "precise", "uplifting"],
    },
    ctaText: "Connect with Mavis",
    imageUrl: "img/readers/original/by_pin/1010.png",
  },
  ["pauline-3798"]: {
    name: "Pauline",
    pin: 3798,
    slug: "pauline-psychic",
    description:
      "Pauline inherited her gifts from both sides of her family. She's been working as a telephone reader for over twenty years. Her speciality is relationship readings; she also likes to bring in Tarot and Angel cards, especially when she needs to tune into her guides. Pauline finds that Pendulum work can assist when clients require a yes or no answer to a question.",
    specialties: {
      abilities: [],
      tools: ["tarot", "angel cards", "pendulum"],
      topics: ["relationships"],
      themes: [],
    },
    ctaText: "Connect with Pauline",
    imageUrl: "img/readers/original/by_pin/3798.png",
  },
  ["robbie-3443"]: {
    name: "Robbie",
    pin: 3443,
    slug: "robbie-psychic",
    description:
      "Robbie is a very warm and eloquent medium and psychic; he believes in spiritual transformation and positive thinking. If your life is off balance then he is the right reader to make you feel healed and back on your correct pathway. Robbie believes in harnessing the law of attraction - everything is possible when you believe.",
    specialties: {
      abilities: ["psychic", "mediumship"],
      tools: [],
      topics: [],
      themes: ["uplifting"],
    },
    ctaText: "Connect with Robbie",
    imageUrl: "img/readers/original/by_pin/3443.png",
  },
  ["ruth-2022"]: {
    name: "Ruth",
    pin: 2022,
    slug: "ruth-psychic",
    description:
      "Ruth came relatively late to her spiritual path after realising her life just wasn't the way she wanted it to be. Now she enjoys sharing her gift to enable other people to experience the same change in direction for a happier and more fulfilling life. Ruth will guide and teach you self-empowerment so you can affect change for yourself.",
    specialties: {
      abilities: ["spiritual guidance"],
      tools: [],
      topics: ["self-empowerment", "life path"],
      themes: ["direct", "transformational"],
    },
    ctaText: "Connect with Ruth",
    imageUrl: "img/readers/original/by_pin/2022.png",
  },
  ["sandra-2662"]: {
    name: "Sandra",
    pin: 2662,
    slug: "sandra-psychic",
    description:
      "Sandra is a clairvoyant medium; she believes that everyone has a type of life plan mapped out for them but that you do not necessarily need to follow it. It is when you veer off the given path that perhaps guidance and advice is needed most. Sandra can step in at these times to offer you messages and clarity from Spirit, so you can be sure of your next steps.",
    specialties: {
      abilities: ["clairvoyance", "guidance", "mediumship"],
      tools: [],
      topics: [],
      themes: [],
    },
    ctaText: "Connect with Sandra",
    imageUrl: "img/readers/original/by_pin/2662.png",
  },
  ["sarah-9888"]: {
    name: "Sarah",
    pin: 9888,
    slug: "sarah-psychic",
    description:
      "Sarah has over twenty years' experience, her readings combine a unique set of interests and gifts from Tarot, the Luna cycle, Zodiac signs as well as Wiccan and Shamanic practices and beliefs. Sarah's readings forge a deep connection between you the client, the natural world and the spirit realms, to get you the answers you need.",
    specialties: {
      abilities: ["spiritual connection"],
      tools: ["tarot", "zodiac", "wicca", "shamanic practice"],
      topics: ["natural world", "spirit realms"],
      themes: ["earth-based", "intuitive"],
    },
    ctaText: "Connect with Sarah",
    imageUrl: "img/readers/original/by_pin/9888.png",
  },
  ["toby-2333"]: {
    name: "Toby",
    pin: 2333,
    slug: "toby-psychic",
    description:
      "Toby, a natural clairvoyant of Celtic descent, utilises various tools including Tarot to explore matters. He aims to present options and potential outcomes during readings. Coming from a family with psychic abilities, Toby shares wisdom generously and practices white witchcraft. He provides uplifting readings with empathy and practical solutions.",
    specialties: {
      abilities: ["clairvoyance", "psychic", "empathy"],
      tools: ["tarot"],
      topics: [],
      themes: ["uplifting"],
    },
    ctaText: "Connect with Toby",
    imageUrl: "img/readers/original/by_pin/2333.png",
  },
};

export const READER_LIST = Object.values(READER_CONFIG_MAP);

export const READER_CARDS: Reader[] = READER_LIST.map((reader) => ({
  name: reader.name,
  image: reader.imageUrl,
  pin: reader.pin.toString(),
  slug: reader.slug,
  status: Status.online, // Default status, can be updated dynamically
  skills: [
    ...reader.specialties.abilities,
    ...reader.specialties.tools,
    ...reader.specialties.topics,
    ...reader.specialties.themes,
  ],
  callOptions: [
    {
      label: "Call Now",
      number: `+1234567890`, // Placeholder number, should be replaced with actual logic
    },
  ],
}));

export const GET_READER_CARD = (key: string): Reader => {
  const reader = READER_CONFIG_MAP[key];

  return {
    name: reader.name,
    image: reader.imageUrl,
    pin: reader.pin.toString(),
    slug: reader.slug,
    status: Status.online, // Default status, can be updated dynamically
    skills: [
      ...reader.specialties.abilities,
      ...reader.specialties.tools,
      ...reader.specialties.topics,
      ...reader.specialties.themes,
    ],
    callOptions: [
      {
        label: "Call Now",
        number: `+1234567890`, // Placeholder number, should be replaced with actual logic
      },
    ],
  };
};

export const getSlugByPin = (pin: number): string | undefined =>
  Object.values(READER_CONFIG_MAP).find((r) => r.pin === pin)?.slug;

export const getReaderKeyBySlug = (slug: string): string | undefined =>
  Object.keys(READER_CONFIG_MAP).find(
    (key) => READER_CONFIG_MAP[key].slug === slug,
  );

export const READER_STATUS_OPTIONS = [
  { value: "online", label: "Online" },
  { value: "busy", label: "Busy" },
  { value: "offline", label: "Offline" },
];

const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const ALL_SKILLS = () => {
  const skillSet = new Set<string>();
  READER_CARDS.forEach((r) => r.skills.forEach((s) => skillSet.add(s)));
  return Array.from(skillSet)
    .map((skill) => ({ label: capitalize(skill) }))
    .sort();
};

export const ALL_ABILITIES = () => {
  const skillSet = new Set<string>();
  READER_LIST.forEach((r) =>
    r.specialties.abilities.forEach((s) => skillSet.add(s)),
  );
  return Array.from(skillSet)
    .map((skill) => ({ label: capitalize(skill) }))
    .sort();
};

export const ALL_TOOLS = () => {
  const skillSet = new Set<string>();
  READER_LIST.forEach((r) =>
    r.specialties.tools.forEach((s) => skillSet.add(s)),
  );
  return Array.from(skillSet)
    .map((skill) => ({ label: capitalize(skill) }))
    .sort();
};

export const ALL_TOPICS = () => {
  const skillSet = new Set<string>();
  READER_LIST.forEach((r) =>
    [...r.specialties.topics, ...r.specialties.themes].forEach((s) =>
      skillSet.add(s),
    ),
  );
  return Array.from(skillSet)
    .map((skill) => ({ label: capitalize(skill) }))
    .sort();
};

export const ALL_STATUSES = () => {
  return [
    { key: Status.online.toString(), label: "Ready to talk" },
    { key: Status.busy.toString(), label: "In a reading" },
    { key: Status.offline.toString(), label: "Away right now" },
  ];
};
