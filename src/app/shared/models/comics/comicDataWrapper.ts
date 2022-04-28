import {ComicDataContainer} from './ComicDataContainer';
export interface ComicDataWrapper{
    code : number;
    status : string;
    copyright : string;
    attributionText : string;
    attributionHTML : string;
    data : ComicDataContainer;
    etag : string;
}