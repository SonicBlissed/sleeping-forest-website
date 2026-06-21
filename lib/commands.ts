export type Command = {
  /** The slash command with placeholder args, e.g. "/home <name>". */
  usage: string;
  description: string;
  plugin: string;
};

export type CommandGroup = {
  plugin: string;
  blurb: string;
  commands: Command[];
};

export const commandGroups: CommandGroup[] = [
  {
    plugin: "Economy",
    blurb: "Server currency.",
    commands: [
      {
        usage: "/bal",
        description: "Check your current balance.",
        plugin: "SFEconomy",
      },
      {
        usage: "/bal <player>",
        description: "Check another player's balance.",
        plugin: "SFEconomy",
      },
      {
        usage: "/bal pay <player> <amount>",
        description: "Send currency to another player.",
        plugin: "SFEconomy",
      },
      {
        usage: "/bal top",
        description: "Show the server-wide balance leaderboard.",
        plugin: "SFEconomy",
      },
    ],
  },
  {
    plugin: "Clans",
    blurb: "Form a clan, claim land, level up.",
    commands: [
      {
        usage: "/clan create <name>",
        description: "Start a new clan with you as the leader.",
        plugin: "SFClans",
      },
      {
        usage: "/clan info",
        description:
          "Show your clan's name, level, welcome message, and member list. Highlights your claim borders in glowstone for 7 seconds.",
        plugin: "SFClans",
      },
      {
        usage: "/clan invite <player>",
        description:
          "Send a clickable invite. They run /clan accept or /clan decline.",
        plugin: "SFClans",
      },
      { usage: "/clan accept", description: "Accept a pending clan invite.", plugin: "SFClans" },
      { usage: "/clan decline", description: "Decline a pending clan invite.", plugin: "SFClans" },
      {
        usage: "/clan claim",
        description:
          "Enter claim mode with a diamond shovel. Left-click one corner, right-click the opposite corner. Glowstone shows you exactly what you'd claim.",
        plugin: "SFClans",
      },
      {
        usage: "/clan setspawn",
        description: "Set the clan spawn point at your current location. (Manager+)",
        plugin: "SFClans",
      },
      { usage: "/clan spawn", description: "Teleport to your clan's spawn.", plugin: "SFClans" },
      {
        usage: "/clan welcome <message>",
        description: "Set the welcome message new members see. 40-character max.",
        plugin: "SFClans",
      },
      {
        usage: "/clan levelup",
        description:
          "Pay to upgrade your clan to the next level. Existing claims auto-expand. (Leader)",
        plugin: "SFClans",
      },
      {
        usage: "/clan rename <name>",
        description: "Rename the clan. (Leader)",
        plugin: "SFClans",
      },
      {
        usage: "/clan promote <player>",
        description: "Promote a member to Manager. (Leader)",
        plugin: "SFClans",
      },
      {
        usage: "/clan kick <player>",
        description: "Remove a member from the clan. (Manager+)",
        plugin: "SFClans",
      },
      { usage: "/clan leave", description: "Leave your current clan.", plugin: "SFClans" },
      {
        usage: "/clan delete",
        description: "Permanently disband the clan. (Leader)",
        plugin: "SFClans",
      },
    ],
  },
  {
    plugin: "RPG Skills",
    blurb: "Level up six skills through normal play.",
    commands: [
      {
        usage: "/skills",
        description: "View your level and XP for every skill.",
        plugin: "SFRpg",
      },
      {
        usage: "/mining",
        description: "Show details, level, and ability info for Mining.",
        plugin: "SFRpg",
      },
      {
        usage: "/digging",
        description: "Show details, level, and ability info for Digging.",
        plugin: "SFRpg",
      },
      {
        usage: "/logging",
        description: "Show details, level, and ability info for Logging.",
        plugin: "SFRpg",
      },
      {
        usage: "/gardening",
        description: "Show details, level, and ability info for Gardening.",
        plugin: "SFRpg",
      },
      {
        usage: "/hunting",
        description: "Show details, level, and ability info for Hunting.",
        plugin: "SFRpg",
      },
      {
        usage: "/fishing",
        description: "Show details, level, and ability info for Fishing.",
        plugin: "SFRpg",
      },
    ],
  },
  {
    plugin: "Teleport",
    blurb: "Get around the world quickly.",
    commands: [
      {
        usage: "/sethome <name>",
        description: "Save your current location as a named home.",
        plugin: "SFTeleport",
      },
      {
        usage: "/home <name>",
        description: "Teleport to one of your saved homes.",
        plugin: "SFTeleport",
      },
      {
        usage: "/listhomes",
        description: "List all the homes you've saved.",
        plugin: "SFTeleport",
      },
      {
        usage: "/removehome <name>",
        description: "Delete one of your homes.",
        plugin: "SFTeleport",
      },
      {
        usage: "/rtp",
        description:
          "Random teleport — drops you somewhere 1,000 to 25,000 blocks from spawn after a 3-second countdown. Has a cooldown.",
        plugin: "SFTeleport",
      },
      {
        usage: "/spawn",
        description: "Teleport to the world spawn.",
        plugin: "SFTeleport",
      },
      {
        usage: "/tp <player>",
        description: "Request to teleport to another player.",
        plugin: "SFTeleport",
      },
      {
        usage: "/back",
        description: "Return to where you were before your last teleport, or to where you last died.",
        plugin: "SFTeleport",
      },
    ],
  },
  {
    plugin: "Storage",
    blurb: "Your personal storage.",
    commands: [
      {
        usage: "/vault",
        description: "Open your personal 27-slot vault. Persists across sessions.",
        plugin: "SFVault",
      },
    ],
  },
  {
    plugin: "Warps",
    blurb: "Public locations any player can travel to.",
    commands: [
      {
        usage: "/setwarp <name>",
        description: "Create or update a public warp at your location. Two per player.",
        plugin: "SFWarp",
      },
      {
        usage: "/warp <name>",
        description: "Teleport to a public warp.",
        plugin: "SFWarp",
      },
      {
        usage: "/warp",
        description: "List every public warp on the server.",
        plugin: "SFWarp",
      },
    ],
  },
  {
    plugin: "Shop",
    blurb: "Buy and sell with server currency.",
    commands: [
      {
        usage: "/shop",
        description: "Teleport to the admin shop area.",
        plugin: "SFShop",
      },
    ],
  },
  {
    plugin: "Kits",
    blurb: "Starter equipment.",
    commands: [
      {
        usage: "/kit <name>",
        description: "Claim a kit. 24-hour cooldown per player.",
        plugin: "SFKits",
      },
    ],
  },
  {
    plugin: "Chat & Cosmetics",
    blurb: "Personalise your chat presence.",
    commands: [
      {
        usage: "/title",
        description:
          "Open the titles GUI to pick a personal display title (unlocked via RPG skills).",
        plugin: "SFChat",
      },
    ],
  },
  {
    plugin: "Community",
    blurb: "Whole-server commands.",
    commands: [
      {
        usage: "/voteday",
        description:
          "Start a server-wide vote to skip to daytime. Opens a 15-second voting window.",
        plugin: "SFVoteDay",
      },
      {
        usage: "/voteday yes",
        description: "Vote yes on an active /voteday.",
        plugin: "SFVoteDay",
      },
      {
        usage: "/voteday no",
        description: "Vote no on an active /voteday.",
        plugin: "SFVoteDay",
      },
    ],
  },
];
