# 7장 자바스크립트 코어 객체와 배열 — 이론문제

---

## 1. 자바스크립트 객체를 생성할 때 사용하는 키워드는?

① creat  
② +  
③ new  
④ make

**정답: ③ `new`**

---

## 2. 다음 중 값 1, 2, 3으로 초기화한 배열 values를 생성하는 자바스크립트 코드는?

① `let values [] = {1, 2, 3};`  
② `let values = {1, 2, 3};`  
③ `let values [] = [1, 2, 3];`  
④ `let values = [1, 2, 3];`

**정답: ④**

```javascript
let values = [1, 2, 3];
```

---

## 3. 다음 배열에 대한 설명 중 틀린 것은?

```javascript
let months = new Array("Jan", "Feb", "March");
```

① `let months = ["Jan", "Feb", "March"];`로 대신할 수 있다.  
② months.length는 3이다.  
③ `months[1] = "February";` 코드는 "Feb"을 "February"로 수정한다.  
④ months.length = 5로 지정하여 배열의 크기를 5개로 늘릴 수 없다.

**정답: ④**

`months.length = 5;`로 배열의 길이를 5로 늘릴 수 있다.

---

## 4. 다음 배열에 대한 설명 중 틀린 것은?

```javascript
let grades = new Array("A", "B", "C", "D");
```

① `grades[4] = "F";`를 실행하면 grades 배열의 크기가 1 늘어난다.  
② `grades[3] = 70;`은 잘못된 코드이다. 왜냐하면 문자열 배열에 정수를 넣기 때문이다.  
③ grades.reverse()를 호출한 결과 grades 배열 내부가 ["D", "C", "B", "A"]로 변한다.  
④ grades.length는 4이다.

**정답: ②**

자바스크립트 배열에는 문자열과 숫자 등 서로 다른 자료형의 값을 함께 저장할 수 있다.

---

## 5. 주석에 맞게 다음 빈 칸에 자바스크립트 코드로 채워라.

```javascript
let ____________________; // Array를 이용하여 크기가 3인 배열 money 생성
________________________ = 5; // money의 첫 번째 원소에 5 삽입
________________________ = 7; // money의 두 번째 원소에 7 삽입
________________________ = -3; // money의 세 번째 원소에 -3 삽입
let sum = 0;
for (let i = 0; i < ____________; i++) sum += money[i]; // 배열 합 구하기
document.write(____________); // 평균 출력
```

**정답:**

```javascript
let money = new Array(3);
money[0] = 5;
money[1] = 7;
money[2] = -3;

let sum = 0;
for (let i = 0; i < money.length; i++) sum += money[i];

document.write(sum / money.length);
```

---

## 6. 코어 객체에 대한 설명으로 잘못된 것은?

① `let d = new Date();`로 생성한 객체 d는 현재 시간 값을 가진다.  
② Math 객체는 new Math()로 생성하지 않고 사용할 수 있다.  
③ "text"는 String 객체이다.  
④ new Array()로 생성한 객체는 []로 생성한 배열과 약간 다르다.

**정답: ④**

`new Array()`와 `[]`는 모두 빈 배열을 생성한다.

**참고:** ③은 교재에서 문자열을 넓게 표현한 것이다. 엄밀하게 `"text"` 자체는 문자열 원시 값이며, String 객체는 아니다.

---

## 7. 다음 자바스크립트 코드가 있을 때, 아래 각 항목의 실행 결과 변수 x의 값은 무엇인가?

```javascript
let text = "Web Programming";
```

(1) `let x = text.length;`  
(2) `let x = text[2];`  
(3) `let x = text.split(" ").length;`  
(4) `let x = text.replace("Web", "HTML5");`  
(5) `let x = text.charAt(4);`

**정답:**

| 항목 | x의 값                |
| ---- | --------------------- |
| (1)  | `15`                  |
| (2)  | `"b"`                 |
| (3)  | `2`                   |
| (4)  | `"HTML5 Programming"` |
| (5)  | `"P"`                 |

---

## 8. 1부터 10사이(10 포함) 임의의 정수를 리턴하는 자바스크립트 코드를 `let x = Math.random()*10+1;`로 작성하면 안 되는 이유를 설명하고, 바르게 수정하라.

**정답:**

`Math.random() * 10 + 1`은 1 이상 11 미만의 실수를 반환하므로, `Math.floor()`로 소수 부분을 버려야 한다.

```javascript
let x = Math.floor(Math.random() * 10) + 1;
```

---

## 9. student 객체를 생성하는 다음 코드를 리터럴 표기 방식으로 다시 작성하라.

```javascript
let student = new Object();
student.id = 1;
student.name = "kitae";
student.grade = 3.9;
```

**정답:**

```javascript
let student = {
  id: 1,
  name: "kitae",
  grade: 3.9,
};
```

---

## 10. 리터럴 표기 방식으로 작성된 다음 box 객체가 있다.

```javascript
let box = {
  color: "red",
  size: 10,
  amount: 0,
  fill: function () {
    this.amount += 2;
  },
  consume: function () {
    this.amount -= 2;
  },
};
```

### (1) box 객체를 new Object()를 이용하는 방법으로 다시 작성하라.

**정답:**

```javascript
let box = new Object();

box.color = "red";
box.size = 10;
box.amount = 0;

box.fill = function () {
  this.amount += 2;
};

box.consume = function () {
  this.amount -= 2;
};
```

### (2) 다음 주석에 지정된 대로 자바스크립트 코드를 작성하라.

```javascript
________________________; // box 객체의 fill() 메소드 호출
________________________; // document.write()로 amount 프로퍼티 값 출력
________________________; // box 객체의 consume() 메소드 호출
________________________; // document.write()로 amount 프로퍼티 값 출력
```

**정답:**

```javascript
box.fill();
document.write(box.amount);
box.consume();
document.write(box.amount);
```

### (3) 앞의 문제 (2)의 실행 결과 출력되는 것은 무엇인가?

**정답:**

```text
20
```

`fill()` 호출 후 `2`, `consume()` 호출 후 `0`이 줄바꿈 없이 이어서 출력된다.
