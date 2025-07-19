/**
 * Helper function to get the correct asset path for Astro with base path support
 * @param path - The asset path (e.g., "/me.jpg", "/projects/image.webp")
 * @returns The full path including the base path for deployment
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.replace(/^\//, '');
  // Combine base URL with the clean path
  return import.meta.env.BASE_URL + cleanPath;
} 