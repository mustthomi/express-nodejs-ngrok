const pool = require('../config/database')

const getAllUsers = async () => {
    const SQLQuery = `SELECT * FROM users`
    const data = await pool.query(SQLQuery);
    return data.rows;
}

const createNewUsers = (body) => {
    const SQLQuery = `  INSERT INTO users (id, name, role, email, description) 
                        VALUES (${body.id}, '${body.name}', '${body.role}', '${body.email}', '${body.description}')`;
    const data = pool.query(SQLQuery);
    return data.rows;
}

module.exports = {
    getAllUsers,
    createNewUsers,
}