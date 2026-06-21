export type Plugin = {
  name: string;
  tagline: string;
  description: string;
};

export const plugins: Plugin[] = [
  {
    name: "SFRoles",
    tagline: "The role hierarchy that everything else hangs off of",
    description:
      "Four-tier role system (Member → Chat Moderator → Moderator → Admin). New players join as Member — no verification step. Ships with the moderation toolkit: /role, /kick, /ban, /mute, /unmute. Every other plugin checks these roles before letting you do anything sensitive.",
  },
  {
    name: "SFChat",
    tagline: "Role-coloured chat plus unlockable titles",
    description:
      "Chat formatting that picks up your role colour automatically. Also runs the titles GUI (/title) where players choose a display title unlocked through RPG skills.",
  },
  {
    name: "SFEconomy",
    tagline: "The server currency, owned by no plugin",
    description:
      "Single source of truth for player balances. Exposes /bal for viewing, paying, and the leaderboard. Other plugins (clans, shop, auto-sell) all read and write through it.",
  },
  {
    name: "SFClans",
    tagline: "Land claims, levels, and clan spawns",
    description:
      "Three-tier clan roles (Member < Manager < Leader), three clan levels that scale claim size (32×32 → 64×64 → 128×128), a two-click visual claim tool, per-clan spawn points, and clickable invite prompts. Level-up costs are paid in server currency.",
  },
  {
    name: "SFRpg",
    tagline: "Skill grinding with active abilities",
    description:
      "Six skills — Digging, Mining, Logging, Gardening, Hunting, Fishing — that level up through normal gameplay. Sneak-right-click your tool to fire an active ability (Drill, Dwarf Mode, Treecapitator, Green Thumb).",
  },
  {
    name: "SFShop",
    tagline: "Admin sign shop for buying and selling",
    description:
      "Sign-based shop that handles vanilla items, mob spawners, mending books, and every custom enchant. /shop teleports you to the shop area. Backed by SFEconomy.",
  },
  {
    name: "SFTeleport",
    tagline: "Homes, /rtp, /spawn, /tp, /back",
    description:
      "Personal homes (/sethome, /home, /listhomes, /removehome), random teleport (/rtp — anywhere from 1k to 25k blocks out), world spawn (/spawn), player-to-player requests (/tp), and a /back that returns you to your last teleport or death spot.",
  },
  {
    name: "SFEnchants",
    tagline: "Custom enchantments — none of them vanilla",
    description:
      "Telepathy, All Is Crab, Slime Rancher, Treasure Hunter, Vein Miner, and Zeus. Event-driven, no commands — apply the books in an anvil and the effects kick in.",
  },
  {
    name: "SFSilkTouch",
    tagline: "Harvest mob spawners with Silk Touch",
    description:
      "Any pickaxe with Silk Touch can break a mob spawner and pick it up. The mob type is preserved in the dropped item.",
  },
  {
    name: "SFVoteDay",
    tagline: "Skip to day by majority vote",
    description:
      "Anyone can call /voteday to start a 15-second server-wide vote. Pass it and the time skips to morning.",
  },
  {
    name: "SFAdminProtect",
    tagline: "Admin-defined no-touch zones",
    description:
      "Mark areas where non-admins can't break, place, or interact with anything (item frames included). Signs are still clickable so the shop keeps working.",
  },
  {
    name: "SFKits",
    tagline: "Starter kits with a per-player cooldown",
    description:
      "Configurable kits handed out by /kit <name>, with a 24-hour cooldown tracked per player.",
  },
  {
    name: "SFWarp",
    tagline: "Public player-created warps",
    description:
      "Members can mark up to two locations with /setwarp <name> and let anyone teleport there with /warp <name>. /warp on its own lists every warp on the server.",
  },
  {
    name: "SFVault",
    tagline: "Personal storage chest plus admin inventory tools",
    description:
      "27-slot personal vault opened with /vault, persists across sessions. Ops get /vaultsee and /inventorysee to view and edit any online player's vault, inventory, or equipment.",
  },
  {
    name: "SFSort",
    tagline: "One-click inventory sorting",
    description:
      "Drops a hopper-icon Sort button into every chest, barrel, shulker, ender chest, and the player's own crafting view. Click it to merge partial stacks and order everything alphabetically.",
  },
  {
    name: "SFAntiLag",
    tagline: "Per-chunk mob cap that thins the herd gracefully",
    description:
      "Caps mobs per chunk per type (default 25). When the cap is exceeded, excess mobs are damaged over time rather than yanked out of the world. Named and tamed mobs are exempt.",
  },
  {
    name: "SFFoods",
    tagline: "Special food effects",
    description:
      "Cookies grant Member+ players stacking five-minute flight with an action-bar countdown and a fall-damage grace landing when the timer runs out.",
  },
  {
    name: "SFAutoSell",
    tagline: "Craftable chests that print loot or money",
    description:
      "Craft a Pandora's Chest (8 diamond blocks + chest) and it generates a random item every 5 minutes. Combine it with a Treasure Hunter book in an anvil to turn it into an Auto Sell Chest that sells anything inserted at shop prices, with a floating earnings display above it.",
  },
  {
    name: "SFDrops",
    tagline: "Tweaks to vanilla mob drops",
    description:
      "Wither Skeletons no longer drop Stone Swords. Iron Golems no longer drop Poppies. Small quality-of-life cleanups.",
  },
];
