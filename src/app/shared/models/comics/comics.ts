import {TextObject} from './textObject';
import { Url } from './url';
import { SeriesSummary } from './seriesSummary';
import { ComicSummary } from './comicSummary';
import { ComicDate } from './comicDate';
import { ComicPrice } from './comicPrice';
import { Image } from './image';
import { CreatorList } from './creatorList';
import { CharacterList } from './characterList';

export interface Comic{
    id : number;
    digitalId : number;
    title : string;
    issueNumber : number;
    variantDescription : string;
    description : string;
    modified : Date;
    isbn : string;
    upc : string;
    diamondCode : string
    ean : string
    issn : string;
    format : string;
    pageCount : number;
    textObjects : TextObject[];
    resourceURI : string;
    urls : Url[];
    series : SeriesSummary;
    variants : ComicSummary[];
    collections : ComicSummary[];
    collectedIssues : ComicSummary[];
    dates : ComicDate[]
    prices : ComicPrice[];
    thumbnail : Image;
    images : Image[];
    creators : CreatorList;
    characters : CharacterList;
    
    }