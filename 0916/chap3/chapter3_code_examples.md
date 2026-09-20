# 웹프로그래밍 3장 예제 소스 코드 모음 (HTML5 문서 구조화 및 웹 폼)
---

### **예제 3-1: 구조화된 HTML5 문서 작성 (`ex3-01.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>HTML5 문서 구조 시맨틱 태그 사용</title>
    <style>
        html, body { margin: 0; padding: 0; height: 100%; }
        header { width: 100%; height: 15%; background: yellow; }
        nav { width: 15%; height: 70%; float: left; background: orange; }
        section { width: 70%; height: 70%; float: left; background: olivedrab; }
        aside { width: 15%; height: 70%; float: left; background: orange; }
        footer { width: 100%; height: 15%; clear: both; background: plum; }
    </style>
</head>
<body>
    <header>header</header>
    <nav>nav</nav>
    <section>section</section>
    <aside>aside</aside>
    <footer>footer</footer>
</body>
</html>
```

---

### **예제 3-2: 시맨틱 태그로 구조화 연습 (`ex3-02.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>시맨틱 태그로 구조화 연습</title>
</head>
<body>
    <header>
        <h1>볼프강 아마데우스 모차르트</h1>
        <p>모차르트(1756년 1월 27일 ~ 1791년 12월 5일)는 1756년 1월 27일 잘츠부르크에서 태어난 천재적인 오스트리아의 작곡가를 소개한다.</p>
        <figure>
            <img width="140" height="200" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Wolfgang-amadeus-mozart_1.jpg/500px-Wolfgang-amadeus-mozart_1.jpg" alt="모차르트 초상화">
            <figcaption>1770년대 초상화</figcaption>
        </figure>
    </header>
    <nav>
        <h2>목차</h2>
        <ul>
            <li><a href="#life">생애</a></li>
            <li><a href="#death">죽음</a></li>
            <li><a href="#music">음악</a></li>
        </ul>
    </nav>
    <section>
        <article id="life">
            <h2>생애</h2>
            <p>모차르트는 1756년 1월 27일 잘츠부르크에서 태어나서, 궁정 음악가였던 아버지에게 피아노와 바이올린을 배웠고, 다섯살 때 이미 작곡을 하기 시작했으며, 1764년에서 1765년 사이에 바흐로부터 처음으로 교향곡을 작곡하는 법을 배웠는데 이것이 모차르트가 수많은 교향곡을 남기는 계기가 되었다.</p>
        </article>
        <article id="death">
            <h2>죽음</h2>
            <p>모차르트는 1791년 12월 5일 오전 0시 55분경에 갑자기 병으로 죽었으며 모차르트가 완성하지 못한 작품 레퀴엠은 프란츠 크사버 쥐스마이어가 완성시켰다.</p>
        </article>
        <article id="music">
            <h2>음악</h2>
            <p>오페라, 교향곡, 행진곡, 관현악용 무곡, 피아노 협주곡, 바이올린 협주곡, 교회용 성악곡, 칸타타, 미사곡 등 다양한 장르를 아우르며 600 여곡을 작곡하여 후대에 남겼다.</p>
        </article>
    </section>
    <aside id="legend">
        <h3>모차르트의 죽음에 얽힌 전설</h3>
        <p>모차르트의 장례식 날 비가 오고 천둥이 쳤다고 하나 New Groove에 따르면 사실은 구름 한 점 없는 쾌청한 날이었다고 한다.</p>
    </aside>
    <footer>
        <p>2017년 10월 7일 작성, 위키피디어 참고</p>
    </footer>
</body>
</html>
```

---

### **예제 3-3: `<details>`와 `<summary>` 활용 (`ex3-03.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>details와 summary 태그</title>
</head>
<body>
    <h3>details와 summary 태그</h3>
    Q &amp; A 리스트
    <hr>
    <details>
        <summary>Question 1</summary>
        <p>웹 개발자가 알아야 하는 언어 3 가지?</p>
    </details>
    <details>
        <summary>Answer 1</summary>
        <p>HTML5, CSS, Javascript</p>
    </details>
