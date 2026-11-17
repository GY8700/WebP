# 10장 윈도우와 브라우저 관련 객체 — 실습문제

---

## 1. 다음과 같은 웹 페이지가 있다. 이 웹 페이지가 로드될 때, ‘접속 감사합니다!’라는 문장을 담은 200×80 크기의 새 윈도우를 별도로 출력하도록 웹 페이지를 수정하라.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>HTML5</title>
  </head>
  <body>
    <h3>HTML5</h3>
    <hr />
    <p>
      HTML5를 학습하는 사이트입니다. 여기서 HTML5, CSS3, 자바스크립트를 배울 수
      있습니다.
    </p>
  </body>
</html>
```

**정답:**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>HTML5</title>
    <script>
      let win = null;

      function openWelcome() {
        win = window.open("", "", "width=200,height=80");
        if (win == null) {
          alert("팝업이 차단되었습니다.");
          return;
        }
        win.document.open();
        win.document.write("접속 감사합니다!");
        win.document.close();
      }
    </script>
  </head>
  <body onload="openWelcome()">
    <h3>HTML5</h3>
    <hr />
    <p>
      HTML5를 학습하는 사이트입니다. 여기서 HTML5, CSS3, 자바스크립트를 배울 수
      있습니다.
    </p>
  </body>
</html>
```

`<body>`의 `onload` 리스너에서 `window.open()`으로 새 윈도우를 연다. 첫 번째 인수(URL)를 빈 문자열로 주면 `about:blank`인 빈 윈도우가 열리고, 세 번째 인수로 크기를 지정한다.

`window.open()`은 새 윈도우 객체를 반환하므로 `win.document.write()`로 새 윈도우에 내용을 출력할 수 있다. 출력이 끝나면 `win.document.close()`를 호출하여 문서 작성을 마친다.

※ 사용자의 클릭 없이 페이지 로드 시점에 여는 윈도우는 브라우저의 팝업 차단 기능에 막힐 수 있다. 이때 `window.open()`은 `null`을 반환하므로, 주소창의 팝업 차단 아이콘을 눌러 `localhost`의 팝업을 허용한 뒤 다시 실행한다. 또한 브라우저마다 윈도우의 최소 크기가 있어서 실제 창은 200×80보다 조금 크게 열릴 수 있다.

---

## 2. 문제 1의 코드를 수정하여보자.

### (1) 새 윈도우가 스크린 장치를 기준으로 (500, 400)에 출력되게 하라.

### (2) 새 윈도우의 타이틀을 ‘환영’으로, 바탕색을 yellowgreen으로 출력되도록 하라.

**정답:**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>HTML5</title>
    <script>
      let win = null;

      function openWelcome() {
        // (1) 스크린 기준 (500, 400) 위치에 출력
        win = window.open("", "", "left=500,top=400,width=200,height=80");
        if (win == null) {
          alert("팝업이 차단되었습니다.");
          return;
        }
        win.document.open();
        win.document.write("접속 감사합니다!<br>열심히 하세요!");

        // (2) write()가 실행된 후에 타이틀과 바탕색 지정
        win.document.title = "환영";
        win.document.body.style.backgroundColor = "yellowgreen";

        win.document.close();
      }
    </script>
  </head>
  <body onload="openWelcome()">
    <h3>HTML5</h3>
    <hr />
    <p>
      HTML5를 학습하는 사이트입니다. 여기서 HTML5, CSS3, 자바스크립트를 배울 수
      있습니다.
    </p>
  </body>
</html>
```

(1) 윈도우의 위치는 `window.open()`의 세 번째 인수에 `left`와 `top`으로 지정한다. 이 값은 스크린의 왼쪽 위 모서리를 기준으로 한 좌표이다.

```text
left=500,top=400,width=200,height=80
```

(2) 새 윈도우의 타이틀은 `win.document.title`, 바탕색은 `win.document.body.style.backgroundColor`로 지정한다. `write()`가 실행되기 전에는 새 윈도우의 `body` 객체가 아직 없을 수 있으므로, 반드시 `write()`를 한 번 이상 실행한 후에 지정해야 한다.

---

## 3. 옵션을 선택하면 옵션에 주어진 사이트에 접속하는 웹 페이지를 작성하고자 한다.

### (1) 옵션을 선택될 때마다 새 윈도우를 하나씩 열고 사이트를 접속하는 웹 페이지를 작성하라.

**정답:**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>사이트 접속</title>
    <script>
      function openSite(select) {
        let url = select.value;
        if (url == "") return; // "선택하세요" 옵션은 무시

        // 윈도우 이름이 "_blank"이므로 선택할 때마다 새 윈도우가 열린다.
        window.open(url, "_blank", "width=600,height=500");

        select.selectedIndex = 0; // 같은 사이트를 다시 선택할 수 있도록 초기화
      }
    </script>
  </head>
  <body>
    <h3>옵션 선택으로 사이트 접속</h3>
    <p>옵션 선택 마다 새 윈도우에 접속합니다.</p>
    <hr />
    <p>접속할 사이트</p>
    <select onchange="openSite(this)">
      <option value="">선택하세요</option>
      <option value="https://www.naver.com">네이버</option>
      <option value="https://www.google.com">구글</option>
      <option value="https://www.oracle.com">오라클</option>
    </select>
  </body>
</html>
```

