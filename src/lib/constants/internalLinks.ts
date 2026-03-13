export interface InternalLink {
  iconPath: string;
  title: string;
  description: string;
  href: string;
}

export const homePageInternalLinks: InternalLink[] = [
  {
    iconPath: "readers",
    title: "All Our Psychic Readers",
    description:
      "Meet our hand-picked psychics, browse their profiles, and see who’s available right now.",
    href: "/psychic-readers",
  },
  {
    iconPath: "gift",
    title: "Current Offers",
    description:
      "Discover today’s exclusive call offers and bonus-minute packages.",
    href: "/offers",
  },
  {
    iconPath: "book",
    title: "How It Works",
    description:
      "A quick guide to choosing a psychic and starting your reading in just a few steps.",
    href: "/how-psychic-readings-work",
  },
  {
    iconPath: "heart-hands-2",
    title: "Why The Psychic Gift",
    description:
      "Learn what makes us different – a family legacy rooted in care, not corporations.",
    href: "/about",
  },
  {
    iconPath: "phone",
    title: "Telephone Psychics",
    description:
      "Explore our clairvoyant services and discover how psychic insights can support your journey.",
    href: "/psychic-phone-readings",
  },
  {
    iconPath: "speech",
    title: "Speak to a Psychic",
    description:
      "Our readers are available now. Take the first step – no appointment needed.",
    href: "/call-a-psychic-now",
  },
];
