import { Url } from "../common/common"; 
import { SeriesSummary } from "../common/common";
import { Image } from "../common/common";
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

    export interface ComicDataWrapper{
        code : number;
        status : string;
        copyright : string;
        attributionText : string;
        attributionHTML : string;
        data : ComicDataContainer;
        etag : string;
    } 

    export interface ComicDataContainer{
        offset : number;
        limit : number;
        total : number;
        count : number;
        results : Comic[];
    }

    export interface TextObject{
        type : string;
        language : string;
        text : string;
    
    }


    export interface ComicSummary{
        resourceURI : string
        name : string
    }

    export interface ComicDate{
        type : string;
        date : Date;
    }

    export interface ComicPrice{
        type : string;
        price : number;
    }

    export interface CreatorList{
        available : number;
        returned : number;
        collectionURI : string;
        items : CreatorSummary[];
    }

    export interface CreatorSummary{
        resourceURI : string;
        name : string
        role : string
    }

    export interface CharacterList{
        available : number;
        returned : number;
        collectionURI : string
        items : CharacterSummary[];
    }

    export interface CharacterSummary{
        resourceURI : string
        name : string
        role : string
    }