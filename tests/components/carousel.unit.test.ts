import { JSDOM } from 'jsdom';
import { describe, it, expect } from 'vitest';

describe('Carousel component (unit)', () => {
  it('renders slides', () => {
    const dom = new JSDOM(`
      <div class="swiper">
        <div class="swiper-slide">A</div>
        <div class="swiper-slide">B</div>
      </div>
    `);
    const slides = dom.window.document.querySelectorAll('.swiper-slide');
    expect(slides.length).toBe(2);
  });
});