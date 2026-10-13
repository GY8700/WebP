# 6장 자바스크립트 기본 예제 소스 코드 모음

6장에 나온 예제 6-1부터 예제 6-24까지의 전체 HTML 및 자바스크립트 소스 코드입니다. 각 예제별 파일명대로 복사하여 깃허브(GitHub) 리포지토리에 올리실 수 있습니다.

---

### 예제 6-1: HTML 태그의 이벤트 리스너 속성에 자바스크립트 코드 작성 (`ex6-01.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>이벤트 리스너 속성에 자바스크립트 코드</title>
</head>
<body>
    <h3>마우스 올려 보세요</h3>
    <hr>
    <img src="media/apple.png" alt="이미지"
         onmouseover="this.src='media/banana.png'"
         onmouseout="this.src='media/apple.png'">
</body>
</html>
```

---

### 예제 6-2: <script> 태그에 자바스크립트 작성 (`ex6-02.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>script 태그에 자바스크립트 작성</title>
    <script>
        function over(obj) {
            obj.src="media/banana.png";
        }
        function out(obj) {
            obj.src="media/apple.png";
        }
    </script>
</head>
<body>
    <h3>마우스 올려 보세요</h3>
    <hr>
    <img src="media/apple.png" alt="이미지"
         onmouseover="over(this)"
         onmouseout="out(this)">
</body>
</html>
```

---

### 예제 6-3: 자바스크립트 파일 작성 및 불러오기

**`ex6-03.html`**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>외부 파일에 자바스크립트 작성</title>
    <script src="lib.js"></script>
</head>
<body>
    <h3>마우스 올려 보세요</h3>
    <hr>
    <img src="media/apple.png" alt="이미지"
         onmouseover="over(this)"
         onmouseout="out(this)">
</body>
</html>
```

**`lib.js`**
```javascript
/* 자바스크립트 파일 lib.js */
function over(obj) {
    obj.src="media/banana.png";
}
function out(obj) {
    obj.src="media/apple.png";
}
```

---

### 예제 6-4: 링크의 href에 자바스크립트 작성 (`ex6-04.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>URL에 자바스크립트 작성</title>
</head>
<body>
    <h3>링크의 href에 자바스크립트 작성</h3>
    <hr>
    <a href="javascript:alert('클릭하셨어요?')">클릭해보세요</a>
</body>
</html>
```

---

### 예제 6-5: document.write()로 HTML 콘텐츠 출력 (`ex6-05.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>document.write() 활용</title>
</head>
<body>
    <h3>document.write() 활용</h3>
    <hr>
    <script>
        document.write("<h3>Welcome!</h3>");
        document.write("2 + 5 는 <br>");
        document.write("<mark>7 입니다.</mark>");
    </script>
</body>
</html>
```

---

### 예제 6-6: 지역 변수와 전역 변수, 블록 변수 (`ex6-06.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>변수 선언</title>
</head>
<body>
    <h3>변수 선언, 전역/지역/블록 변수</h3>
    <hr>
    <script>
        let x; // 전역 변수 x 선언
        function f() {
            let y; // 지역 변수 y 선언
            x = 10; // 전역 변수 x에 10 저장
            y = 20; // 지역 변수 y에 20 저장
            z = 30; // 새로운 전역 변수 z가 선언되고 30 저장됨
            if(y == 20) {
                let b = 40; // if 블록에서만 사용되는 블록 변수 b 선언
                b++;
                document.write("if 블록 내 블록변수 b = " + b + "<br>");
            }
            document.write("함수 f() 내 지역변수 y = " + y + "<br>");
        }
        f(); // 함수 f() 호출
        document.write("전역변수 x = " + x + "<br>");
        document.write("전역변수 z = " + z);
    </script>
</body>
</html>
```

---

### 예제 6-7: 자바스크립트 리터럴 (`ex6-07.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>리터럴</title>
</head>
<body>
    <h3>리터럴</h3>
    <hr>
    <script>
        let oct = 015; // 8진수 015 (10진수로 13)
        let hex = 0x15; // 16진수 0x15 (10진수로 21)
        let condition = true;

        document.write("8진수 015는 십진수로 " + oct + "<br>");
        document.write("16진수 0x15는 십진수로 " + hex + "<br>");
        document.write("condition은 " + condition + "<br>");
        document.write('문자열 : 단일인용부호로도 표현' + "<br>");
        document.write("그녀는 "누구세요"라고 했습니다.");
    </script>
</body>
</html>
```

---

### 예제 6-8: 산술 연산 (`ex6-08.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>산술연산</title>
</head>
<body>
    <h3>산술연산</h3>
    <hr>
    <script>
        let x = 32;
        let total = 100 + x*2/4 - 3; // total은 113
        let div = x / 10; // div는 3.2
        let mod = x % 2; // x를 2로 나눈 나머지, 0

        document.write("x : " + x + "<br><br>");
        document.write("100 + x*2/4 - 3 = " + total + "<br>");
        document.write("x/10 = " + div + "<br>");
        document.write("x%2 = " + mod + "<br>");
    </script>
