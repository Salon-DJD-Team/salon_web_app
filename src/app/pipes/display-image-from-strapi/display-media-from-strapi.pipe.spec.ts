import { DisplayMediaFromStrapiPipe } from './display-media-from-strapi.pipe';

describe('DisplayMediaFromStrapiPipe', () => {
  it('create an instance', () => {
    const pipe = new DisplayMediaFromStrapiPipe();
    expect(pipe).toBeTruthy();
  });
});
