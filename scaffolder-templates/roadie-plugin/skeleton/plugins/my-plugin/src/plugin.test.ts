import { myPluginPlugin } from './plugin';

describe('my-plugin', () => {
  it('should export plugin', () => {
    expect(myPluginPlugin).toBeDefined();
  });
});
