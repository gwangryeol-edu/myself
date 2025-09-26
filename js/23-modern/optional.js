const user = {
  name: "홍길동",

  address: {
    city: "서울",
  },
};

// 옵셔널 체이닐 -> ?.속성명

console.log(user?.address);
console.log(user?.address?.city);
console.log(user?.address?.country);

console.log(user?.contact?.mail);   //undefined
console.log(user?.contact?.phone);  //undefined
console.log(user?.contact);         //undefined
