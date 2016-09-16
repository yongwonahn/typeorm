import "reflect-metadata";
import {ConnectionOptions, createConnection} from "../../src/index";
import {Post} from "./entity/Post";
import {Author} from "./entity/Author";
import {Category} from "./entity/Category";

const options: ConnectionOptions = {
    driver: {
        type: "sqlite",
        storage: "temp/sqlitedb.db",
        tablesPrefix: "samples_" // pay attention on this prefix
    },
    autoSchemaCreate: true,
    logging: {
        // logQueries: true,
        logFailedQueryError: true
    },
    entities: [Post, Author, Category],
};

createConnection(options).then(async connection => {

    let category1 = new Category();
    category1.name = "Animals";

    let category2 = new Category();
    category2.name = "People";

    let author = new Author();
    author.firstName = "Umed";
    author.lastName = "Khudoiberdiev";

    let post = new Post();
    post.text = "Hello how are you?";
    post.title = "hello";
    post.author = author;
    post.categories = [];
    post.categories.push(category2, category2);

    let postRepository = connection.getRepository(Post);

    await postRepository.persist(post);
    console.log("Post has been saved");

}).catch(error => console.log("Error: ", error));