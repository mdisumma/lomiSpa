import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

// EXPRESS
const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// MONGO DB
async function main() {
	/**
	 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
	 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
	 */
	const uri =
		"mongodb+srv://LOMISPA:fgDY+V-kL-3S6fM@cluster0.niuhv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

	const client = new MongoClient(uri);

	try {
		// Connect to the MongoDB cluster
		await client.connect();

		//LIST SERVICES
		// await listDatabases(client);

		//CREATE SERVICE
		await insertService(client, {
			name: "Lomi treatment",
			description:
				"Indulge in this soothing, rejuvenating glow massage that connects your mind and body, with the nurturing touch from the two therapists combining banana leaves, hot stone, shell, shiatsu, and a Hawaiian technique plus an organic facial, to achieve a deep sense of relaxation and rejuvenation.",
			price: 3000,
			minutes: 140,
		});
	} catch (e) {
		console.error(e);
	} finally {
		await client.close();
	}
}

main().catch(console.error);

//INSERT SERVICE
const insertService = async (client, addService) => {
	const result = await client
		.db("LOMISPA_DB")
		.collection("services")
		.insertOne(addService);

	console.log(
		`New listing deleted with the following id: ${result.insertedId}`
	);
};

//CREATE SERVICE
const deleteService = async (client, removeService) => {
	const result = await client
		.db("LOMISPA_DB")
		.collection("services")
		.deleteOne(removeService);

	console.log(
		`New listing deleted with the following id: ${result.insertedId}`
	);
};

//LIST DATABASES
// async function listDatabases(client) {
// 	const databasesList = await client.db().admin().listDatabases();
// 	databasesList.databases.forEach((db) => console.log(db.name));
// }

//ROUTER
app.get("/", (req, res) => res.send(`server running on port ${PORT}`));

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
