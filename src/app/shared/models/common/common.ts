export interface Url{
    type : string;
    url : string;
}

export interface SeriesSummary{
    resourceURI:string;
    name:string;
}

export interface Image{
    path : string
    extension : string
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