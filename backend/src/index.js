require("dotenv").config();

// arquivo de conexção com o banco de dados
const { pool } = require("./db");

const express = require("express");

// inicializando o express
const app = express();

// definindo o json como formato padrão
app.use(express.json());

/**
 * Verifica se existe um usuário cadastrado no sistema com email passado na requisição
 * @param {*} req
 * @returns true ou false
 */
const checkifUserExists = async (req) => {
  const { email } = req.body;
  const client = await pool.connect();
  const response = await client.query(
    "SELECT 1 FROM usuario WHERE email = $1 AND ativo = TRUE LIMIT 1",
    [email]
  );

  return response && response.rowCount > 0;
};

/** rotas da api */
app.post("/checkifUserExists", async function (req, res) {
  const userExists = await checkifUserExists(req);
  res.json({ userExists });
});

// Inicie o servidor
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
