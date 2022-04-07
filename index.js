const express = require('express')
const interestCalculator = require("./public/interestCalculator")

const app = express()
const port = 4500

// http: 80
// https : 443



console.log('모듈테스트', interestCalculator.calcSimpleInterest(100,10,3)); // 경로 설정

app.use('/html', express.static('public')); // 정적 포스팅

app.get('/', (req, res) => { // 콜백 함수
  // usebootstrap.html 파일을 열어서 file 내에 {{th}} -> 2,3,4 로 바꿈 변경된 파일을 클라이언트한테 전송
  res.json({
    name : "jungjin",
    age : 20,
    birth : "20000710",
  });

app.get('/simple', (req, res) => { // 콜백 함수
    const balance = Number(req.query.balance);
    const interest = Number(req.query.interest);
    const range = Number(req.query.range);

    const simpleInterestResult = interestCalculator.calcSimpleInterest(balance, interest, range);
    res.send('<p style="color: red">단리 계산결과: %{interestResult}</p>');
  });

app.get('/compound', (req, res) => { // 콜백 함수
    const balance = Number(req.query.balance);
    const interest = Number(req.query.interest);
    const range = Number(req.query.range);
    
    const compoundInterestResult = interestCalculator.calcSimpleInterest(balance, interest, range);
    res.send('복리 계산결과: %{compoundinterestResult}');
});
app.get('/users/:name', (req, res) => { // url 치는 곳에 /users 라고 치면 됨 -> express 에서 정적 파일 확인
    res.send('Name: ${req.params.id}, Age: ${req.query.age}');
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
