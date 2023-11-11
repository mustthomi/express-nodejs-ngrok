const pool = require('../config/database')

const getAllUsers = async () => {
    const SQLQuery = `SELECT * FROM users`
    const data = await pool.query(SQLQuery);
    return data.rows;
}

const createNewUser = (body) => {
    const SQLQuery = `  INSERT INTO users (id, name, role, email, description) 
                        VALUES (${body.id}, '${body.name}', '${body.role}', '${body.email}', '${body.description}')`;
    const data = pool.query(SQLQuery);
    return data.rows;
}

const updateUser = (body, id) => {
    const SQLQuery = `  UPDATE users
                        SET name='${body.name}', role='${body.role}', email='${body.email}', description='${body.description}'
                        WHERE id=${id}`;
    const data = pool.query(SQLQuery);
    return data.rows
}

const deleteUser = (id) => {
    const SQLQuery = `  DELETE FROM users WHERE id=${id}`;
    const data = pool.query(SQLQuery);
    return data.rows
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}