// generate-migration.js
const { execSync } = require('child_process');
const path = require('path');

if (process.argv.length < 3) {
  console.error('Please provide a migration name');
  process.exit(1);
}

const migrationName = process.argv[2];

// Create the command without the `-n` option
const command = `ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:generate -d data-source.ts src/migrations/${migrationName}`;

try {
  execSync(command, { stdio: 'inherit' });
} catch (error) {
  console.error('Error generating migration:', error.message);
}
