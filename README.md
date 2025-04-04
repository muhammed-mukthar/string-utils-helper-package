# String Utils Helper

A collection of useful string manipulation utility functions for JavaScript/TypeScript projects.

## Installation

```bash
npm install string-utils-helper
```

## Usage

```typescript
import {
  capitalizeWords,
  truncate,
  removeWhitespace,
  reverse
} from 'string-utils-helper';

// Capitalize first letter of each word
console.log(capitalizeWords('hello world')); // Output: "Hello World"

// Truncate string to specified length
console.log(truncate('Hello World', 5)); // Output: "Hello..."

// Remove all whitespace
console.log(removeWhitespace('hello world')); // Output: "helloworld"

// Reverse string
console.log(reverse('hello')); // Output: "olleh"
```

## API

### capitalizeWords(str: string): string
Capitalizes the first letter of each word in a string.

### truncate(str: string, length: number): string
Truncates a string to a specified length and adds an ellipsis.

### removeWhitespace(str: string): string
Removes all whitespace from a string.

### reverse(str: string): string
Reverses a string.

## License

MIT #   s t r i n g - u t i l s - h e l p e r - p a c k a g e  
 