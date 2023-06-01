import { IResolver, IntroResource } from "../../../ports";
import { introServiceInstance } from "../../../services/instances";
import { IntroResolver } from "./introResolver";

export const introResolverInstance: IResolver<IntroResource> =
  new IntroResolver(introServiceInstance);
