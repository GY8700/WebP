# 10장 윈도우와 브라우저 관련 객체 — 이론문제

---

## 1. 브라우저에 의해 제공되는 BOM 객체들은 계층 관계로 이루어진다. 계층의 최상위에 있는 객체는 무엇인가?

① document  
② window  
③ body  
④ html

**정답: ②**

BOM 객체들은 `window` 객체를 최상위로 하는 계층 구조를 이룬다. `document`, `navigator`, `location`, `history`, `screen` 등은 모두 `window` 객체의 프로퍼티로 존재한다.

```text
window
├── document
├── navigator
├── location
├── history
└── screen
```

`body`와 `html`은 BOM 객체가 아니라 DOM 트리를 구성하는 HTML 요소이다.

---

## 2. 다음 객체들 중 특징이 다른 하나를 골라라.

① document  
② navigator  
③ div  
④ span

**정답: ②**

`navigator`는 브라우저 정보를 제공하는 BOM 객체이다. 반면 `document`, `div`, `span`은 HTML 문서를 구성하는 DOM 객체이다.

| 보기 | 객체        | 분류 |
| ---- | ----------- | ---- |
| ①    | `document`  | DOM  |
| ②    | `navigator` | BOM  |
| ③    | `div`       | DOM  |
| ④    | `span`      | DOM  |

`document`는 `window.document`로 접근하므로 BOM 계층에도 속하지만, DOM 트리의 최상위 객체로서 HTML 문서를 다룬다는 점에서 DOM 객체로 분류한다.

---

## 3. 다음 지시에 따라 window.open() 함수를 작성하라.

`window.open()`의 형식은 다음과 같다.

```javascript
window.open("URL", "윈도우 이름", "윈도우 속성");
```

### (1) 이름이 win인 새 윈도우를 열어 test.html을 출력한다.

**정답:**

```javascript
window.open("test.html", "win");
```

두 번째 인수로 윈도우 이름 `"win"`을 지정한다. 같은 이름의 윈도우가 이미 열려 있으면 새로 열지 않고 그 윈도우에 `test.html`을 출력한다.

### (2) 현재 윈도우에 구글 웹 페이지를 출력한다.

**정답:**

```javascript
window.open("http://www.google.com", "_self");
```

윈도우 이름에 `"_self"`를 지정하면 새 윈도우를 열지 않고 현재 윈도우에 웹 페이지를 출력한다.

### (3) 크기가 400×500인 새 윈도우에 네이버 페이지를 출력한다.

**정답:**

```javascript
window.open("http://www.naver.com", "_blank", "width=400,height=500");
```

세 번째 인수에 `width`와 `height`로 윈도우 크기를 지정한다. 속성 문자열은 콤마(`,`)로 구분한다.

### (4) 스크린의 왼쪽 상단 모서리에 위치하는 새 윈도우를 열고, test.html을 출력한다.

**정답:**

```javascript
window.open("test.html", "_blank", "left=0,top=0");
```

`left`와 `top`은 스크린을 기준으로 한 윈도우의 위치이다. 스크린의 왼쪽 상단 모서리는 `(0, 0)`이므로 둘 다 `0`으로 지정한다.

---

## 4. window.open()을 이용하여 다음 조건에 맞게 윈도우를 여는 코드를 작성하라.

### (1) 스크린의 (100,100) 위치에 500×600 크기의 빈 윈도우 생성하라.

**정답:**

```javascript
window.open("", "", "left=100,top=100,width=500,height=600");
```

URL을 빈 문자열 `""`로 지정하면 아무 내용도 없는 빈 윈도우(`about:blank`)가 열린다. 위치는 `left`, `top`으로, 크기는 `width`, `height`로 지정한다.

### (2) 이름이 google인 윈도우를 열고 구글 웹 페이지를 출력하라.

**정답:**

```javascript
window.open("http://www.google.com", "google");
```

두 번째 인수가 윈도우 이름이다. 이후 같은 이름 `"google"`로 `window.open()`을 호출하면 새 윈도우를 만들지 않고 이 윈도우를 다시 사용한다.

---

## 5. 현재 브라우저 윈도우에 네이버 페이지를 로드하는 경우가 아닌 것은?

① `window.location.href = "http://www.naver.com";`  
② `window.location.assign("http://www.naver.com");`  
③ `window.location.reload("http://www.naver.com");`  
④ `window.location.replace("http://www.naver.com");`

**정답: ③**

`reload()`는 현재 윈도우에 출력된 웹 페이지를 다시 로드하는 메소드이다. URL을 인수로 받지 않으므로 네이버 페이지가 로드되지 않고 현재 페이지가 새로 고쳐진다.

| 보기 | 코드                    | 동작                                              |
| ---- | ----------------------- | ------------------------------------------------- |
| ①    | `location.href = URL`   | URL 페이지 로드                                   |
| ②    | `location.assign(URL)`  | URL 페이지 로드 (히스토리에 남음)                 |
| ③    | `location.reload()`     | 현재 페이지 다시 로드                             |
| ④    | `location.replace(URL)` | URL 페이지 로드 (현재 페이지를 히스토리에서 대체) |

`replace()`는 현재 페이지를 히스토리에 남기지 않으므로 뒤로 가기로 이전 페이지에 돌아갈 수 없다는 점이 `assign()`과 다르다.

