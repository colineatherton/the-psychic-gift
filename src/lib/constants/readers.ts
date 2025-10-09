import { ReaderConfig } from "@/lib/types/readers";
import { Reader } from "@/components/ReaderGrid/ReaderGrid";

export const READER_CONFIG_MAP: Record<string, ReaderConfig> = {
  ["adele"]: {
    name: "Adele",
    pin: 3622,
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
    imageUrl: "img/readers/by_pin/3622.png",
  },
  ["aelissa"]: {
    name: "Aelissa",
    pin: 4444,
    description:
      "Aelissa's ancestry is Celtic and she is a clairaudient, clairsentient far seer. Her tool of choice is Tarot cards; she finds them particularly useful in gaining a quick connection with clients and in providing specific timings. Aelissa has strong visualisation abilities and will use these with her natural empathy to give you a kind-hearted reading.",
    specialties: {
      abilities: ["clairsentience", "clairaudience", "empathy"],
      tools: ["tarot"],
      topics: [],
      themes: ["gentle", "precise"],
    },
    ctaText: "Connect with Aelissa",
    imageUrl: "img/readers/by_pin/4444.png",
  },
  ["alice"]: {
    name: "Alice",
    pin: 6543,
    description:
      "Alice feels her purpose in life is to guide others on their spiritual journey; her ability to provide insight information and clarity in times of crisis will let you find your new direction. Alice has been connected with Spirit from an early age; she has worked globally and continues to learn new healing skills, such as hypnotherapy and past life regression.",
    specialties: {
      abilities: ["healing"],
      tools: [],
      topics: ["emotional healing"],
      themes: ["direct"],
    },
    ctaText: "Connect with Alice",
    imageUrl: "img/readers/by_pin/6543.png",
  },
  ["andy"]: {
    name: "Andy",
    pin: 3399,
    description:
      "Andy, from North Wales, is a calm, empathetic psychic with strong Celtic roots. He uses clairvoyance, Angel Cards, crystals, and telepathy to guide others. Deeply spiritual, he supports people in crisis, including the homeless and housebound. His family shares psychic gifts, and he values simplicity, nature, and compassionate connection.",
    specialties: {
      abilities: ["clairvoyance", "psychic", "empathy"],
      tools: ["crystals", "angel cards"],
      topics: [],
      themes: ["supportive", "compassionate"],
    },
    ctaText: "Connect with Andy",
    imageUrl: "img/readers/by_pin/3399.png",
  },
  ["angel"]: {
    name: "Angel",
    pin: 1441,
    description:
      "Angel has a colourful aura that radiates healing energy; she uses her unique gift of pure insight to lead clients to their rightful soul path. She is a very approachable reader, who has the support of archangels and ascended masters. If you feel your life is off kilter in some way then Angel will provide intuitive advice to guide you.",
    specialties: {
      abilities: ["healing"],
      tools: [],
      topics: ["emotional healing", "life path"],
      themes: ["supportive"],
    },
    ctaText: "Connect with Angel",
    imageUrl: "img/readers/by_pin/1441.png",
  },
  ["bryony"]: {
    name: "Bryony",
    pin: 2727,
    description:
      "Bryony is an insightful spiritual reader with a natural born gift, she specialises in supporting clients through major life changes, relationship difficulties and business/career problems. You will find her to be an empathetic and honest reader, with a great sense of humour – perfect for guiding you onto the right path.",
    specialties: {
      abilities: ["empathy"],
      tools: [],
      topics: ["relationships", "career"],
      themes: ["supportive", "direct"],
    },
    ctaText: "Connect with Bryony",
    imageUrl: "img/readers/by_pin/2727.png",
  },
  ["ellie"]: {
    name: "Ellie",
    pin: 1180,
    description:
      "Ellie has a tremendous connection to nature and the animal kingdom and she draws strength from them, as she reads for you. She uses her inner eye to connect to your soul and she can tune into your energy through your aura. Ellie can tell you your destiny and pass messages from loved ones, angels and elders, so you can know you are making the right choices.",
    specialties: {
      abilities: ["clairvoyance", "aura reading"],
      tools: [],
      topics: ["destiny", "spirit messages"],
      themes: ["nature-connected", "spiritual"],
    },
    ctaText: "Connect with Ellie",
    imageUrl: "img/readers/by_pin/1180.png",
  },
  ["fran"]: {
    name: "Fran",
    pin: 1133,
    description:
      "Fran is a psychic medium who is highly experienced with direct spiritual communication during a reading. She has a long involvement with development circles and platform readings. She offers inspiration and enlightenment, to those who are bereaved or feeling lost. Fran will leave you feeling reassured, focused and uplifted.",
    specialties: {
      abilities: ["psychic", "mediumship"],
      tools: [],
      topics: [],
      themes: ["direct"],
    },
    ctaText: "Connect with Fran",
    imageUrl: "img/readers/by_pin/1133.png",
  },
  ["hope"]: {
    name: "Hope",
    pin: 3203,
    description:
      "Hope is a gifted healer, psychic and medium, with an inherited gift. In terms of clairvoyant abilities, you couldn't ask for someone more well versed, as she is proficient in psychometry, the I Ching, Tarot, palmistry and more. Hope wants to give you messages from Spirit that will allow you to heal and move forward.",
    specialties: {
      abilities: ["clairvoyance", "psychic", "mediumship", "healing"],
      tools: ["tarot", "palmistry", "i ching"],
      topics: [],
      themes: [],
    },
    ctaText: "Connect with Hope",
    imageUrl: "img/readers/by_pin/3203.png",
  },
  ["jasmine"]: {
    name: "Jasmine",
    pin: 5115,
    description:
      "Jasmine is a compassionate and direct reader, who will answer your questions no matter what the topic. She is both psychic and a medium, and is authoritative in the use of crystal ball, numerology and Runes. She has known about her gift from a very young age, and she has been on a life-long journey of spiritual learning, that she hopes to pass on to you.",
    specialties: {
      abilities: ["psychic", "mediumship"],
      tools: ["numerology", "crystals", "runes"],
      topics: [],
      themes: ["compassionate", "direct"],
    },
    ctaText: "Connect with Jasmine",
    imageUrl: "img/readers/by_pin/5115.png",
  },
  ["joanna"]: {
    name: "Joanna",
    pin: 4567,
    description:
      "Joanna has a very strong connection to Spirit, and is well studied in the esoteric. She is not an easy reader to shock – so feel free to speak candidly about what is troubling you. Joanna will use her healing energies and compassion to get to the heart of the matter. Together you will find the answers you need, with specific guidance that cuts the confusion.",
    specialties: {
      abilities: ["guidance", "healing"],
      tools: [],
      topics: ["emotional healing"],
      themes: ["compassionate", "direct", "precise"],
    },
    ctaText: "Connect with Joanna",
    imageUrl: "img/readers/by_pin/4567.png",
  },
  ["john"]: {
    name: "John",
    pin: 5152,
    description:
      "Whilst John was aware of his gifts from a very young age, it took a near death experience to convince him he needed to utilise them to support and guide others. He really is a spiritual counsellor, and deals so eloquently with those who are bereaved and grieving. He is a candid reader, but delivers his messages with love, so that you can gain a sense of closure.",
    specialties: {
      abilities: ["mediumship", "spiritual counselling"],
      tools: [],
      topics: ["bereavement", "closure"],
      themes: ["compassionate", "direct"],
    },
    ctaText: "Connect with John",
    imageUrl: "img/readers/by_pin/5152.png",
  },
  ["josephine"]: {
    name: "Josephine",
    pin: 4499,
    description:
      "Josephine leads people on a journey toward spiritual awakening, combining clairvoyance, clairaudience, clairsentience, and remote viewing. With a deep bond to the angelic realm, she offers valuable advice, healing, and empowerment. Her support enables individuals to discover their potential and tackle life's problems with clarity.",
    specialties: {
      abilities: ["clairvoyance", "clairsentience", "clairaudience", "healing"],
      tools: [],
      topics: ["emotional healing"],
      themes: ["supportive"],
    },
    ctaText: "Connect with Josephine",
    imageUrl: "img/readers/by_pin/4499.png",
  },
  ["karen"]: {
    name: "Karen",
    pin: 5791,
    description:
      "Karen knew she was gifted from a young age and she has a spirit guide that has been with her for many years. She quickly connects through clairvoyance to give insight and guidance on any difficult decisions you are facing. Karen has great life experience and provides a calming influence and comforting messages from Spirit, when you need support.",
    specialties: {
      abilities: ["clairvoyance", "guidance"],
      tools: [],
      topics: ["decision-making"],
      themes: ["supportive"],
    },
    ctaText: "Connect with Karen",
    imageUrl: "img/readers/by_pin/5791.png",
  },
  ["maggie"]: {
    name: "Maggie",
    pin: 9801,
    description:
      "Maggie embodies honesty, compassion, and patience. She attentively listens without passing judgment. As an experienced psychic, she can perceive intentions, reveal motivations, and delve deep into hearts and minds. Maggie utilises her psychic abilities in conjunction with tools like Mediumship, Pegasus Pendulum and The Voyager Tarot.",
    specialties: {
      abilities: ["psychic", "mediumship"],
      tools: ["voyager tarot", "tarot", "pegasus pendulum", "pendulum"],
      topics: [],
      themes: ["compassionate", "direct"],
    },
    ctaText: "Connect with Maggie",
    imageUrl: "img/readers/by_pin/9801.png",
  },
  ["mariah"]: {
    name: "Mariah",
    pin: 1881,
    description:
      "Mariah has very strong premonitions and is able to sense energies and interpret real feelings in a person's soul. Mariah has spent many years perfecting her craft and is at home as a platform reader or doing telephone work one to one. She can support you through difficult times, assisting with healing, questions you have and past life issues.",
    specialties: {
      abilities: ["healing"],
      tools: [],
      topics: ["emotional healing"],
      themes: ["supportive"],
    },
    ctaText: "Connect with Mariah",
    imageUrl: "img/readers/by_pin/1881.png",
  },
  ["mary"]: {
    name: "Mary",
    pin: 5055,
    description:
      "Mary is a natural psychic who is highly intuitive, with a speciality in energy readings, which often assist with emotional blocks. Mary is a direct reader, with a certain Irish charm, she will provide you with information so you feel empowered to make the right choices for you. Her readings provide comfort as well as solutions.",
    specialties: {
      abilities: ["psychic"],
      tools: [],
      topics: ["emotional blocks"],
      themes: ["direct", "empowering"],
    },
    ctaText: "Connect with Mary",
    imageUrl: "img/readers/by_pin/5055.png",
  },
  ["mavis"]: {
    name: "Mavis",
    pin: 1010,
    description:
      "Mavis is a professional and honest Medium Clairvoyant; through her connection with the spirit world she guides her clients in a most positive way. Mavis believes that we make our own destiny and her readings are very detailed to allow her clients to make the best decisions and choices in all areas of their lives as they move forward.",
    specialties: {
      abilities: ["clairvoyance", "mediumship"],
      tools: [],
      topics: ["decision-making"],
      themes: ["direct", "precise", "uplifting"],
    },
    ctaText: "Connect with Mavis",
    imageUrl: "img/readers/by_pin/1010.png",
  },
  ["michaela"]: {
    name: "Michaela",
    pin: 3232,
    description:
      "Michaela has over 12 years' experience; she can advise on all relationships particularly if you have a question early on. Michaela specialises in tackling present problems and challenges to ensure you can achieve your life goals. Michaela often turns to Archangel Michael for guidance and will pass on his messages with honesty and grace.",
    specialties: {
      abilities: ["guidance"],
      tools: [],
      topics: ["relationships"],
      themes: ["direct"],
    },
    ctaText: "Connect with Michaela",
    imageUrl: "img/readers/by_pin/3232.png",
  },
  ["pauline"]: {
    name: "Pauline",
    pin: 3798,
    description:
      "Pauline inherited her gifts from both sides of her family. She's been working as a telephone reader for over twenty years. Her speciality is relationship readings; she also likes to bring in Tarot and Angel cards, especially when she needs to tune into her guides. Pauline finds that Pendulum work can assist when clients require a yes or no answer to a question.",
    specialties: {
      abilities: [],
      tools: ["tarot", "angel cards", "pendulum"],
      topics: ["relationships"],
      themes: [],
    },
    ctaText: "Connect with Pauline",
    imageUrl: "img/readers/by_pin/3798.png",
  },
  ["robbie"]: {
    name: "Robbie",
    pin: 3443,
    description:
      "Robbie is a very warm and eloquent medium and psychic; he believes in spiritual transformation and positive thinking. If your life is off balance then he is the right reader to make you feel healed and back on your correct pathway. Robbie believes in harnessing the law of attraction - everything is possible when you believe.",
    specialties: {
      abilities: ["psychic", "mediumship"],
      tools: [],
      topics: [],
      themes: ["uplifting"],
    },
    ctaText: "Connect with Robbie",
    imageUrl: "img/readers/by_pin/3443.png",
  },
  ["ruth"]: {
    name: "Ruth",
    pin: 2022,
    description:
      "Ruth came relatively late to her spiritual path after realising her life just wasn't the way she wanted it to be. Now she enjoys sharing her gift to enable other people to experience the same change in direction for a happier and more fulfilling life. Ruth will guide and teach you self-empowerment so you can affect change for yourself.",
    specialties: {
      abilities: ["spiritual guidance"],
      tools: [],
      topics: ["self-empowerment", "life path"],
      themes: ["direct", "transformational"],
    },
    ctaText: "Connect with Ruth",
    imageUrl: "img/readers/by_pin/2022.png",
  },
  ["sandra"]: {
    name: "Sandra",
    pin: 2662,
    description:
      "Sandra is a clairvoyant medium; she believes that everyone has a type of life plan mapped out for them but that you do not necessarily need to follow it. It is when you veer off the given path that perhaps guidance and advice is needed most. Sandra can step in at these times to offer you messages and clarity from Spirit, so you can be sure of your next steps.",
    specialties: {
      abilities: ["clairvoyance", "guidance", "mediumship"],
      tools: [],
      topics: [],
      themes: [],
    },
    ctaText: "Connect with Sandra",
    imageUrl: "img/readers/by_pin/2662.png",
  },
  ["sarah"]: {
    name: "Sarah",
    pin: 9888,
    description:
      "Sarah has over twenty years' experience, her readings combine a unique set of interests and gifts from Tarot, the Luna cycle, Zodiac signs as well as Wiccan and Shamanic practices and beliefs. Sarah's readings forge a deep connection between you the client, the natural world and the spirit realms, to get you the answers you need.",
    specialties: {
      abilities: ["spiritual connection"],
      tools: ["tarot", "zodiac", "wicca", "shamanic practice"],
      topics: ["natural world", "spirit realms"],
      themes: ["earth-based", "intuitive"],
    },
    ctaText: "Connect with Sarah",
    imageUrl: "img/readers/by_pin/9888.png",
  },
  ["toby"]: {
    name: "Toby",
    pin: 2333,
    description:
      "Toby, a natural clairvoyant of Celtic descent, utilises various tools including Tarot to explore matters. He aims to present options and potential outcomes during readings. Coming from a family with psychic abilities, Toby shares wisdom generously and practices white witchcraft. He provides uplifting readings with empathy and practical solutions.",
    specialties: {
      abilities: ["clairvoyance", "psychic", "empathy"],
      tools: ["tarot"],
      topics: [],
      themes: ["uplifting"],
    },
    ctaText: "Connect with Toby",
    imageUrl: "img/readers/by_pin/2333.png",
  },
  ["vanessa"]: {
    name: "Vanessa",
    pin: 3900,
    description:
      "Vanessa has a raft of psychic abilities, from mediumship and clairaudience to clairsentience. She also uses cards, crystals and healing. She is highly attuned to the animal kingdom and is a Reiki Master and teacher. Most of all, Vanessa wants her callers to feel comfortable talking to her so that they can freely discuss their problems and worries and formulate a way forward.",
    specialties: {
      abilities: ["psychic", "mediumship", "clairsentience", "clairaudience"],
      tools: ["crystals"],
      topics: ["emotional healing"],
      themes: [],
    },
    ctaText: "Connect with Vanessa",
    imageUrl: "img/readers/by_pin/3900.png",
  },
};

