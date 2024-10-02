import { connect } from 'mongoose';
import { disconnect } from 'process';
export default async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
        console.log("connection established");
    }
    catch (error) {
        console.log(error);
        throw new Error("cannot connect to mongodb");
    }
}
async function disconnectFromDatabase() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
        throw new Error("cannot connect to mongodb");
    }
}
export { connectToDatabase, disconnectFromDatabase };
//# sourceMappingURL=connection.js.map