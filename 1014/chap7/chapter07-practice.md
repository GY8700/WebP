# 7장 자바스크립트 코어 객체와 배열 — 실습문제

---

## 1. 1에서 100(100 포함) 사이의 난수 10개를 생성하여 plots 이름의 배열에 저장하고, 배열에 저장된 수 중 가장 큰 수를 출력하는 웹 페이지를 작성하라.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>난수</title>
  </head>
  <body>
    <h3>난수 10 개 생성</h3>
    <hr />
    <script>
      let plots = [];

      for (let i = 0; i < 10; i++) {
        plots[i] = Math.floor(Math.random() * 100) + 1;
      }

      for (let i = 0; i < plots.length; i++) {
        document.write(plots[i] + " ");
      }

      document.write("<hr>");

      let big = plots[0];
      for (let i = 1; i < plots.length; i++) {
        if (plots[i] > big) big = plots[i];
      }

      document.write("제일 큰 수는 " + big);
      document.write("<hr>");

      plots.sort();

      for (let i = 0; i < plots.length; i++) {
        document.write(plots[i] + " ");
      }
    </script>
  </body>
</html>
```

---

## 2. prompt() 함수를 반복 호출하여 5개의 정수를 입력받아 배열에 저장하고 입력된 반대 순으로 출력하는 웹 페이지를 작성하라.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>정수 5개 입력받아 역순으로 출력</title>
  </head>
  <body>
    <h3>정수 5개 입력받아 역순으로 출력</h3>
    <hr />
    <script>
      let numbers = [];

      for (let i = 0; i < 5; i++) {
        numbers[i] = parseInt(prompt("정수 입력"));
      }

      document.write("입력된 수의 배열<br>");
      for (let i = 0; i < numbers.length; i++) {
        document.write(numbers[i] + " ");
      }

      document.write("<hr>");
      document.write("역순으로 재정렬된 배열<br>");

      numbers.reverse();

      for (let i = 0; i < numbers.length; i++) {
        document.write(numbers[i] + " ");
      }
    </script>
  </body>
</html>
```

---

## 3. 예제 7-6을 수정하여 웹 페이지를 접속할 때 오전이면 배경색을 lightskyblue로, 오후이면 orange로 출력되게 하라.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>방문 시간이 오전 오후에 따라 변하는 배경색</title>
  </head>
  <body>
    <h3>오전이면 lightskyblue, 오후이면 orange 배경</h3>
    <hr />
    <script>
      let now = new Date();

      if (now.getHours() < 12)
        document.body.style.backgroundColor = "lightskyblue";
      else document.body.style.backgroundColor = "orange";

      document.write("현재 시간 : " + now.getHours() + "시,");
      document.write(now.getMinutes() + "분,");
      document.write(now.getSeconds() + "초");
    </script>
  </body>
</html>
```

---

## 4. 예제 7-6을 수정하여, 웹 페이지를 접속할 때 월요일~토요일이면 배경색을 gold로, 일요일이면 pink로 출력되게 하라.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>방문 요일에 따라 변하는 배경색</title>
  </head>
  <body>
    <h3>일요일은 pink, 다른 요일은 gold 배경</h3>
    <hr />
    <script>
      let now = new Date();
      let days = ["일", "월", "화", "수", "목", "금", "토"];
      let day = now.getDay();

      if (day == 0) document.body.style.backgroundColor = "pink";
      else document.body.style.backgroundColor = "gold";

      document.write("오늘 : " + now.getDate() + "일,");
      document.write(days[day] + "요일");
    </script>
  </body>
</html>
```

---

## 5. 이름 문자열이 들어 있는 배열 names는 다음과 같다.

```javascript
let names = new Array("wonsun", "jaemoonlee", "kitae", "gracehwang");
```

다음 문항에서 요구하는 자바스크립트 코드를 작성하라.

(1) names 배열에 들어 있는 각 이름을 출력하라.  
(2) names 배열에서 가장 긴 이름을 출력하라.  
(3) names 배열에서 사전에서 가장 먼저 나오는 이름을 출력하라.  
(4) names 배열을 증가 순으로 재 정렬하여 출력하라.

다음은 앞의 4개 코드를 실행한 결과이다.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>문자열 배열 다루기</title>
  </head>
  <body>
    <h3>문자열 배열 다루기</h3>
    <hr />
    <script>
      let names = new Array("wonsun", "jaemoonlee", "kitae", "gracehwang");

      // (1)
      document.write("이름 : ");
      for (let i = 0; i < names.length; i++) {
        document.write(names[i] + " ");
      }

      // (2)
      let longest = names[0];
      for (let i = 1; i < names.length; i++) {
        if (names[i].length > longest.length) longest = names[i];
      }
      document.write("<br>가장 긴 이름 : " + longest);

      // (3)
      let first = names[0];
      for (let i = 1; i < names.length; i++) {
        if (names[i] < first) first = names[i];
      }
      document.write("<br>가장 먼저 나오는 이름 : " + first);

      // (4)
      names.sort();
      document.write("<br>증가순 이름 : ");
      for (let i = 0; i < names.length; i++) {
        document.write(names[i] + " ");
      }
    </script>
  </body>
