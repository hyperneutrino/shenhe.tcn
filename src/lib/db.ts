import config from "config";
import { Collection, MongoClient, type Document } from "mongodb";

const client = new MongoClient(config.get("mongoURI"));
await client.connect();

const db = client.db(config.get("mongoDB"));

export default new Proxy(
    {},
    {
        get(_, property: string, __): Collection<Document> {
            return db.collection(property);
        },
    },
) as Record<string, Collection<Document>>;
