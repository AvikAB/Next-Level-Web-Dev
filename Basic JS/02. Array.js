let name = ["avik", "avi", "avicious", "vik", "kiva"];
console.log(name.length);
console.log(name[0]);
console.log(name[4]);

// push/pop:
name.push("avic");
console.log(name);
name.pop();   // delete the last ele
console.log(name);

// Shift/unshift:
name.unshift("avic");  // added ele will be the first ele
console.log(name);
name.shift();
console.log(name);   // remove from the first ele

// splice(startingIdx, delete_cnt, new_eles);
name.splice(2, 2, "aviii");
console.log(name);
