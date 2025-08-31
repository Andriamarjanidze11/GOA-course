const nebulaStock = ['stardust', 'quantum core', 'plasma orb'];
const asteroidStock = ['iron shard', 'dark crystal'];

const nebulaBackup = [...nebulaStock];

const updatedNebulaStock = [...nebulaStock, 'gravity lens'];

const celestialDrops = [...'meteor|comet|nova'.split('|')];

const fullInventory = [...updatedNebulaStock, ...asteroidStock, ...celestialDrops];

console.log(fullInventory)