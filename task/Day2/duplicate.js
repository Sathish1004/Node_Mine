
const names=['virat','ram','arun','sathish','virat']
function findDuplicates(arr) {
  if (!Array.isArray(arr)) return [];
  const counts = new Map();
  for (const item of arr) {
    counts.set(item, (counts.get(item) || 0) + 1);
  }
  const duplicates = [];
  for (const [item, cnt] of counts.entries()) {
    if (cnt > 1) duplicates.push(item);
  }
  return duplicates;
  
}
console.log(findDuplicates(names))