export class Singleton {
  private static instance: Singleton | null = null

  private constructor() { }

  public static createInstance(): Singleton {
    if(!Singleton.instance) {
      Singleton.instance = new Singleton()
    }

    return Singleton.instance
  }
}
