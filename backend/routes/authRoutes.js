const express = require('express');
const router = express.Router();
const { generateToken } = require('../auth');


const VALID_USER = {
  username: "apoorva",
  password: "apoorva",
  name: "Apoorva Joshi"
};

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (
    username?.toLowerCase() === VALID_USER.username &&
    password === VALID_USER.password
  ) {
    const token = generateToken({
      username: VALID_USER.username,
      name: VALID_USER.name
    });

    return res.json({ token, user: { name: VALID_USER.name } });
  }

  return res.status(401).json({ error: 'Invalid credentials' });
});

module.exports = router;
