import { Sequelize } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");

export const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connection succesfully established!");
    } catch (e: any) {
        console.log("Error connecting to database.");
    }
}

const database = {
    connect
}

export default database;