</body>
</html>
```

---

### 예제 6-9: 대입 연산 (`ex6-09.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>대입 연산</title>
</head>
<body>
    <h3>대입 연산</h3>
    <hr>
    <script>
        let x=3, y=3, z=3;
        document.write("x=" + x + ", y=" + y);
        document.write(", z=" + z + "<br><br>");

        x += 3; // x=x+3 -> x=6
        y *= 3; // y=y*3 -> y=9
        z %= 2; // z=z%2 -> z=1

        document.write("x += 3; 실행 후, x=" + x + "<br>");
        document.write("y *= 3; 실행 후, y=" + y + "<br>");
        document.write("z %= 2; 실행 후, z=" + z);
    </script>
</body>
</html>
```

---

### 예제 6-10: 비교 연산 (`ex6-10.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>비교 연산</title>
</head>
<body>
    <h3>비교 연산</h3>
    <hr>
    <script>
        let x=13, y=7;
        document.write("x=" + x + ", y=" + y + "<br><br>");
        document.write("x == y : " + (x == y) + "<br>");
        document.write("x != y : " + (x != y) + "<br>");
        document.write("x >= y : " + (x >= y) + "<br>");
        document.write("x > y : " + (x > y) + "<br>");
        document.write("x <= y : " + (x <= y) + "<br>");
        document.write("x < y : " + (x < y) + "<br>");
    </script>
</body>
</html>
```

---

### 예제 6-11: 논리 연산 (`ex6-11.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>논리 연산</title>
</head>
<body>
    <h3>논리 연산</h3>
    <hr>
    <script>
        let x=true, y=false;
        document.write("x=" + x + ", y=" + y + "<br><br>");
        document.write("x && y : "+ (x&&y) +"<br>");
        document.write("x || y : "+ (x||y) +"<br>");
        document.write("!x : " + (!x) +"<br>");
        document.write("<hr>");
        document.write("(3>2) && (3<4) : " + ((3>2)&&(3<4)) + "<br>");
        document.write("(3==-2) || (-1<0) : " + ((3==2)||(-1<0)));
    </script>
</body>
</html>
```

---

### 예제 6-12: 조건 연산 (`ex6-12.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>조건 연산</title>
</head>
<body>
    <h3>조건 연산</h3>
    <hr>
    <script>
        let a=3, b=5;
        document.write("a=" + a + ", b=" + b + "<br><br>");
        document.write("두수의 차이 : " + ((a>b)?(a-b):(b-a)));
    </script>
</body>
</html>
```

---

### 예제 6-13: 비트 논리 연산과 시프트 연산 (`ex6-13.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>비트 연산</title>
    <script>
        function digit8(v) { // 숫자 v를 8비트 2진수로 변환
            let str="";
            for(let i=0; i<8; i++, v<<=1) {
                if((v & 0x80)) str += "1";
                else str += "0";
            }
            return str;
        }
    </script>
</head>
<body>
    <h3>비트 논리 연산과 시프트 연산</h3>
    <hr>
    <script>
        let x=10, y=3;
        document.write("<pre>");
        document.write("x=" + x + ", y=" + y + "<br>");
        document.write("x : " + digit8(x) + "<br>");
        document.write("y : " + digit8(y) + "<br>");
        document.write("<hr>");
        document.write("x & y  : " + digit8(x&y) + "<br>");
        document.write("x | y  : " + digit8(x|y) + "<br>");
        document.write("x ^ y  : " + digit8(x^y) + "<br>");
        document.write("~x     : " + digit8(~x) + "<br>");
        document.write("<hr>");
        document.write("x << 1 : " + digit8(x<<1) + " (" + (x<<1) + ")<br>");
        document.write("x >> 1 : " + digit8(x>>1) + " (" + (x>>1) + ")<br>");
        document.write("x >>> 1: " + digit8(x>>>1) + " (" + (x>>>1) + ")");
        document.write("</pre>");
    </script>
</body>
</html>
```

---

### 예제 6-14: 문자열 연산 (`ex6-14.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>문자열 연산</title>
</head>
<body>
    <h3>문자열 연산</h3>
    <hr>
    <script>
        document.write("abc" + 23 + "<br>");
        document.write(23 + "abc" + "<br>");
        document.write(23 + "35" + "<br>");
        document.write(23 + 35 + "<br>");
        document.write(23 + 35 + "abc" + "<br>");
        document.write("abc" + 23 + 35 + "<br><hr>");

        let name = "kitae";
        document.write(name == "kitae");
        document.write("<br>");
        document.write(name > "park");
    </script>
</body>
</html>
```

---

### 예제 6-15: if-else 문을 이용한 학점 매기기 (`ex6-15.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>if-else</title>
</head>
<body>
    <h3>if-else를 이용한 학점 매기기</h3>
    <hr>
    <script>
        let grade;
        let score = prompt("황기태 님 점수를 입력하세요", 100);
        score = parseInt(score); // 문자열을 숫자로 바꿈

        if(score >= 90)
            grade = "A";
        else if(score >= 80)
            grade = "B";
        else if(score >= 70)
            grade = "C";
        else if(score >= 60)
            grade = "D";
        else
            grade = "F";

        document.write(score + "는 " + grade + "입니다.<br>");
    </script>
