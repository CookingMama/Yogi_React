// console.log(document.body)
// console.log(document.getElementById("box"))

// 동기의 특징 먼저 실행 될 놈 실행하고 나중에 될 놈들 나중에 한다
// 동기 장점 : 빠르다
// 동가 단점 : 뭐가 먼저될지 모름

// 블로킹 Blocking
// A 함수가 B함수를 호출 할 때.
// b함수가 자신의 작업이 종료되기 전낒;
// a함수에게 제어권을 돌려주지 않는것
// 논블록킹 Non-Blockubg
// a 함수가 b함수를 호출할때
// b 함수가 제어권을 바로 a함수에게 넘겨주면서
// a함수가 다른일을 할수있곻록하ㅏ는것
// int string 복사 자체 x list object (map,dict) 주소값 복사

// let a = 1
// let b = a
// console.log(a)
// console.log(b)
// a = a+1
// console.log(a)
// console.log(b)

// alert(a)
// const isConfirm = confirm("확인")
// alert (isConfirm)

// function sum (a,b) {
//     return sun2(a) + b
// }
// // closer 클로저: 뭐든것은 변수로 취급 가능하다
// const sun2 = () => {
//     return a + 1;
// }

// const ab = sum(1,3)

// const tlist = [];
// tlist.push(1);
// tlist[1] =2
// console.log(tlist)
// const dict = {}
// dict["key"] = "value"
// console.log(dict);

// const alist = []
// for(let i = 0; i < 5; i++) {
//     const obj = {}
//     const name = "park"
//     const age = 10*i
//     const id = i
//     obj["id "] = id
//     obj["name"] = name;
//     obj["age"] = age;
//     obj["id "] = id
//     alist.push(obj)

// }
// console.log(alist)
// const alist2 = []
// for(let i = 0; i < 5; i++) {
//     const name = alist[i].name;
//     const age = alist[i].age + 1;
//     const id = alist[i].id;
//     alist.push({id,name,age})

// }
// console.log(alist2)
// // for (let i = 0; i<alist.length; i++) {
// //     alist[i].age +=1;
// // }
// // console.log(alist)

// const mapFunc = (element,index,arr) => {
//     // console.log(element, index, arr)
//     // const name = element.name;
//     // const age = element.age + 1;
//     // const id = element.id;
//     return {...element, age:element.age + 1}
// }
// const alist3 = alist.map( mapFunc)

// console.log("alist3", alist3)

// const blist = []
// for (let i = 0; i < 10; i++) {
//     const obj = {}
//     const name = "kim"
//     const year = 1998 + i
//     const age = 0 + i
//     obj["name"] = name;
//     obj["year"] = year + "년 입니다";
//     obj["age"] = age + "살 입니다";
//     blist.push(obj)
//  }
// console.log(blist)

//find fukter

// const adults = alist3.filter((el,index,arr) =>
//     el.age >20
// )
// console.log("adults", adults)

// const adult = alist3.find((el,index,arr) =>
//     el.age >20
// )
// console.log("adult", adult)

const x = null;
const x2 = undefined;

const todos = [
  { id: 1, title: "title 1", check: true },
  { id: 2, title: "title 2", check: false },
  { id: 3, title: "title 3", check: true },
  { id: 4, title: "title 4", check: false },
  { id: 5, title: "title 5", check: true },
];
const checkedTitles = [];
const checkedTrue = todos.filter((el, index, arr) => {
  if (el.check == true) {
    checkedTitles.push(el.title);
  }
});

// const checkedTitles = [];
// for (let i = 0; i < checkedTrue.length; i++) {
//     checkedTitles.push(checkedTrue[i].title)
// }
console.log(checkedTitles);

const isBool = "1";
if (isBool == 1) {
  console.log(true);
}
