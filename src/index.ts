/**
 * Capitalizes the first letter of each word in a string
 * @param str The input string
 * @returns The string with first letter of each word capitalized
 */
export function capitalizeWords(str: string): string {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

/**
 * Truncates a string to a specified length and adds an ellipsis
 * @param str The input string
 * @param length The maximum length
 * @returns The truncated string
 */
export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}

/**
 * Removes all whitespace from a string
 * @param str The input string
 * @returns The string without whitespace
 */
export function removeWhitespace(str: string): string {
  return str.replace(/\s+/g, '');
}

/**
 * Reverses a string
 * @param str The input string
 * @returns The reversed string
 */
export function reverse(str: string): string {
  return str.split('').reverse().join('');
} 