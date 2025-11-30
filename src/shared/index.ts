/**
 * Shared module for common utilities and types used across client and server.
 */

export interface GameConfig {
	gameName: string;
	maxPlayers: number;
	version: string;
}

export const CONFIG: GameConfig = {
	gameName: "Manara Studio Game",
	maxPlayers: 50,
	version: "1.0.0",
};

/**
 * Formats a message with the game prefix.
 * @param message - The message to format
 * @returns The formatted message string
 */
export function formatMessage(message: string): string {
	return `[${CONFIG.gameName}] ${message}`;
}

/**
 * Generates a unique identifier for game objects.
 * @returns A unique string identifier
 */
export function generateId(): string {
	return `id_${math.random(100000, 999999)}`;
}
