export default class JsStore {
  constructor(opts = {}) {
    this.opts = {
      type: opts.type || 'session',
      key: opts.key
    }
    this.inst = new WebStorage(this.opts);
  }

  get(defs = null) {
    return this.inst.get(this.opts.key) || defs;
  }

  set(data) {
    this.inst.set(this.opts.key, data);
  }

  remove() {
    this.inst.remove(this.opts.key);
  }
}

export class WebStorage {
  constructor(opts = {}) {
    this.storage = {
      local: window.localStorage,
      session: window.sessionStorage
    }[opts.type];
  }

  get(key) {
    try {
      let json = this.storage.getItem(key);
      if (!json) return null;
      return JSON.parse(json)
    } catch(e) {
      console.log(e);
      return null;
    }
  }

  set(key, value) {
    try {
      this.storage.setItem(key, JSON.stringify(value));
    } catch(e) {
      console.log(e);
    }
  }

  remove(key) {
    this.storage.removeItem(key);
  }
}
