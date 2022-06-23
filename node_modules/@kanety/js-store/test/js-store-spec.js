import JsStore from '../src/js-store.js'

describe('js-store', () => {
  ['session', 'local'].forEach((type) => {
    describe(type, () => {
      let store, value;

      beforeEach(() => {
        store = new JsStore({ type: type, key: 'key' });
        store.remove();
        value = { test: 'test' };
      });

      it('gets and sets value', () => {
        store.set(value);
        expect(store.get()).toEqual(value);
      });

      it('gets with default', () => {
        expect(store.get('test')).toEqual('test');
      });

      it('removes value', () => {
        store.set(value);
        store.remove();
        expect(store.get()).toEqual(null);
      });

      it('skips unparsable value', () => {
        store.inst.storage.setItem('key', 'value');
        expect(store.get()).toEqual(null);
      });

      it('skips quota exeeded value', () => {
        for (let i=0; i<10000000; i++) { value.test += 'test' }
        store.set(value);
        expect(store.get()).toEqual(null);
      });
    });
  });
});
