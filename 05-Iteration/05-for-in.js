const obj1 = {
    js:'JavaScript',
    cpp : 'C++'
}
for(const key in obj1){
    console.log(key);
    console.log(`${key} shortcut if for ${obj1[key]}`)
}