# js-store

A simple web storage wrapper saving json data.

## Installation

Install from npm:

    $ npm install @kanety/js-store --save

## Usage

```javascript
import JsStore from '@kanety/js-store'

let store = new JsStore({
  type: 'session',  // or 'local'
  key: 'YOUR_STORAGE_KEY'
});

// set
store.set({ key: 'value' });

// get
let data = store.get();

// remove
store.remove();
```

## License

The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