`<select>`에서 옵션을 선택하면 `change` 이벤트가 발생하므로 `onchange` 리스너에서 `window.open()`을 호출한다. 각 `<option>`의 `value`에 사이트 주소를 넣어 두면 `select.value`로 선택된 주소를 알 수 있다.

윈도우 이름을 `"_blank"`로 지정하면 호출할 때마다 새 윈도우가 열린다.

※ `change` 이벤트는 선택된 값이 바뀔 때만 발생한다. 그래서 첫 옵션을 "선택하세요"로 두고, 윈도우를 연 뒤에 `selectedIndex`를 0으로 되돌렸다. 이렇게 하면 방금 선택한 사이트를 다시 선택해도 새 윈도우가 열린다.

### (2) 새 윈도우는 한 개만 열고, 옵션 선택시 이 윈도우를 공유하도록 웹 페이지를 작성하라.

**정답:**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>사이트 접속</title>
    <script>
      let win = null;

      function openSite(select) {
        let url = select.value;
        if (url == "") return;

        // 같은 이름("siteWin")을 사용하므로 이미 열린 윈도우가 있으면 그 윈도우에 출력된다.
        win = window.open(url, "siteWin", "width=600,height=500");
        if (win != null) win.focus(); // 공유 윈도우를 앞으로 가져오기

        select.selectedIndex = 0;
      }
    </script>
  </head>
  <body>
    <h3>옵션 선택으로 사이트 접속</h3>
    <p>옵션 선택 마다 하나의 윈도우를 공유하여 접속합니다.</p>
    <hr />
    <p>접속할 사이트</p>
    <select onchange="openSite(this)">
      <option value="">선택하세요</option>
      <option value="https://www.naver.com">네이버</option>
      <option value="https://www.google.com">구글</option>
      <option value="https://www.oracle.com">오라클</option>
    </select>
  </body>
</html>
```

`window.open()`의 두 번째 인수인 윈도우 이름을 항상 같게(`"siteWin"`) 지정한다. 같은 이름의 윈도우가 이미 열려 있으면 새 윈도우를 만들지 않고 그 윈도우에 사이트를 출력하므로, 하나의 윈도우를 공유하게 된다.

| 구분 | 윈도우 이름 | 동작                             |
| ---- | ----------- | -------------------------------- |
| (1)  | `"_blank"`  | 선택할 때마다 새 윈도우 생성     |
| (2)  | `"siteWin"` | 같은 이름의 윈도우 하나를 재사용 |

※ 일부 실제 사이트는 보안 정책(Cross-Origin-Opener-Policy) 때문에 윈도우 이름 연결이 끊어져 새 윈도우가 다시 열릴 수 있다. 공유 동작이 이상하면 다른 사이트나 로컬 HTML 파일 주소로 테스트해 보면 된다.

---

## 4. 웹 페이지를 로드하자마자 크롬 브라우저인지를 판단하여 다음과 같이 alert()로 출력하는 웹 페이지를 작성하라.

**정답:**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>HTML5</title>
    <script>
      window.onload = function () {
        let ua = navigator.userAgent;
        let vendor = navigator.vendor;

        let isChrome =
          ua.indexOf("Chrome") != -1 && // userAgent에 "Chrome" 포함
          vendor.indexOf("Google Inc.") != -1 && // vendor가 "Google Inc."
          ua.indexOf("Edg") == -1 && // 마이크로소프트 엣지 제외
          ua.indexOf("OPR") == -1; // 오페라 제외

        if (isChrome) alert("구글 Chrome 브라우저입니다.");
        else alert("구글 Chrome 브라우저가 아닙니다.");
      };
    </script>
  </head>
  <body>
    <h3>구글 Chrome 브라우저 감별</h3>
    <hr />
    <p>
      웹 브라우저에 따라 지원되는 자바스크립트들이 다를 수도 있습니다. DOM의
      기능은 표준화되어 있어 동일하지만, BOM 객체들은 많이 다릅니다. 얼른 모두
      표준화되었으면 하지만 독창적인 기능으로 승부하고자 하여 쉽지는 않을 것
      같습니다.
    </p>
  </body>
</html>
```

