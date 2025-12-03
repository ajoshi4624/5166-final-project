const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../auth');
const pool = require('../db/mysql');


router.get('/giving-tuesday', authMiddleware, async (req, res) => {
  const [rows] = await pool.query(
    "SELECT fund_name, amount, year FROM giving_tuesday_donations ORDER BY id"
  );

  res.json({
    title: "Giving Tuesday Donations",
    labels: rows.map(r => r.fund_name),
    values: rows.map(r => r.amount),
    year: rows[0]?.year ?? 2025
  });
});


router.get('/entrepreneurship-enrollment', authMiddleware, async (req, res) => {
  const [rows] = await pool.query(
    "SELECT year, projected_students FROM entrepreneurship_enrollment ORDER BY year"
  );

  res.json({
    title: "Entrepreneurship Enrollment",
    labels: rows.map(r => String(r.year)),
    values: rows.map(r => r.projected_students)
  });
});

module.exports = router;
