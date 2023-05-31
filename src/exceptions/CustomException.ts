export type ErrorReason = string | Array<any> | Record<string, any>;

export abstract class CustomException extends Error {
  constructor(
    public reason: ErrorReason,
    public message: string = "Error occurred",
    public status: number = 500
  ) {
    super(message);
  }
  public toJSON() {
    return {
      error: this.reason,
    };
  }
}
