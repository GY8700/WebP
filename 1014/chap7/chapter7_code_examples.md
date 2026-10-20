# 웹프로그래밍 7장 자바스크립트 코어 객체 및 사용자 객체 예제 소스 코드 모음

7장에 등장하는 **예제 7-1부터 예제 7-11까지의 소스 코드** 모음입니다. 각 예제 코드를 복사하여 개별 HTML 파일로 만들어 깃허브(GitHub)에 업로드할 수 있습니다.

---

## 예제 7-1: 자바스크립트 객체 생성 및 활용 (`ex7-01.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>객체 생성 및 활용</title>
</head>
<body>
    <h3>객체 생성 및 활용</h3>
    <hr>
    <script>
        // Date 객체 생성
        let today = new Date();
        
        // Date 객체의 toLocaleString() 메소드 호출
        document.write("현재 시간 : " + today.toLocaleString() + "<br>");
        
        // String 객체 생성
        let mystr = new String("자바스크립트 공부하기");
        document.write("mystr의 내용 : " + mystr + "<br>");
        document.write("mystr의 길이 : " + mystr.length + "<br>");
    </script>
</body>
</html>
```

---

## 예제 7-2: []로 배열 만들기 (`ex7-02.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>[]로 배열 만들기</title>
</head>
<body>
    <h3>[]로 배열 만들기</h3>
    <hr>
    <script>
        let plots = [20, 5, 8, 15, 20];
        document.write("var plots = [20, 5, 8, 15, 20]<br>");
        
        for(let i=0; i<5; i++) {
            let size = plots[i];
            while(size > 0) {
                document.write("*");
                size--;
            }
            document.write(plots[i] + "<br>");
        }
    </script>
</body>
</html>
```

---

## 예제 7-3: Array 객체로 배열 만들기 (`ex7-03.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Array 객체로 배열 만들기</title>
</head>
<body>
    <h3>Array 객체로 배열 만들기</h3>
    <hr>
    <script>
        let degrees = new Array();
        degrees[0] = 15.1;
        degrees[1] = 15.4;
        degrees[2] = 16.1;
        degrees[3] = 17.5;
        degrees[4] = 19.2;
        degrees[5] = 21.4;

        let sum = 0;
        for(let i=0; i<degrees.length; i++)
            sum += degrees[i];

        document.write("평균 온도는 " + sum/degrees.length + "<br>");
    </script>
</body>
</html>
```

---

## 예제 7-4: Array 객체의 메소드 활용 (`ex7-04.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Array 객체의 메소드 활용</title>
    <script>
        function pr(msg, arr) {
            document.write(msg + arr.toString() + "<br>");
        }
    </script>
</head>
<body>
    <h3>Array 객체의 메소드 활용</h3>
    <hr>
    <script>
        let a = new Array("황", "김", "이");
        let b = new Array("박");
        let c;

        pr("배열 a = ", a);
        pr("배열 b = ", b);
        document.write("<hr>");

        c = a.concat(b);
        pr("c = a.concat(b)후 c = ", c);
        pr("c = a.concat(b)후 a = ", a);

        c = a.join("##");
        pr("c = a.join() 후 c = ", c);
        pr("c = a.join() 후 a = ", a);

        c = a.reverse();
        pr("c= a.reverse() 후 c = ", c);
        pr("c= a.reverse() 후 a = ", a);

        c = a.slice(1, 2);
        pr("c= a.slice(1, 2) 후 c = ", c);
        pr("c= a.slice(1, 2) 후 a = ", a);

        c = a.sort();
        pr("c= a.sort() 후 c = ", c);
        pr("c= a.sort() 후 a = ", a);

        c = a.toString();
        document.write("a.toString() : " + c);
    </script>
</body>
</html>
```

---

## 예제 7-5: Date 객체로 현재 시간 알아내기 (`ex7-05.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Date 객체로 현재 시간 알아내기</title>
</head>
<body>
    <h3>Date 객체로 현재 시간 알아내기</h3>
    <hr>
    <script>
        let now = new Date();
        document.write("현재 시간 : " + now.toUTCString() + "<br><hr>");
        document.write(now.getFullYear() + "년도<br>");
        document.write(now.getMonth() + 1 + "월<br>");
        document.write(now.getDate() + "일<br>");
        document.write(now.getHours() + "시<br>");
        document.write(now.getMinutes() + "분<br>");
        document.write(now.getSeconds() + "초<br>");
        document.write(now.getMilliseconds() + "밀리초<br><hr>");

        let next = new Date(2023, 7, 15, 12, 12, 12);
        document.write("next.toLocaleString() : " + next.toLocaleString() + "<br>");
    </script>
</body>
</html>
```

---

## 예제 7-6: 방문 시간에 따라 변하는 배경색 만들기 (`ex7-06.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>방문 시간에 따라 변하는 배경색</title>
</head>
<body>
    <h3>페이지 방문 초시간이 짝수이면 violet, 홀수이면 lightskyblue 배경</h3>
    <hr>
    <script>
        let current = new Date();
        if(current.getSeconds() % 2 == 0)
            document.body.style.backgroundColor = "violet";
        else
            document.body.style.backgroundColor = "lightskyblue";

        document.write("현재 시간 : ");
        document.write(current.getHours(), "시,");
        document.write(current.getMinutes(), "분,");
        document.write(current.getSeconds(), "초<br>");
    </script>
