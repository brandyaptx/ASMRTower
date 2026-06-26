export const siteConfig = {
  domain: "https://www.asmrtower.wiki",
  name: "ASMR Tower Wiki",
  title: "ASMR Tower Guide & Tools 2026",
  description:
    "Verified ASMR Tower Roblox data, codes status, stage help, and a gamepass budget calculator.",
  checkedDate: "2026-06-26",
  nav: [
    { href: "/", label: "Home" },
    { href: "/codes/", label: "Codes" },
    { href: "/tier-list/", label: "Tier List" },
    { href: "/wiki/", label: "Wiki" },
    { href: "/updates/", label: "Updates" },
    { href: "/calculator/", label: "Calculator" },
    { href: "/sources/", label: "Sources" },
  ],
};

export const gameProfile = {
  name: "ASMR Tower [UPD]",
  displayName: "ASMR Tower",
  developer: "3 Studio",
  universeId: "10236023188",
  placeId: "111363135577981",
  robloxUrl: "https://www.roblox.com/games/111363135577981/ASMR-Tower",
  genre: "Obby & Platformer / Tower Obby",
  created: "2026-05-28T16:40:10.078Z",
  lastUpdated: "2026-06-23T04:28:54.18Z",
  maxPlayers: 15,
  currentSnapshot: {
    visits: 14282046,
    favorites: 53966,
    playing: 9410,
    upVotes: 51287,
    downVotes: 2194,
    likeRatio: "95.9%",
  },
  description:
    "A relaxing tower obby with satisfying slime, squishy, and keyboard click sounds. Players climb ASMR-themed stages and use optional gamepasses/items for movement, comfort, or utility.",
  officialTags: [
    "squishy",
    "slime",
    "obby",
    "tower obby",
    "stages",
    "checkpoint",
    "trade",
    "trading",
    "satisfying",
    "kawaii",
    "casual",
    "chill",
    "asmr",
  ],
  source: "Roblox Games API snapshot, checked 2026-06-26.",
};

export const nameCollision = {
  title: "Same-name Roblox game warning",
  detail:
    "There is also a separate [UPD] ASMR Tower by Tiny Pepe Studio at place ID 82202788814561. This site tracks ASMR Tower [UPD] by 3 Studio at place ID 111363135577981 because it has the stronger current activity snapshot.",
  otherGameUrl: "https://www.roblox.com/games/82202788814561/ASMR-Tower",
};

export type SourceStatus = "Verified" | "Conflicting" | "Needs check";

export const sources = [
  {
    name: "Roblox official game page",
    url: gameProfile.robloxUrl,
    use: "Primary identity source for name, creator, description, place ID, and player-facing tags.",
    status: "Verified" as SourceStatus,
  },
  {
    name: "Roblox Games API",
    url: "https://games.roblox.com/v1/games?universeIds=10236023188",
    use: "Snapshot for visits, favorites, active players, max players, created date, update date, genre, and creator.",
    status: "Verified" as SourceStatus,
  },
  {
    name: "Roblox Votes API",
    url: "https://games.roblox.com/v1/games/votes?universeIds=10236023188",
    use: "Snapshot for upvotes and downvotes.",
    status: "Verified" as SourceStatus,
  },
  {
    name: "Rolimon's ASMR Tower game page",
    url: "https://www.rolimons.com/game/111363135577981",
    use: "Third-party public listing for gamepasses, prices, player count context, and game metadata.",
    status: "Verified" as SourceStatus,
  },
  {
    name: "Game Rant ASMR Tower codes guide",
    url: "https://gamerant.com/roblox-codes-asmr-tower-community-server-discord/",
    use: "Codes page signal. It reports no working public codes at the checked time and appears to reference a redemption flow.",
    status: "Conflicting" as SourceStatus,
  },
  {
    name: "Earnaldo ASMR Tower codes guide",
    url: "https://earnaldo.com/blog/asmr-tower-codes",
    use: "Codes page signal. It reports no working public codes and no verified code redemption system as of its June 2026 update.",
    status: "Conflicting" as SourceStatus,
  },
];

export const codesStatus = {
  lastChecked: "2026-06-26",
  summary: "No public working ASMR Tower codes were verified.",
  activeCodes: [] as { code: string; reward: string; source: string }[],
  expiredCodes: [] as { code: string; reward: string; source: string }[],
  needsCheck: [
    "Whether the current 3 Studio build exposes an in-game redeem button.",
    "Whether community rewards require group membership rather than typed promo codes.",
    "Whether Game Rant's reported redemption flow belongs to this 3 Studio game or the same-name Tiny Pepe Studio game.",
  ],
};

