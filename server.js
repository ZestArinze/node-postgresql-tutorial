import 'dotenv/config';

import app from './app';
import runDbMigrations from './db/migrations';

async function start() {
  await runDbMigrations();

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`😎😇 Running on port ${port} 😇😎`);
  });
}

start();