</html>
```

---

## 6. prompt() 함수를 호출하여 사용자로부터 문자열을 입력받고 “&” 문자를 기준으로 분할하여 출력하는 웹 페이지를 작성하라.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>문자열 분할</title>
  </head>
  <body>
    <h3>문자열 분할</h3>
    <hr />
    <script>
      let text = prompt("문자열 입력");

      if (text != null) {
        let words = text.split("&");

        for (let i = 0; i < words.length; i++) {
          document.write(words[i] + "<br>");
        }
      }
    </script>
  </body>
</html>
```

---

## 7. 다음과 같이 색 이름을 가진 문자열 배열 colorNames를 만들고, 문자열을 `<div>` 태그로 출력하라. `<div>` 태그의 배경색은 해당 색으로 칠하라.

```javascript
let colorNames = [
  "maroon",
  "red",
  "orange",
  "yellow",
  "olive",
  "purple",
  "fuchsia",
  "white",
  "lime",
  "green",
  "navy",
  "blue",
  "aqua",
  "teal",
  "black",
  "silver",
  "gray",
];
```

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>17개의 CSS2 색이름과 색</title>
    <style>
      div {
        display: inline-block;
        width: 60px;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <h3>17개의 CSS2 색이름과 색</h3>
    <hr />
    <script>
      let colorNames = [
        "maroon",
        "red",
        "orange",
        "yellow",
        "olive",
        "purple",
        "fuchsia",
        "white",
        "lime",
        "green",
        "navy",
        "blue",
        "aqua",
        "teal",
        "black",
        "silver",
        "gray",
      ];

      for (let i = 0; i < colorNames.length; i++) {
        document.write("<div style='background-color:" + colorNames[i] + "'>");
        document.write(colorNames[i] + "</div>");

        if ((i + 1) % 6 == 0) document.write("<br>");
      }
    </script>
  </body>
</html>
```

---

## 8. 다음 브라우저 화면과 같이, document.write()를 이용하여 16개의 `<div>` 태그를 출력하고 각 `<div>` 태그에 출력되는 배경색을 랜덤한 색으로 칠하는 웹 페이지를 작성하라. 웹 페이지를 로드할 때마다 색이 랜덤하게 바뀐다.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>Math.random()으로 랜덤한 색 만들기</title>
    <style>
      div {
        display: inline-block;
        width: 150px;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <h3>16개의 랜덤한 색 만들기</h3>
    <hr />
    <script>
      for (let i = 0; i < 16; i++) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let color = "rgb(" + r + "," + g + "," + b + ")";

        document.write("<div style='background-color:" + color + "'>");
        document.write(color + "</div>");

        if ((i + 1) % 4 == 0) document.write("<br>");
      }
    </script>
  </body>
</html>
```

---

## 9. book 객체를 만들려고 한다. 이 객체는 title, author, price의 3개의 프로퍼티로 구성되며 각 프로퍼티는 “HTML5”, “황기태”, 20000으로 각각 초기화된다.

### (1) new Object()를 이용하여 book 객체를 작성하고 객체를 출력하라.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>book 객체 만들기</title>
  </head>
  <body>
    <h3>book 객체 만들기</h3>
    <hr />
    <script>
      let book = new Object();
      book.title = "HTML5";
      book.author = "황기태";
      book.price = 20000;

      document.write(
        "book : " + book.title + ", " + book.author + ", " + book.price,
      );
    </script>
  </body>
</html>
```

### (2) 리터럴 표기법으로 book 객체를 작성하고 객체를 출력하라.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>book 객체 만들기</title>
  </head>
  <body>
    <h3>book 객체 만들기</h3>
    <hr />
    <script>
      let book = {
        title: "HTML5",
        author: "황기태",
        price: 20000,
      };

      document.write(
        "book : " + book.title + ", " + book.author + ", " + book.price,
      );
    </script>
  </body>
</html>
```

### (3) 프로토타입 Book을 작성하고 book 객체를 출력하라.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>book 객체 만들기</title>
  </head>
  <body>
    <h3>book 객체 만들기</h3>
    <hr />
    <script>
      function Book(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
      }

      let book = new Book("HTML5", "황기태", 20000);

      document.write(
        "book : " + book.title + ", " + book.author + ", " + book.price,
      );
    </script>
  </body>
</html>
```

---

## 10. 문제 9의 (1)에서 new Object()를 이용하여 생성한 book 객체를 이용하여 book의 객체 배열 bookArray를 생성하고, 다음과 같이 prompt() 함수를 통해 5개 책 정보를 입력받은 후 가장 비싼 책의 이름을 출력하는 웹 페이지를 작성하라.

**정답:**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>book 객체 배열 만들기</title>
  </head>
  <body>
    <h3>book 객체 배열 만들기</h3>
    <hr />
    <script>
      let bookArray = [];

      for (let i = 0; i < 5; i++) {
        let input = prompt("콤마(,)로 분리하면서 책제목 저자 가격 순으로 입력");
        let info = input.split(",");

        let book = new Object();
        book.title = info[0];
        book.author = info[1];
        book.price = parseInt(info[2]);

        bookArray[i] = book;
      }

      for (let i = 0; i < bookArray.length; i++) {
        document.write(bookArray[i].title + ", ");
        document.write(bookArray[i].author + ", ");
        document.write(bookArray[i].price + "<br>");
      }

      let expensive = bookArray[0];
      for (let i = 1; i < bookArray.length; i++) {
        if (bookArray[i].price > expensive.price) expensive = bookArray[i];
      }

      document.write("<hr>");
      document.write("가장 가격이 비싼 책은 " + expensive.title);
    </script>
  </body>
</html>
```