크롬에서는 `navigator.userAgent`에 `"Chrome"`이, `navigator.vendor`에 `"Google Inc."`가 들어 있다. 두 문자열을 `indexOf()`로 검사하여 둘 다 있으면 크롬으로 판단한다.

※ 마이크로소프트 엣지나 오페라도 크롬과 같은 엔진을 사용하므로 `userAgent`에 `"Chrome"`이 들어 있고, `vendor`도 `"Google Inc."`이다. 그래서 엣지의 `"Edg"`, 오페라의 `"OPR"` 문자열이 있으면 크롬이 아닌 것으로 처리했다. 교재 힌트처럼 두 조건만 검사해도 크롬에서는 정상적으로 동작한다.

---

## 5. setTimeout()과 clearTimeout()을 이용하여 `<div>` 태그에 시계를 구현하라. 웹 페이지가 로드되면 즉각 현재 시각에서부터 시계가 가기 시작한다. 현재 시각 값은 new Date()로 얻으면 된다.

**정답:**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>setTimeout()/clearTimeout()으로 시계 만들기</title>
    <style>
      #clock {
        display: inline-block;
        width: 110px;
        padding: 2px 4px;
        border: 1px solid gray;
      }
    </style>
    <script>
      let timerId = null;

      function showTime() {
        clearTimeout(timerId); // 이전 타이머가 남아 있으면 해제(중복 실행 방지)

        let now = new Date();
        document.getElementById("clock").innerHTML =
          now.toLocaleTimeString("ko-KR"); // 예: 오후 3:57:20

        timerId = setTimeout(showTime, 1000); // 1초 후 다시 실행
      }

      window.onload = showTime; // 로드되자마자 시계 시작
    </script>
  </head>
  <body>
    <h3>div 태그에 시계 만들기</h3>
    <hr />
    <div id="clock"></div>
  </body>
</html>
```

`setTimeout()`은 지정한 시간 후에 함수를 **한 번만** 실행한다. 그래서 `showTime()` 안에서 다시 `setTimeout(showTime, 1000)`을 호출하여 1초마다 시각이 갱신되게 한다.

```text
onload → showTime() → 1초 후 showTime() → 1초 후 showTime() → ...
```

`showTime()`이 여러 번 호출되면 타이머가 겹쳐서 실행될 수 있으므로, 시작할 때 `clearTimeout(timerId)`로 이전 타이머를 해제한다. `toLocaleTimeString("ko-KR")`은 시각을 `"오후 3:57:20"`과 같은 한국어 형식의 문자열로 반환한다.

---

## 6. setInterval()과 clearInterval()을 이용하여 `<div>` 태그에 시계를 구현하라. 시계 위를 클릭하면 시계가 멈추고 클릭하면 현재 시각부터 시계가 다시 가도록 하라.

**정답:**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>setInterval()/clearInterval()으로 시계 만들기</title>
    <style>
      #clock {
        display: inline-block;
        width: 110px;
        padding: 2px 4px;
        border: 1px solid gray;
        cursor: pointer;
      }
    </style>
    <script>
      let timerId = null; // null이면 시계가 멈춘 상태
      let clock;

      function showTime() {
        clock.innerHTML = new Date().toLocaleTimeString("ko-KR");
      }

      function startClock() {
        showTime(); // 클릭 즉시 현재 시각 출력
        timerId = setInterval(showTime, 1000);
        clock.style.color = ""; // 원래 글자색
      }

      function stopClock() {
        clearInterval(timerId);
        timerId = null;
        clock.style.color = "lightgray"; // 멈춘 시계는 흐리게
      }

      window.onload = function () {
        clock = document.getElementById("clock");
        startClock();

        clock.onclick = function () {
          if (timerId == null) startClock();
          else stopClock();
        };
      };
    </script>
  </head>
  <body>
    <h3>div 태그에 시계 만들기</h3>
    <p>시계를 클릭하면 시계가 멈추고 다시 클릭하면 가기 시작한다.</p>
    <hr />
    <div id="clock"></div>
  </body>
</html>
```