</body>
</html>
```

---

### **예제 3-4: 시맨틱 인라인 태그 (`ex3-04.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>인라인 시맨틱 태그</title>
</head>
<body>
    <h3>인라인 시맨틱 태그 사례</h3>
    <hr>
    <p>
        내일 <mark>HTML5 시험</mark><br>
        시간은 <time>09:00</time><br>
        난이도 <meter value="0.8" max="1.0">80%</meter><br>
        자료 업로딩(20%) <progress value="2" max="10"></progress><br>
    </p>
</body>
</html>
```

---

### **예제 3-5: 간단한 로그인 폼 만들기 (`ex3-05.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>로그인 폼</title>
</head>
<body>
    <h3>로그인 폼</h3>
    <hr>
    <form name="fo" method="get">
        사용자 ID : <input type="text" size="15" value=""><br>
        비밀 번호 : <input type="password" size="15" value="">
        <input type="submit" value="완료">
    </form>
</body>
</html>
```

---

### **예제 3-6: 텍스트 및 여러 줄 입력 폼 (`ex3-06.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>텍스트 입력 폼</title>
</head>
<body>
    <h3>자기 소개서 작성</h3>
    <hr>
    <form>
        이름 : <input type="text" value=""><br>
        암호 : <input type="password" value="" maxlength="4"><br>
        자소서 : <textarea cols="20" rows="5">이곳에 자기소개서 작성</textarea>
    </form>
</body>
</html>
```

---

### **예제 3-7: `<datalist>`를 이용한 데이터 목록 입력 (`ex3-07.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>데이터 목록을 가진 텍스트 입력</title>
</head>
<body>
    <h3>가보고 싶은 곳</h3>
    <hr>
    <form>
        나라 : <input type="text" list="countries"><br>
        <datalist id="countries">
            <option value="가나">
            <option value="스위스">
            <option value="브라질">
        </datalist>
    </form>
</body>
</html>
```

---

### **예제 3-8: 다양한 버튼 종류 만들기 (`ex3-08.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>버튼 만들기</title>
</head>
<body>
    <h3>버튼 만들기</h3>
    <hr>
    <form>
        검색: <input type="text" size="10" value=""> <input type="button" value="Q1"> <button type="button">Q2</button><br>
        submit 버튼 : <input type="submit" value="전송1"> <button type="submit">전송2</button><br>
        reset 버튼 : <input type="reset" value="리셋1"> <button type="reset">리셋2</button><br>
        이미지버튼 : <input type="image" src="media/button.png" alt="이미지 버튼">
        <button type="button"><img src="media/button.png" alt="이미지 버튼"></button>
    </form>
</body>
</html>
```

---

### **예제 3-9: 체크박스 만들기 (`ex3-09.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>체크 박스 만들기</title>
</head>
<body>
    <h3>먹고 싶은 것 모두 체크하세요</h3>
    <hr>
    <form>
        짜장면 <input type="checkbox" value="1">
        짬뽕 <input type="checkbox" value="2" checked>
        탕수육 <input type="checkbox" value="3">
    </form>
</body>
</html>
```

---

### **예제 3-10: 라디오버튼 만들기 (`ex3-10.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>라디오버튼 만들기</title>
</head>
<body>
    <h3>먹고 싶은 것 하나만 선택?</h3>
    <hr>
    <form>
        <input type="radio" name="china" value="1"> 짜장면<br>
        <input type="radio" name="china" value="2" checked> 짬뽕<br>
        <input type="radio" name="china" value="3"> 탕수육
    </form>
</body>
</html>
```

---

### **예제 3-11: `<select>` 드롭다운 콤보박스 만들기 (`ex3-11.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>콤보 박스 만들기</title>
</head>
<body>
    <h3>먹고 싶은 것 하나만 선택</h3>
    <hr>
    <form>
        <select name="china">
            <option value="1">짜장면</option>
            <option value="2" selected>짬뽕</option>
            <option value="3">탕수육</option>
        </select>
    </form>
