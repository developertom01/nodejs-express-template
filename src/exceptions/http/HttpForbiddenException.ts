import { CustomException, ErrorReason } from "../CustomException";

export class HttpForbiddenException extends CustomException {
  constructor(reason: ErrorReason) {
    super(reason, "Forbidden request");
    this.reason = reason;
    this.status = 403;
  }
}
