import {ComicList,CharacterList,Url,Image} from "../common/common"; 


export interface SeriesSummary{
    resourceURI:string;
    name:string;
}

export interface Series{
    id:number;
    title:string;
    description:string;
    resourceURI:string;
    urls:Url[];
    startYear:number;
    endYear:number;
    rating:string;
    modified:Date;
    thumbnail:Image;
    comics:ComicList;
    characters:CharacterList;
    next:SeriesSummary;
    previus:SeriesSummary;
}


export interface SeriesDataContainer{
    offset:number;
    limit:number;
    total:number;
    count:number;
    results:Series[];
}


export interface SeriesDataWrapper{
    code:number;
    status:string;
    copyright:string;
    attributionText:string;
    attributionHTML:string;
    data:SeriesDataContainer;
    etag:string;
}