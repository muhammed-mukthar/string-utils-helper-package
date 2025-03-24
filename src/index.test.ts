import {
  capitalizeWords,
  truncate,
  removeWhitespace,
  reverse
} from './index';

describe('String Utils', () => {
  describe('capitalizeWords', () => {
    it('should capitalize first letter of each word', () => {
      expect(capitalizeWords('hello world')).toBe('Hello World');
      expect(capitalizeWords('javascript is awesome')).toBe('Javascript Is Awesome');
    });
  });

  describe('truncate', () => {
    it('should truncate string to specified length', () => {
      expect(truncate('Hello World', 5)).toBe('Hello...');
      expect(truncate('Short', 10)).toBe('Short');
    });
  });

  describe('removeWhitespace', () => {
    it('should remove all whitespace from string', () => {
      expect(removeWhitespace('hello world')).toBe('helloworld');
      expect(removeWhitespace('  spaces  everywhere  ')).toBe('spaceseverywhere');
    });
  });

  describe('reverse', () => {
    it('should reverse the string', () => {
      expect(reverse('hello')).toBe('olleh');
      expect(reverse('world')).toBe('dlrow');
    });
  });
}); 