const baseIngredients = ['water', 'herb', 'crystal']; 

const cloneBaseIngredients = [...baseIngredients];

const updatedBaseIngredients = [ 'phoenix feather', ...baseIngredients];

const meteor =  ['moon dust', 'sun ray'];

const enhancedPotion = [...baseIngredients, ...updatedBaseIngredients, ...meteor];

console.log(enhancedPotion);

