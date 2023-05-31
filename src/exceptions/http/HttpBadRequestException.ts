import { CustomException, ErrorReason } from "../CustomException";

export class HttpBadRequestException extends CustomException {
  constructor(reason: ErrorReason) {
    super(reason, "Bad request");
    this.reason = reason;
    this.status = 400;
  }
}
