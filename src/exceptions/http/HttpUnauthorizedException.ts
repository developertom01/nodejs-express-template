import { CustomException, ErrorReason } from "../CustomException";

export class HttpUnauthorizedException extends CustomException {
  constructor(reason: ErrorReason) {
    super(reason, "Not authorized request");
    this.reason = reason;
    this.status = 401;
  }
}
