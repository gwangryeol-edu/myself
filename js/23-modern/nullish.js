// null: 개발자가 의도한 "빈 데이터"
// undefined: 개발자가 의도한 "빈 데이터"

let value1; // undefined
let value2 = null; // null

console.log(value1);
console.log(value2);

// nullish는 데이터가 undefined 또는 null 이면 해당 데이터를 대체하는 기본값을 적용
let value3 = null ?? "기본값";  // 기본값
console.log(value3);  // 기본값
