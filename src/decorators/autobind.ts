/* Decorator to replace this.method.bind(this) */
export function AutoBind(_: any, _2: any, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const autoBindedMethod = {
    ...originalMethod,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  };
  return autoBindedMethod;
}
