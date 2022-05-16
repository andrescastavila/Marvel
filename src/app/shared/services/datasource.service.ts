import { GlobalConstants } from "../models/common/global-constants";
import * as CryptoJS from 'crypto-js';
export class DataSource{
  public getUrlParams():String{
    return `ts=${GlobalConstants.ts}&apikey=${GlobalConstants.publicApiKey}&hash=${CryptoJS.MD5(GlobalConstants.ts.toString()+GlobalConstants.secretApiKey+GlobalConstants.publicApiKey).toString()}`;
  }
}