</body>
</html>
```

---

## 예제 7-7: String 객체의 메소드 활용 (`ex7-07.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>String 객체의 메소드 활용</title>
</head>
<body>
    <h3>String 객체의 메소드 활용</h3>
    <hr>
    <script>
        let a = new String("Boys and Girls");
        let b = "!!";
        document.write("a : " + a + "<br>");
        document.write("b : " + b + "<br><hr>");

        document.write(a.charAt(0) + "<br>");
        document.write(a.concat(b, "입니다") + "<br>");
        document.write(a.indexOf("s") + "<br>");
        document.write(a.indexOf("And") + "<br>");
        document.write(a.slice(5, 8) + "<br>");
        document.write(a.substr(5, 3) + "<br>");
        document.write(a.toUpperCase() + "<br>");
        document.write(a.replace("and", "or") + "<br>");
        document.write("   kitae ".trim() + "<br><hr>");

        let sub = a.split(" ");
        document.write("a를 빈칸으로 분리<br>");
        for(let i=0; i<sub.length; i++)
            document.write("sub" + i + "=" + sub[i] + "<br>");

        document.write("<hr>String 메소드를 실행 후 a와 b 변함 없음<br>");
        document.write("a : " + a + "<br>");
        document.write("b : " + b + "<br>");
    </script>
</body>
</html>
```

---

## 예제 7-8: Math를 활용한 구구단 연습 (`ex7-08.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Math를 활용한 구구단 연습</title>
    <script>
        function randomInt() {
            return Math.floor(Math.random()*9) + 1;
        }
    </script>
</head>
<body>
    <h3>Math를 활용한 구구단 연습</h3>
    <hr>
    <script>
        let ques = randomInt() + "*" + randomInt();
        let user = prompt(ques + " 값은 얼마입니까?", 0);
        if(user == null) {
            document.write("구구단 연습을 종료합니다");
        } else {
            let ans = eval(ques);
            if(ans == user)
                document.write("정답! ");
            else
                document.write("아니오! ");
            document.write(ques + "=" + "<strong>" + ans + "</strong>입니다<br>");
        }
    </script>
</body>
</html>
```

---

## 예제 7-9: new Object()로 계좌를 표현하는 account 객체 만들기 (`ex7-09.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>new Object()로 사용자 객체 만들기</title>
    <script>
        function inquiry() { return this.balance; }
        function deposit(money) { this.balance += money; }
        function withdraw(money) {
            this.balance -= money;
            return money;
        }

        let account = new Object();
        account.owner = "황기태";
        account.code = "111";
        account.balance = 35000;
        account.inquiry = inquiry;
        account.deposit = deposit;
        account.withdraw = withdraw;
    </script>
</head>
<body>
    <h3>new Object()로 사용자 객체 만들기</h3>
    <hr>
    <script>
        document.write("account : ");
        document.write(account.owner + ", ");
        document.write(account.code + ", ");
        document.write(account.balance + "<br>");

        account.deposit(10000);
        document.write("10000원 저금 후 잔액은 " + account.inquiry() + "<br>");
        account.withdraw(5000);
        document.write("5000원 인출 후 잔액은 " + account.inquiry() + "<br>");
    </script>
</body>
</html>
```

---

## 예제 7-10: 리터럴 표기법으로 계좌를 표현하는 account 객체 만들기 (`ex7-10.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>리터럴 표기법으로 사용자 객체 만들기</title>
    <script>
        let account = {
            owner : "황기태",
            code : "111",
            balance : 35000,

            inquiry : function () { return this.balance; },
            deposit : function(money) { this.balance += money; },
            withdraw : function (money) {
                this.balance -= money;
                return money;
            }
        };
    </script>
</head>
<body>
    <h3>리터럴 표기법으로 사용자 객체 만들기</h3>
    <hr>
    <script>
        document.write("account : ");
        document.write(account.owner + ", ");
        document.write(account.code + ", ");
        document.write(account.balance + "<br>");

        account.deposit(10000);
        document.write("10000원 저금 후 잔액은 " + account.inquiry() + "<br>");
        account.withdraw(5000);
        document.write("5000원 인출 후 잔액은 " + account.inquiry() + "<br>");
    </script>
</body>
</html>
```

---

## 예제 7-11: 프로토타입으로 객체 만들기 (`ex7-11.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>프로토타입으로 객체 만들기</title>
    <script>
        function Account(owner, code, balance) {
            this.owner = owner;
            this.code = code;
            this.balance = balance;

            this.inquiry = function () { return this.balance; }
            this.deposit = function (money) { this.balance += money; }
            this.withdraw = function (money) {
                this.balance -= money;
                return money;
            }
        }
    </script>
</head>
<body>
    <h3>Account 프로토타입 만들기</h3>
    <hr>
    <script>
        let account = new Account("황기태", "111", 35000);

        document.write("account : ");
        document.write(account.owner + ", ");
        document.write(account.code + ", ");
        document.write(account.balance + "<br>");

        account.deposit(10000);
        document.write("10000원 저금 후 잔액은 " + account.inquiry() + "<br>");
        account.withdraw(5000);
        document.write("5000원 인출 후 잔액은 " + account.inquiry() + "<br>");
    </script>
</body>
</html>
```
