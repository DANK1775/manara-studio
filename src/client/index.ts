/**
 * Client-side main entry point.
 * Handles UI, player input, and local game rendering.
 */

import { Players, UserInputService } from "@rbxts/services";
import { CONFIG, formatMessage } from "shared";

// Get the local player
const player = Players.LocalPlayer;

/**
 * Initializes the client-side game systems.
 */
function initializeClient(): void {
	print(formatMessage(`Client initialized for ${player.Name}`));

	// Wait for player character to load
	const character = player.Character ?? player.CharacterAdded.Wait()[0];

	// Set up input handling
	setupInputHandling();

	// Display welcome message
	displayWelcomeMessage();

	print(formatMessage("Client setup complete!"));
}

/**
 * Sets up keyboard and mouse input handling.
 */
function setupInputHandling(): void {
	UserInputService.InputBegan.Connect((input, gameProcessed) => {
		if (gameProcessed) return;

		// Example: Handle jump with spacebar
		if (input.KeyCode === Enum.KeyCode.Space) {
			print(formatMessage("Jump input detected"));
		}

		// Example: Handle interaction with E key
		if (input.KeyCode === Enum.KeyCode.E) {
			print(formatMessage("Interact input detected"));
		}
	});
}

/**
 * Displays a welcome message to the player.
 */
function displayWelcomeMessage(): void {
	print(formatMessage(`Welcome to ${CONFIG.gameName}!`));
	print(formatMessage(`Game version: ${CONFIG.version}`));
	print(formatMessage("Use E to interact with objects"));
}

// Initialize the client when the script runs
initializeClient();