`setInterval()`은 지정한 시간 간격으로 함수를 **반복** 실행하므로, `setTimeout()`과 달리 함수 안에서 타이머를 다시 설정할 필요가 없다.

`timerId`가 `null`인지로 시계 상태를 구분한다.

| 클릭 전 상태                    | 클릭 시 동작                                          |
| ------------------------------- | ----------------------------------------------------- |
| 시계가 가는 중 (`timerId` 있음) | `clearInterval()`로 멈추고 글자를 흐리게 표시         |
| 멈춘 상태 (`timerId == null`)   | 현재 시각을 바로 출력하고 `setInterval()`로 다시 시작 |

다시 시작할 때 `showTime()`을 먼저 호출해야 1초를 기다리지 않고 바로 현재 시각으로 바뀐다.

---

## 7. 수식을 출력하고 사용자로부터 답을 받아 채점하는 웹 페이지를 만들고자 한다.

### (1) 다음과 같이 정해진 수식을 주고 사용자가 입력 창에 입력하고 채점 버튼을 클릭하면 맞은 개수를 출력한다. 답이 틀리면 문제 위에 줄을 긋는다. 수식은 웹 페이지 내에 HTML 태그로 작성한 수식이다.

**정답:**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>산수를 풀어 봅시다</title>
    <style>
      .expr {
        display: inline-block;
        width: 60px;
      }
      .row {
        margin: 4px 0;
      }
    </style>
    <script>
      function grade() {
        let exprs = document.getElementsByClassName("expr");
        let answers = document.getElementsByClassName("answer");
        let count = 0;

        for (let i = 0; i < exprs.length; i++) {
          // 페이지에 작성된 수식을 계산하여 정답을 구한다.
          let correct = eval(exprs[i].textContent);
          let input = answers[i].value.trim();

          if (input != "" && Number(input) == correct) {
            count++;
            exprs[i].style.textDecoration = "none";
          } else {
            exprs[i].style.textDecoration = "line-through"; // 틀리면 줄 긋기
          }
        }
        document.getElementById("score").innerHTML = count;
      }
    </script>
  </head>
  <body>
    <h3>산수 문제를 풀어 봅시다.</h3>
    <p>수식을 계산하여 답을 입력하고 채점 버튼을 누르세요.</p>
    <hr />
    <div class="row">
      <span class="expr">5*6</span><input class="answer" type="text" size="8" />
    </div>
    <div class="row">
      <span class="expr">7+5*3</span
      ><input class="answer" type="text" size="8" />
    </div>
    <div class="row">
      <span class="expr">23*2</span
      ><input class="answer" type="text" size="8" />
    </div>
    <div class="row">
      <span class="expr">35-7</span
      ><input class="answer" type="text" size="8" />
    </div>
    <button onclick="grade()">채점</button>
    <span id="score">0</span>
  </body>
