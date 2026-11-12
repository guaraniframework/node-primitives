/**
 * Denotes the Abstract Constructor Type of the provided Generic.
 */
export interface AbstractConstructor<T> extends Function {
  /**
   * Prototype of the Constructor Type.
   */
  readonly prototype: T;
}

/**
 * Denotes the Constructor Type of the provided Generic.
 */
export interface Constructor<T> extends AbstractConstructor<T> {
  /**
   * Signature of the Constructor Type's constructor method.
   */
  new (...args: any[]): T;
}
