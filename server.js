const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const UserSchema = new mongoose.Schema({
  role: String,
  id: String,
  password: String
});

const User = mongoose.model('User', UserSchema);

mongoose.connect('mongodb://localhost:27017/timetable', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

app.post('/api/authenticate', async (req, res) => {
  const { role, id, password } = req.body;
  const user = await User.findOne({ role, id });
  if (user && bcrypt.compareSync(password, user.password)) {
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
});

app.listen(5001, () => {
  console.log('Server is running on port 5001');
});