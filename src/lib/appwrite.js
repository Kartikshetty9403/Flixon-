import { Client, Databases, ID, Query } from "appwrite";

/* ENV VARIABLES */
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const TABLE_ID = import.meta.env.VITE_APPWRITE_METRICS_TABLE_ID;

/* CLIENT SETUP */
const client = new Client()
  .setEndpoint("https://sgp.cloud.appwrite.io/v1")
  .setProject(PROJECT_ID);

const databases = new Databases(client);

/* Ping Appwrite  */
client.ping();

/* just logging for now */
export const updateSearchCount = async (searchTerm, movie) => {
  //1. use Appwrite SDK to check if the search term exists in the databse
  try {
    const result = await databases.listDocuments(DATABASE_ID, TABLE_ID, [
      Query.equal("searchTerm", searchTerm),
    ]);

    //2. if it does, update the count
    if (result.documents.length > 0) {
      const doc = result.documents[0];

      await databases.updateDocument(DATABASE_ID, TABLE_ID, doc.$id, {
        count: doc.count + 1,
      });
      //3. if it doesn't create a new document with search term and count as 1
    } else {
      await databases.createDocument(DATABASE_ID, TABLE_ID, ID.unique(), {
        searchTerm,
        count: 1,
        movie_id: movie.id,
        poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getTrendingMovies = async () => {
  try {
    const result = await databases.listDocuments(DATABASE_ID, TABLE_ID, [
      Query.limit(5),
      Query.orderDesc("count"),
    ]);
    return result.documents;
  } catch (error) {
    console.log(error);
  }
};

export { client, databases };
