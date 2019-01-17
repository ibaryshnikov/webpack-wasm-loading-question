import('./add.js')
    .then(() => console.log('wasm loaded'))
    .catch(e => console.log('error loading wasm', e));
