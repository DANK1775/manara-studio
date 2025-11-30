/**
 * Server-side main entry point.
 * Handles game logic, player management, and data persistence.
 */

import { Players, ReplicatedStorage } from "@rbxts/services";
import { CONFIG, formatMessage, generateId } from "shared";

// Track connected players
const activePlayers = new Map<Player, string>();

/**
 * Handles player joining the game.
 * @param player - The player who joined
 */
function onPlayerAdded(player: Player): void {
	const playerId = generateId();
	activePlayers.set(player, playerId);

	print(formatMessage(`Player ${player.Name} joined with ID: ${playerId}`));

	// Set up leaderstats for the player
	const leaderstats = new Instance("Folder");
	leaderstats.Name = "leaderstats";
	leaderstats.Parent = player;

	const points = new Instance("IntValue");
	points.Name = "Points";
	points.Value = 0;
	points.Parent = leaderstats;

	// Welcome the player
	print(formatMessage(`Welcome to ${CONFIG.gameName}!`));
}

/**
 * Handles player leaving the game.
 * @param player - The player who left
 */
function onPlayerRemoving(player: Player): void {
	const playerId = activePlayers.get(player);
	if (playerId !== undefined) {
		print(formatMessage(`Player ${player.Name} (${playerId}) left the game`));
		activePlayers.delete(player);
	}
}

// Connect player events
Players.PlayerAdded.Connect(onPlayerAdded);
Players.PlayerRemoving.Connect(onPlayerRemoving);

// Handle players already in the game (in case of late script execution)
for (const player of Players.GetPlayers()) {
	task.spawn(() => onPlayerAdded(player));
}

print(formatMessage(`Server initialized - Version ${CONFIG.version}`));
print(formatMessage(`Max players: ${CONFIG.maxPlayers}`));