</body>
</html>
```

---

### **예제 3-12: `<label>` 태그로 로그인 폼 만들기 (`ex3-12.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>로그인 폼</title>
</head>
<body>
    <h3>로그인 폼</h3>
    <hr>
    <form name="fo" method="get">
        <label>사용자 ID : <input type="text" size="15" value=""></label><br>
        <label for="pass">비밀 번호 : </label>
        <input id="pass" type="password" size="15" value="">
        <input type="submit" value="완료">
    </form>
</body>
</html>
```

---

### **예제 3-13: `<label>`로 라디오버튼에 캡션 만들기 (`ex3-13.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>캡션을 가진 라디오버튼</title>
</head>
<body>
    <h3>먹고 싶은 것 하나만 선택?(&lt;label&gt;이용)</h3>
    <hr>
    <form>
        <label>
            <input type="radio" name="china" value="1"> 짜장면 <img src="media/jajang.png" alt="짜장면">
        </label><br>
        <label>
            <input type="radio" name="china" value="2" checked> 짬뽕 <img src="media/jjambbong.png" alt="짬뽕">
        </label><br>
        <label>
            <input type="radio" name="china" value="3"> 탕수육 <img src="media/tangsuyuk.png" alt="탕수육">
        </label>
    </form>
</body>
</html>
```

---

### **예제 3-14: 컬러 다이얼로그로 색 입력받기 (`ex3-14.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>색 입력</title>
</head>
<body>
    <h3>컬러다이얼로그로 색 입력</h3>
    <hr>
    <form>
        색 선택 <input type="color" value="#00BFFF" onchange="document.body.style.color=this.value">
    </form>
</body>
</html>
```

---

### **예제 3-15: 시간 및 날짜 정보 입력 폼 (`ex3-15.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>시간 정보 입력</title>
</head>
<body>
    <h3>시간 정보 입력 폼 요소</h3>
    <hr>
    <form>
        생일 : <input type="date"><br>
        생일주 : <input type="week"><br>
        생일달 : <input type="month"><br>
        약속시간 : <input type="time"><br>
        상세시간 : <input type="datetime-local">
    </form>
</body>
</html>
```

---

### **예제 3-17: 스핀버튼과 슬라이드바로 숫자 입력받기 (`ex3-17.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>편리한 숫자 입력</title>
</head>
<body>
    <h3>홈 제어 시스템 - 온도 조절</h3>
    <hr>
    <form>
        지속시간 (0.0~10.0시간) : <input type="number" min="0.0" max="10.0" step="0.5"><br><br>
        온도 설정 : 10&deg; <input type="range" min="10" max="30" list="temperatures"> 30&deg;
        <datalist id="temperatures">
            <option value="12" label="Low">
            <option value="20" label="Medium">
            <option value="28" label="High">
        </datalist>
    </form>
</body>
</html>
```

---

### **예제 3-18: 형식을 가진 텍스트 입력 (`ex3-18.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>형식을 가진 텍스트 입력</title>
</head>
<body>
    <h3>회원 정보를 입력해주세요.</h3>
    <hr>
    <form>
        email : <input type="email" placeholder="id@host"><br>
        홈페이지 : <input type="url" placeholder="http://"><br>
        전화번호 : <input type="tel" placeholder="010-1234-5678">
        <input type="submit" value="확인"><br><br>
        <hr>
        검색어 : <input type="search" placeholder="검색어">
        <input type="button" value="검색">
    </form>
</body>
</html>
```

---

### **예제 3-19: `<fieldset>`으로 폼 요소 그룹핑하기 (`ex3-19.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>폼 입력 그룹으로 묶기</title>
</head>
<body>
    <h3>회원 정보를 입력해주세요.</h3>
    <hr>
    <form>
        <fieldset>
            <legend>회원정보</legend>
            이메일 : <input type="email"><br>
            홈페이지 : <input type="url"><br>
            전화번호 : <input type="tel">
        </fieldset>
        <small>질문 : Tel. 010-111-1111</small>
    </form>
</body>
</html>
```
