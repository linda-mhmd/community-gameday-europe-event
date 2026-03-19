/**
 * Logo overrides — AWS Community GameDay Europe
 *
 * Logos now live directly in config/participants.ts as the `logo` field on each UserGroup.
 * This file is kept for backwards compatibility (the build workflow still copies it).
 * You only need entries here for edge cases where the name in participants.ts
 * doesn't match what the composition expects.
 */

export const LOGO_MAP: Record<string, string> = {};
