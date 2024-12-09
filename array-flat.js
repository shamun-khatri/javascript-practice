function flat(arr, depth = 1) {
    const flatArray = [];
    const stack = [];
  for (const index in arr) {
    stack.push([arr[index], depth]);
  }
  console.log("stack",stack)
  
    while (stack.length > 0) {
      let lastElement = stack[stack.length - 1];
      if (!lastElement) {
        stack.pop();
        flatArray.push(lastElement); 
        continue;
      }
      const [item, depth] = stack.pop();
      console.log("item",[item,depth])
      if (Array.isArray(item) && depth > 0) {
        for (const index in item) {
    stack.push([item[index], depth-1]);
  }
      } else {
        flatArray.push(item);
      }
    }
  
    console.log("result",flatArray.reverse())
    return flatArray.reverse();
  
  }
  
  
  
  const arr = [1,2]
  arr[4] = undefined,
  arr[5] = [3,4]
  arr[5][4] = [5,6,[7,8,[9,10]]]
  
  const arr2 = [1,2,3,4,undefined,5,,6,7,8]
  
  flat(arr, 4)