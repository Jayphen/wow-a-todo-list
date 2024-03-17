class EventEmitter {
  private events: Map<string, Set<Function>> = new Map();

  on(name: string, callback: Function) {
    const cbs = this.events.get(name) || new Set([]);

    cbs.add(callback);

    this.events.set(name, cbs);
  }

  emit(name: string) {
    const cbs = this.events.get(name);

    if (cbs) {
      for (const cb of cbs.values()) {
        cb();
      }
    }
  }
}

export const emitter = new EventEmitter();
