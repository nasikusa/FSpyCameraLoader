import FSpyCameraLoader from '../src/index';
import { exampleJsonString01 } from './utils/ExampleJsonStrings';

describe('loader data functions test', (): void => {
  let loader: FSpyCameraLoader;
  beforeAll(() => {
    loader = new FSpyCameraLoader();
    loader.parse(JSON.parse(exampleJsonString01));
  });
  test('is result data exist ?', (): void => {
    expect(loader.getData()).toBeTruthy();
  });
  test('is computed result data exist ?', (): void => {
    expect(loader.getComputedData()).toBeTruthy();
  });
});
