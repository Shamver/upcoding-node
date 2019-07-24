const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const api = require('./routes/index');
const react = require('./routes/react');
const user = require('./routes/user');

app.set('view engine', 'html');

app.use(bodyParser.json());

app.use('/api', api);
app.use('/user', user);
app.use('/test/*', (req, res) => res.sendFile(path.join(__dirname, '..', 'build', 'index.html')));
app.use('/', express.static(path.join(__dirname, '..', 'build')));
app.use('/', react);

// catch 404 and forward to error handler
app.use((req, res) => {
  res.send('꺼져');
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));