</html>
```

수식을 `class="expr"`인 `<span>`에, 답을 입력하는 창을 `class="answer"`인 `<input>`에 작성하고 `getElementsByClassName()`으로 순서대로 가져온다.

`eval()`은 문자열로 된 수식을 계산하므로 `eval("7+5*3")`은 `22`가 된다. 여기서는 사용자가 입력한 값이 아니라 개발자가 페이지에 작성한 수식만 계산하므로 `eval()`을 써도 된다.

틀린 문제는 `style.textDecoration`을 `"line-through"`로 지정하여 줄을 긋는다. 빈 칸이나 `"사십6"`처럼 숫자가 아닌 입력은 오답으로 처리된다.

### (2) 문제 (1)을 보완하여 처음부터 사칙 연산 문제를 랜덤하게 생성하고, 다시 버튼을 누를 때마다 문제가 만들어지도록 웹 페이지를 작성하라.

**정답:**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>산수를 풀어 봅시다</title>
    <style>
      .expr {
        display: inline-block;
        width: 60px;
      }
      .row {
        margin: 4px 0;
      }
    </style>
    <script>
      let correctAnswers = []; // 각 문제의 정답

      // min 이상 max 이하의 랜덤 정수
      function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      function makeQuestions() {
        let exprs = document.getElementsByClassName("expr");
        let answers = document.getElementsByClassName("answer");
        let ops = ["+", "-", "*", "/"];

        for (let i = 0; i < exprs.length; i++) {
          let a = rand(1, 20);
          let b = rand(1, 20); // 0이 나오지 않으므로 나누기도 안전
          let op = ops[rand(0, 3)];

          // 빼기와 나누기는 큰 수가 앞에 오도록 교환
          if ((op == "-" || op == "/") && a < b) {
            let tmp = a;
            a = b;
            b = tmp;
          }

          let answer;
          switch (op) {
            case "+":
              answer = a + b;
              break;
            case "-":
              answer = a - b;
              break;
            case "*":
              answer = a * b;
              break;
            case "/":
              answer = parseInt(a / b);
              break; // 나누기 결과는 정수
          }

          exprs[i].textContent = a + op + b;
          exprs[i].style.textDecoration = "none";
          answers[i].value = "";
          correctAnswers[i] = answer;
        }
        document.getElementById("score").innerHTML = 0;
      }

      function grade() {
        let exprs = document.getElementsByClassName("expr");
        let answers = document.getElementsByClassName("answer");
        let count = 0;

        for (let i = 0; i < exprs.length; i++) {
          let input = answers[i].value.trim();
          if (input != "" && Number(input) == correctAnswers[i]) {
            count++;
            exprs[i].style.textDecoration = "none";
          } else {
            exprs[i].style.textDecoration = "line-through";
          }
        }
        document.getElementById("score").innerHTML = count;
      }

      window.onload = makeQuestions; // 처음부터 랜덤 문제 생성
    </script>
  </head>
  <body>
    <h3>산수 문제를 풀어 봅시다.</h3>
    <p>
      자동으로 문제가 만들어집니다. 답 입력 후 채점 버튼을 누르세요. 다시 버튼을
      누르면 새로운 문제가 출력됩니다. 나누기 결과는 정수입니다.
    </p>
    <hr />
    <div class="row">
      <span class="expr"></span><input class="answer" type="text" size="8" />
    </div>
    <div class="row">
      <span class="expr"></span><input class="answer" type="text" size="8" />
    </div>
    <div class="row">
      <span class="expr"></span><input class="answer" type="text" size="8" />
    </div>
    <div class="row">
      <span class="expr"></span><input class="answer" type="text" size="8" />
    </div>
    <button onclick="grade()">채점</button>
    <span id="score">0</span>
    <button onclick="makeQuestions()">다시</button>
  </body>
</html>
```

`Math.random()`으로 1~20 사이의 두 수와 연산자를 랜덤하게 골라 문제를 만든다. 문제를 만들 때 정답을 `correctAnswers` 배열에 저장해 두므로, 채점할 때 `eval()`을 사용하지 않아도 된다.

나누기 결과는 정수이므로 `parseInt(a / b)`로 소수점 이하를 버린다. 예를 들어 `9/6`의 정답은 `1`이다.

```text
"다시" 클릭 → 새 문제 생성, 입력 창 비우기, 줄 지우기, 맞은 개수 0으로 초기화
```

※ 빼기의 답이 음수가 되거나 나누기의 답이 0이 되지 않도록, 빼기와 나누기에서는 큰 수가 앞에 오도록 두 수를 바꿨다.

---

## 8. 문제 7을 수정해보자. 10초의 시간이 지나면 자동으로 채점하도록 웹 페이지를 작성하라. 다시 버튼을 누르면 새 문제가 주어진다.

