function QQUser(QQNo_, QQAge_, QQMark_) {
  this.QQNo = QQNo_; // QQ号
  this.QQAge = QQAge_; // Q龄
  this.QQMark = QQMark_; // QQ标签
}

let zhangsan = new QQUser('zhangsan', 10, 'hello1');
let lisi = new QQUser('lisi', 12, 'hello2');
let wangwu = new QQUser('wangwu', 8, 'hello3');