export type GamepassCategory =
  | "Movement"
  | "Recovery"
  | "Comfort"
  | "Protection"
  | "Economy"
  | "Access"
  | "Social";

export type Gamepass = {
  id: string;
  name: string;
  price: number;
  category: GamepassCategory;
  tier: "S" | "A" | "B" | "C";
  bestFor: string;
  sourceStatus: SourceStatus;
  note: string;
};

export const gamepasses: Gamepass[] = [
  {
    id: "magic-carpet",
    name: "Magic Carpet",
    price: 599,
    category: "Movement",
    tier: "S",
    bestFor: "Players who want the broadest movement utility and have the largest Robux budget.",
    sourceStatus: "Needs check",
    note: "Price verified from Rolimon's listing; exact in-game handling should be confirmed before purchase.",
  },
  {
    id: "jetpack",
    name: "Jetpack",
    price: 299,
    category: "Movement",
    tier: "S",
    bestFor: "Vertical recovery and climb-focused routes.",
    sourceStatus: "Needs check",
    note: "Price verified from Rolimon's listing; effect inferred from the item name.",
  },
  {
    id: "grappling-hook",
    name: "Grappling Hook",
    price: 249,
    category: "Movement",
    tier: "S",
    bestFor: "Shortcut-minded players who want active movement control.",
    sourceStatus: "Needs check",
    note: "Price verified from Rolimon's listing; exact range/cooldown not confirmed.",
  },
  {
    id: "super-coil",
    name: "Super Coil",
    price: 199,
    category: "Movement",
    tier: "A",
    bestFor: "High value movement upgrade below the premium tools.",
    sourceStatus: "Needs check",
    note: "Price verified from Rolimon's listing.",
  },
  {
    id: "double-jump",
    name: "Double Jump",
    price: 99,
    category: "Movement",
    tier: "A",
    bestFor: "Budget movement assistance and stage recovery.",
    sourceStatus: "Needs check",
    note: "Price verified from Rolimon's listing; exact stage advantage should be tested in-game.",
  },
  {
    id: "speed-coil",
    name: "Speed Coil",
    price: 99,
    category: "Movement",
    tier: "A",
    bestFor: "Budget speed help for repeated tower attempts.",
    sourceStatus: "Needs check",
    note: "Price verified from Rolimon's listing.",
  },
  {
    id: "fast-respawn",
    name: "Fast Respawn",
    price: 19,
    category: "Recovery",
    tier: "A",
    bestFor: "Cheapest friction reducer after falls or failed attempts.",
    sourceStatus: "Needs check",
    note: "Price verified from Rolimon's listing.",
  },
  {
    id: "gravity-coil",
    name: "Gravity Coil",
    price: 99,
    category: "Movement",
    tier: "B",
    bestFor: "Alternate movement feel for players who prefer floatier jumps.",
    sourceStatus: "Needs check",
    note: "Price verified from Rolimon's listing.",
  },
  {
    id: "invincibility",
    name: "Invincibility",
    price: 49,
    category: "Protection",
    tier: "B",
    bestFor: "Risk reduction if the current build has slap or hazard pressure.",
    sourceStatus: "Needs check",
    note: "Price verified from Rolimon's listing; exact protected interactions need in-game testing.",
  },
  {
    id: "world-pass",
    name: "World Pass",
    price: 199,
    category: "Access",
    tier: "B",
    bestFor: "Players who want broader access over direct movement utility.",
    sourceStatus: "Needs check",
    note: "Price verified from Rolimon's listing; unlock scope not confirmed.",
  },
  {
    id: "vip",
    name: "VIP",
    price: 299,
    category: "Social",
    tier: "B",
    bestFor: "Players who value identity/status perks more than climb speed.",
    sourceStatus: "Needs check",
    note: "Price verified from Rolimon's listing; exact VIP benefits not confirmed.",
  },
  {
    id: "slap-tool",
    name: "Slap Tool",
    price: 299,
    category: "Social",
    tier: "C",
    bestFor: "Social and chaos-focused play rather than pure tower progress.",
    sourceStatus: "Needs check",
    note: "Price verified from Rolimon's listing.",
  },
  {
    id: "double-coins",
    name: "Double Coins",
    price: 99,
    category: "Economy",
    tier: "C",
    bestFor: "Economy-focused players if coins matter to their current goal.",
    sourceStatus: "Needs check",
    note: "Price verified from Rolimon's listing; coin use cases need confirmation.",
  },
  {
    id: "double-luck",
    name: "Double Luck",
    price: 99,
    category: "Economy",
    tier: "C",
    bestFor: "Players chasing luck-gated systems if those systems are active.",
    sourceStatus: "Needs check",
    note: "Price verified from Rolimon's listing; exact luck target not confirmed.",
  },
  {
    id: "disable-popups",
    name: "Disable Pop-Ups",
    price: 29,
    category: "Comfort",
    tier: "C",
    bestFor: "Comfort-focused players who dislike interruption.",
    sourceStatus: "Needs check",
    note: "Price verified from Rolimon's listing.",
  },
];