export const READER_LIST = Object.values(READER_CONFIG_MAP);

export const READER_CARDS: Reader[] = READER_LIST.map((reader) => ({
  name: reader.name,
  image: reader.imageUrl,
  pin: reader.pin.toString(),
  status: "online", // Default status, can be updated dynamically
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

export const READER_STATUS_OPTIONS = [
  { value: "online", label: "Online" },
  { value: "busy", label: "Busy" },
  { value: "offline", label: "Offline" },
];

export const ALL_SKILLS = () => {
  const skillSet = new Set<string>();
  READER_CARDS.forEach((r) => r.skills.forEach((s) => skillSet.add(s)));
  return Array.from(skillSet).sort();
};

export const ALL_ABILITIES = () => {
  const skillSet = new Set<string>();
  READER_LIST.forEach((r) =>
    r.specialties.abilities.forEach((s) => skillSet.add(s))
  );
  return Array.from(skillSet).sort();
};

export const ALL_TOOLS = () => {
  const skillSet = new Set<string>();
  READER_LIST.forEach((r) =>
    r.specialties.tools.forEach((s) => skillSet.add(s))
  );
  return Array.from(skillSet).sort();
};

export const ALL_TOPICS = () => {
  const skillSet = new Set<string>();
  READER_LIST.forEach((r) =>
    [...r.specialties.topics, ...r.specialties.themes].forEach((s) =>
      skillSet.add(s)
    )
  );
  return Array.from(skillSet).sort();
};
