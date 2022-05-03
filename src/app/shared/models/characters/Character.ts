import { Url,Image,ComicList,SeriesList } from "../common/common"; 

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






