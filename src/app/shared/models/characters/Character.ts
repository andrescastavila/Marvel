import { Url} from './URLCharacters'
import { Image } from './image';
import { ComicList } from './ComicList';
import { SeriesList } from './SeriesList';


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