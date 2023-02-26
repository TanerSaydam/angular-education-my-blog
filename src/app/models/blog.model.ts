export class BlogModel{
    id: number = 0;
    title: string = "";
    category: string = "Genel";
    content: string = "";
    createdDate: string = new Date().toString();
}