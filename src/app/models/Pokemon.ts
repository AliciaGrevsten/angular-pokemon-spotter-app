export interface Pokemon {
    id: number;
    pokemon:string;
    type:string;
    gender?:string;
    shiny?:boolean;
    location?:string;
    dateTime?:number;
}