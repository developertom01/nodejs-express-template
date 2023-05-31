import { CustomException, ErrorReason } from "../CustomException";

export class HttpConflictException extends CustomException {
  constructor(reason: ErrorReason) {
    super(reason, "Conflict");
    this.reason = reason;
    this.status = 401;
  }
}