---

## 6. 다음 중 브라우저에 어떤 플러그인이 설치되었는지 알아내는데 사용되는 객체는?

① navigator  
② browser  
③ window  
④ location

**정답: ①**

`navigator` 객체는 브라우저에 관한 정보를 제공하며, `navigator.plugins` 프로퍼티를 통해 설치된 플러그인 목록을 알아낼 수 있다.

```javascript
for (let i = 0; i < navigator.plugins.length; i++) {
  console.log(navigator.plugins[i].name);
}
```

`browser`라는 BOM 객체는 존재하지 않는다.

---

## 7. 다음 중 현재 윈도우에 출력된 웹 페이지를 다시 로드하는 코드가 아닌 것은?

① `window.location.reload();`  
② `location.reload();`  
③ `history.go(0);`  
④ `window.go(0);`

**정답: ④**

`window` 객체에는 `go()` 메소드가 없다. `go()`는 `history` 객체의 메소드이다.

- ①, ②: `location.reload()`는 현재 페이지를 다시 로드한다. `window.`는 생략할 수 있으므로 두 코드는 같다.
- ③: `history.go(n)`은 히스토리에서 `n`만큼 이동한다. `n`이 `0`이면 현재 페이지로 이동하므로 다시 로드하는 효과가 있다.

```javascript
history.go(-1); // 이전 페이지로 이동 (history.back()과 같음)
history.go(0); // 현재 페이지 다시 로드
history.go(1); // 다음 페이지로 이동 (history.forward()와 같음)
```

---

## 8. 다음 중 navigator 객체를 통해 알 수 없는 정보는?

① 위치 정보  
② 브라우저를 제작한 회사  
③ 웹 페이지의 주소  
④ 브라우저 이름

**정답: ③**

현재 웹 페이지의 주소(URL)는 `navigator`가 아니라 `location` 객체의 `href` 프로퍼티로 알아낸다.

| 보기 | 정보                   | 알아내는 방법           |
| ---- | ---------------------- | ----------------------- |
| ①    | 위치 정보              | `navigator.geolocation` |
| ②    | 브라우저를 제작한 회사 | `navigator.vendor`      |
| ③    | 웹 페이지의 주소       | `location.href`         |
| ④    | 브라우저 이름          | `navigator.appName`     |

---

## 9. window의 타이머를 활용하는 다음 코드가 있다. 이 코드를 잘 해석한 것은?

```javascript
let sum = 0;
function f() {
  sum++;
  if (sum == 10) clearInterval(id);
}
let id = setInterval("f()", 2);
```

① 2초마다 f() 함수가 10번 호출된다.  
② 2밀리초 후에 f() 함수가 1번 호출된다.  
③ 2밀리초 간격으로 f() 함수가 10번 호출된다.  
④ f() 함수가 1초 간격으로 2번 호출된다.

**정답: ③**

`setInterval()`의 두 번째 인수는 밀리초 단위의 시간 간격이다. 따라서 `f()`는 2밀리초 간격으로 반복 호출된다.

`f()`가 호출될 때마다 `sum`이 1씩 증가하고, `sum`이 `10`이 되면 `clearInterval(id)`로 타이머가 해제된다. 그러므로 `f()`는 모두 10번 호출된다.

```text
2ms → f() (sum=1)
4ms → f() (sum=2)
...
20ms → f() (sum=10) → clearInterval(id), 타이머 해제
```

※ 실제 브라우저는 타이머의 최소 간격을 제한하므로 정확히 2밀리초마다 호출되지 않을 수 있다. 문제에서는 코드에 작성된 의도대로 해석한다.

---

## 10. 문제 9에서 주어진 코드를 setTimeout()/clearTimeout()을 이용하여 다시 작성하라.

**정답:**

```javascript
let sum = 0;
let id = setTimeout("f()", 2);
function f() {
  sum++;
  if (sum == 10) {
    clearTimeout(id);
    return;
  }
  id = setTimeout("f()", 2);
}
```

`setTimeout()`은 지정한 시간 후에 함수를 한 번만 실행한다. 그러므로 `f()` 안에서 `setTimeout()`을 다시 호출하여 2밀리초 후에 `f()`가 또 실행되도록 해야 반복 효과를 얻을 수 있다.

`sum`이 `10`이 되면 `clearTimeout(id)`를 호출하고 `return`하여 더 이상 타이머를 설정하지 않는다. 그 결과 `f()`는 문제 9와 같이 2밀리초 간격으로 10번 호출된다.

| 구분      | `setInterval()`           | `setTimeout()`                       |
| --------- | ------------------------- | ------------------------------------ |
| 실행 횟수 | 지정한 간격으로 계속 반복 | 지정한 시간 후 한 번만 실행          |
| 반복 방법 | 자동 반복                 | 함수 안에서 `setTimeout()` 다시 호출 |
| 해제      | `clearInterval(id)`       | `clearTimeout(id)`                   |

※ `sum`이 `10`이 되는 시점에는 이미 타이머가 실행된 뒤이므로, 엄밀히는 `clearTimeout(id)` 없이 `return`만 해도 반복이 멈춘다. 문제에서 `clearTimeout()`을 사용하라고 했으므로 문제 9의 `clearInterval(id)`에 대응하도록 작성하였다.
