export class Character{
    created:string;
    episode:Array<string>;
    gender:string;
    id:number;
    image:string;
    location:Array<Location>
    name:string;
    origin:Array<Origin>
    species:string;
    status:string;
    type:string;
    url:string;
}

export class Location{
    name:string;
    url:string;
}

export class Origin{
    name:string;
    url:string;
}