export const keywordBuckets = {
  codes: [
    "asmr tower codes",
    "asmr tower codes 2026",
    "asmr tower codes June 2026",
    "working ASMR Tower codes",
    "free ASMR Tower codes",
    "ASMR Tower redeem codes",
    "ASMR Tower code redemption",
    "ASMR Tower community rewards",
  ],
  tierList: [
    "ASMR Tower tier list",
    "ASMR Tower gamepass tier list",
    "ASMR Tower best gamepasses",
    "ASMR Tower Magic Carpet",
    "ASMR Tower Jetpack",
    "ASMR Tower Grappling Hook",
    "ASMR Tower Speed Coil",
    "ASMR Tower VIP worth it",
  ],
  wiki: [
    "ASMR Tower wiki",
    "ASMR Tower Roblox wiki",
    "ASMR Tower stages",
    "ASMR Tower checkpoints",
    "ASMR Tower squishy",
    "ASMR Tower slime",
    "ASMR Tower Needoh",
    "ASMR Tower trading",
    "ASMR Tower gamepasses",
  ],
  guide: [
    "ASMR Tower guide",
    "how to play ASMR Tower",
    "ASMR Tower beginner guide",
    "ASMR Tower tips",
    "ASMR Tower stage help",
    "ASMR Tower how to climb",
    "ASMR Tower relaxing obby",
  ],
  update: [
    "ASMR Tower update",
    "ASMR Tower [UPD]",
    "ASMR Tower new update",
    "ASMR Tower patch notes",
    "ASMR Tower June 2026 update",
    "ASMR Tower latest version",
  ],
  calculator: [
    "ASMR Tower calculator",
    "ASMR Tower gamepass calculator",
    "ASMR Tower budget calculator",
    "ASMR Tower Robux calculator",
    "ASMR Tower gamepass cost",
    "ASMR Tower best gamepass for Robux",
  ],
};

export const routes = [
  { path: "/", title: "ASMR Tower Guide & Tools", priority: 1, changeFrequency: "daily" },
  { path: "/codes/", title: "ASMR Tower Codes", priority: 0.9, changeFrequency: "daily" },
  { path: "/tier-list/", title: "ASMR Tower Tier List", priority: 0.9, changeFrequency: "weekly" },
  { path: "/wiki/", title: "ASMR Tower Wiki", priority: 0.9, changeFrequency: "weekly" },
  { path: "/updates/", title: "ASMR Tower Updates", priority: 0.85, changeFrequency: "daily" },
  { path: "/calculator/", title: "ASMR Tower Calculator", priority: 0.9, changeFrequency: "weekly" },
  { path: "/sources/", title: "ASMR Tower Sources", priority: 0.75, changeFrequency: "weekly" },
] as const;

export const updateNotes = [
  {
    date: "2026-06-23",
    title: "Roblox API shows latest game update",
    detail:
      "ASMR Tower [UPD] by 3 Studio had an updated timestamp of 2026-06-23T04:28:54.18Z in the Roblox Games API snapshot.",
    status: "Verified" as SourceStatus,
  },
  {
    date: "2026-06-26",
    title: "Codes status checked",
    detail:
      "No working public codes were verified. Game Rant and Earnaldo both indicate no active public codes, but they differ on whether a redemption system is visible.",
    status: "Conflicting" as SourceStatus,
  },
  {
    date: "2026-06-26",
    title: "Gamepass list captured",
    detail:
      "Gamepass names and prices were captured from Rolimon's public ASMR Tower listing. Effects remain marked Needs check unless verified in-game.",
    status: "Needs check" as SourceStatus,
  },
];
