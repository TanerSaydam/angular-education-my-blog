export class BlogModel{
    id: number = Math.random() * 100;
    title: string = "";
    content: string = "";
    createdDate: string = new Date().toString();
}