</body>
</html>
```

---

### 예제 6-16: switch 문으로 커피 주문 (`ex6-16.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>switch</title>
</head>
<body>
    <h3>switch 문으로 커피 주문</h3>
    <hr>
    <script>
        let price = 0;
        let coffee = prompt("무슨 커피 드릴까요?", "");

        switch(coffee) {
            case "espresso" :
            case "에스프레소" : price = 2000;
                break;
            case "카푸치노" : price = 3000;
                break;
            case "카페라떼" : price = 3500;
                break;
            default :
                document.write(coffee + "는 없습니다.");
        }
        if(price != 0)
            document.write(coffee + "는 " + price + "원입니다.");
    </script>
</body>
</html>
```

---

### 예제 6-17: for 문으로 10px~35px 크기 출력 (`ex6-17.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>for 문</title>
</head>
<body>
    <h3>for 문으로 10px~35px 크기 출력</h3>
    <hr>
    <script>
        for(let size=10; size<=35; size+=5) {
            document.write("<span ");
            document.write("style='font-size:" + size + "px'>");
            document.write(size + "px");
            document.write("</span>");
        }
    </script>
</body>
</html>
```

---

### 예제 6-18: while 문으로 0에서 n까지 합 구하기 (`ex6-18.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>while 문</title>
</head>
<body>
    <h3>while 문으로 0에서 n까지 합</h3>
    <hr>
    <script>
        let n = prompt("0보다 큰 정수를 입력하세요", 0);
        n = parseInt(n);

        let i=0, sum=0;
        while(i<=n) {
            sum += i;
            i++;
        }
        document.write("0에서 " + n + "까지 합은 " + sum);
    </script>
</body>
</html>
```

---

### 예제 6-19: do-while 문으로 0에서 n까지 합 구하기 (`ex6-19.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>do-while 문</title>
</head>
<body>
    <h3>do-while 문으로 0에서 n까지 합</h3>
    <hr>
    <script>
        let n = prompt("0보다 큰 정수를 입력하세요", 0);
        n = parseInt(n);

        let i=0, sum=0;
        do {
            sum += i;
            i++;
        } while(i<=n);

        document.write("0에서 " + n + "까지 합은 " + sum);
    </script>
</body>
</html>
```

---

### 예제 6-20: break 문 활용 (`ex6-20.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>break 문</title>
</head>
<body>
    <h3>1에서 얼마까지 더해야 3000을 넘는가?</h3>
    <hr>
    <script>
        let i=0, sum=0;
        while(true) {
            sum += i;
            if(sum > 3000)
                break;
            i++;
        }
        document.write(i + "까지 더하면 3000을 넘음 : " + sum);
    </script>
</body>
</html>
```

---

### 예제 6-21: continue 문 활용 (`ex6-21.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>continue 문</title>
</head>
<body>
    <h3>3으로 나눈 나머지가 1인 수만 더하기</h3>
    <hr>
    <script>
        let sum=0;
        for(let i=1; i<=10; i++) {
            if(i%3 != 1)
                continue;
            document.write(i + " ");
            sum += i;
        }
        document.write("합은 " + sum);
    </script>
</body>
</html>
```

---

### 예제 6-22: adder() 함수 작성 및 호출 (`ex6-22.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>함수</title>
    <script>
        function adder(a, b) {
            let sum;
            sum = a + b;
            return sum;
        }
    </script>
</head>
<body>
    <h3>함수 adder()</h3>
    <hr>
    <script>
        let n = adder(24567, 98374);
        document.write("24567 + 98374는 " + n + "<br>");
    </script>
</body>
</html>
```

---

### 예제 6-23: eval(), parseInt(), isNaN() 전역 함수 (`ex6-23.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>자바스크립트 전역함수</title>
    <script>
        function evalParseIntIsNaN() {
            let res = eval("2*3+4*6"); // res는 30
            document.write("eval("2*3+4*6")는 " + res + "<br>");
            let m = parseInt("32");
            document.write("parseInt("32")는 " + m + "<br>");
            let n = parseInt("0x32");
            document.write("parseInt("0x32")는 " + n + "<br><br>");

            n = parseInt("hello");
            if(isNaN(n))
                document.write("hello는 숫자가 아닙니다.");
        }
    </script>
</head>
<body>
    <h3>eval(), parseInt(), isNaN()</h3>
    <hr>
    <script>
        evalParseIntIsNaN();
    </script>
</body>
</html>
```

---

### 예제 6-24: 구구단 출력 함수 만들기 (`ex6-24.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>함수 만들기</title>
    <script>
        function gugudan(n) {
            let m = parseInt(n);
            if(isNaN(m) || m < 1 || m > 9) {
                alert("잘못입력하셨습니다.");
                return;
            }
            for(let i=1; i<=9; i++) {
                document.write(m + "x" + i + "=" + m*i + "<br>");
            }
        }
    </script>
</head>
<body>
    <h3>구구단 출력 함수 만들기</h3>
    <hr>
    <script>
        let n = prompt("구구단 몇 단을 원하세요", "");
        gugudan(n);
    </script>
</body>
</html>
```
