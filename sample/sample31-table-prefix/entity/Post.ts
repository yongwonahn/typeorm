import {PrimaryColumn, Column, Table, ManyToOne} from "../../../src/index";
import {JoinTable} from "../../../src/decorator/relations/JoinTable";
import {ManyToMany} from "../../../src/decorator/relations/ManyToMany";
import {Author} from "./Author";
import {Category} from "./Category";

@Table("sample31_post")
export class Post {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column()
    title: string;

    @Column()
    text: string;

    @ManyToOne(type => Author, {
        cascadeInsert: true
    })
    author: Author;

    @ManyToMany(type => Category, {
        cascadeInsert: true
    })
    @JoinTable()
    categories: Category[];

}