import { ICollection } from "./collection";

export interface IntroResource {
  serverStatus: string;
}

export interface IIntroCollection extends ICollection<IntroResource> {}
