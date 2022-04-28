export interface Url{
    type : string;
    url : string;
}

export interface Image{
    path : string
    extension : string
}


export interface ComicSummary{
    resourceURI:string;
    name:string;
}

export interface ComicList{
    available:number;
    returned:number;
    collectionURI:string;
    items:ComicSummary[];
}

export interface SeriesSummary{
    resourceURI:string;
    name:string;
}

export interface SeriesList{
    available:number;
    returned:number;
    collectionURI:string;
    items:SeriesSummary[];
}

export interface CharacterSummary{
    resourceURI : string
    name : string
    role : string
}

export interface CharacterList{
    available : number;
    returned : number;
    collectionURI : string
    items : CharacterSummary[];
}

export interface SeriesSummary{
    resourceURI : string;
    name : string;
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