import { CustomException, ErrorReason } from "../CustomException";

export class HttpNotAcceptableException extends CustomException {
  constructor(reason: ErrorReason) {
    super(reason, "Not acceptable");
    this.reason = reason;
    this.status = 406;
  }
}
