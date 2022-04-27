import {Comic} from './comics'
export interface ComicDataContainer{
    offset : number;
    limit : number;
    total : number;
    count : number;
    results : Comic[];
}