**정답:**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>산수를 풀어 봅시다</title>
    <style>
      .expr {
        display: inline-block;
        width: 60px;
      }
      .row {
        margin: 4px 0;
      }
    </style>
    <script>
      const LIMIT = 10; // 제한 시간(초)
      let correctAnswers = [];
      let remain = LIMIT; // 남은 시간
      let timerId = null;

      function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      function makeQuestions() {
        let exprs = document.getElementsByClassName("expr");
        let answers = document.getElementsByClassName("answer");
        let ops = ["+", "-", "*", "/"];

        for (let i = 0; i < exprs.length; i++) {
          let a = rand(1, 20);
          let b = rand(1, 20);
          let op = ops[rand(0, 3)];

          if ((op == "-" || op == "/") && a < b) {
            let tmp = a;
            a = b;
            b = tmp;
          }

          let answer;
          switch (op) {
            case "+":
              answer = a + b;
              break;
            case "-":
              answer = a - b;
              break;
            case "*":
              answer = a * b;
              break;
            case "/":
              answer = parseInt(a / b);
              break;
          }

          exprs[i].textContent = a + op + b;
          exprs[i].style.textDecoration = "none";
          answers[i].value = "";
          answers[i].readOnly = false; // 다시 입력할 수 있도록
          correctAnswers[i] = answer;
        }
        document.getElementById("score").innerHTML = 0;
      }

      function grade() {
        let exprs = document.getElementsByClassName("expr");
        let answers = document.getElementsByClassName("answer");
        let count = 0;

        for (let i = 0; i < exprs.length; i++) {
          let input = answers[i].value.trim();
          if (input != "" && Number(input) == correctAnswers[i]) {
            count++;
            exprs[i].style.textDecoration = "none";
          } else {
            exprs[i].style.textDecoration = "line-through";
          }
          answers[i].readOnly = true; // 채점 후에는 수정 불가
        }
        document.getElementById("score").innerHTML = count;
      }

      function tick() {
        remain--;
        document.getElementById("remain").innerHTML = remain;

        if (remain <= 0) {
          clearInterval(timerId); // 타이머 중지
          timerId = null;
          grade(); // 자동 채점
        }
      }

      function newGame() {
        clearInterval(timerId); // 진행 중인 타이머가 있으면 중지
        makeQuestions();
        remain = LIMIT;
        document.getElementById("remain").innerHTML = remain;
        timerId = setInterval(tick, 1000); // 1초마다 남은 시간 감소
      }

      window.onload = newGame;
    </script>
  </head>
  <body>
    <h3>산수 문제를 풀어 봅시다.</h3>
    <p>
      문제는 자동으로 생성되며, 10초가 지나면 자동 채점됩니다.<br />
      남은 시간 <span id="remain">10</span>
    </p>
    <hr />
    <div class="row">
      <span class="expr"></span><input class="answer" type="text" size="8" />
    </div>
    <div class="row">
      <span class="expr"></span><input class="answer" type="text" size="8" />
    </div>
    <div class="row">
      <span class="expr"></span><input class="answer" type="text" size="8" />
    </div>
    <div class="row">
      <span class="expr"></span><input class="answer" type="text" size="8" />
    </div>
    <button onclick="newGame()">다시</button>
    <span id="score">0</span>
  </body>
</html>
```

문제 7(2)의 코드에서 채점 버튼을 없애고, `setInterval()`로 1초마다 `tick()`을 실행하여 남은 시간을 1씩 줄인다. 남은 시간이 0이 되면 `clearInterval()`로 타이머를 멈추고 `grade()`를 호출하여 자동으로 채점한다.

```text
newGame() → 남은 시간 10 → 9 → ... → 0 → 타이머 중지 → 자동 채점
```

다시 버튼을 누르면 `newGame()`이 실행된다. 이때 먼저 `clearInterval()`로 진행 중이던 타이머를 멈추지 않으면 타이머가 두 개 동시에 돌아가 남은 시간이 2초씩 줄어들므로 주의해야 한다.

※ 채점이 끝난 뒤 답을 고칠 수 없도록 입력 창을 `readOnly`로 바꾸고, 새 문제를 만들 때 다시 입력할 수 있게 되돌렸다.

---

## 9. 스크린의 해상도가 1280\*1024보다 작은 경우, 웹 페이지가 로드되자마자 “스크린 해상도가 낮습니다!”라고 경고 창을 출력하는 웹 페이지를 작성하라.

**정답:**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>screen 객체</title>
    <script>
      window.onload = function () {
        if (screen.width < 1280 || screen.height < 1024) {
          alert("스크린 해상도가 낮습니다!");
        }
      };
    </script>
  </head>
  <body>
    <h3>screen 객체 활용</h3>
    <hr />
    <p>
      스크린의 해상도가 1280x1024 보다 작은 경우 웹 페이지가 정상적으로 출력되지
      않을 수 있음을 알리는 경고창을 출력한다.
    </p>
  </body>
</html>
```

스크린의 해상도는 `screen` 객체의 `width`와 `height` 프로퍼티로 알 수 있다. 가로가 1280보다 작거나 세로가 1024보다 작으면 해상도가 낮은 것으로 판단한다.

| 프로퍼티        | 의미                     |
| --------------- | ------------------------ |
| `screen.width`  | 스크린의 가로 크기(픽셀) |
| `screen.height` | 스크린의 세로 크기(픽셀) |

※ `screen.width`와 `screen.height`는 운영체제의 화면 배율이 적용된 값이다. 예를 들어 1920×1080 모니터라도 배율이 125%이면 1536×864로 계산되어 경고창이 출력될 수 있다.
