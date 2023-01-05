export interface Event {


    id:number,
    image: string,
    keywordsNames:keywords[],
    title: string,
    body: string,
    videoUrl: string,
    dateTimeFrom: string,
    dateTimeTo: string,
    location: string

}

export   interface keywords
{

    id: number,
    title: string

}
