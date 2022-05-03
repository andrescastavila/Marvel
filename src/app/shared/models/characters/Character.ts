import { Url,SeriesSummary,Image } from "../common/common"; 

export interface Character{
    id:number;
    name:string;
    description:string;
    modified:Date;
    resourceURI:string;
    urls:Url;
    thumbnail:Image;
    comics:ComicList;
    series:SeriesList;
    
}

export interface CharacterDataContainer{
    offset:number;
    limit:number;
    total:number;
    count:number;
    results: Character[];
}

export interface CharacterDataWrapper{
    code:number;
    status:string;
    copyright:string;
    attributionText:string;
    attributionHTML:string;
    data:CharacterDataContainer;
    etag:string;
}

export interface SeriesList{
    available:number;
    returned:number;
    collectionURI:string;
    items:SeriesSummary[];
}



export interface ComicList{
    available:number;
    returned:number;
    collectionURI:string;
    items:ComicSummary[];
}

export interface ComicSummary{
    resourceURI:string;
    name:string;
}




