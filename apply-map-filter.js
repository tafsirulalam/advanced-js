const devices = [
    {id: 10, name: 'nokia' },
    {id: 20, name: 'xiaomi' },
    {id: 30, name: 'samsung' },
    {id: 40, name: 'iPhone' }
];
const names = devices.map(n => n.name);
console.log(names);
const ids = devices.filter(i => i.id>20);
console.log(ids);

