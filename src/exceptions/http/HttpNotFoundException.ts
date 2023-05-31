import { CustomException, ErrorReason } from "../CustomException";

export class HttpNotFoundException extends CustomException {
  constructor(reason: ErrorReason) {
    super(reason, "Not found");
    this.reason = reason;
    this.status = 404;
  }
}
