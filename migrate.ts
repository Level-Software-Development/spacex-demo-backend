import { Umzug, SequelizeStorage } from 'umzug';
import { sequelize } from './models/index';

const umzug = new Umzug({
  storage: new SequelizeStorage({ sequelize }),
  migrations: { glob: './migrations/*.ts' },
  context: sequelize.getQueryInterface(),
  logger: console,
});

umzug.on('migrating', ev => console.log({ name: ev.name, path: ev.path }));
umzug.on('migrated', ev => console.log({ name: ev.name, path: ev.path }));
umzug.on('reverting', ev => console.log({ name: ev.name, path: ev.path }));
umzug.on('reverted', ev => console.log({ name: ev.name, path: ev.path }));

export { umzug };
