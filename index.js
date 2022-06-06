// // რევერსი, პირველი ვარიანტი

// var fruit1 = ['ვაშლი', 'მსხალი', 'ატამი'];

// document.write(fruit1.reverse() + '</br>');

// // რევერსი, მეორე ვარიანტი

// var fruit1 = ['ვაშლი', 'მსხალი', 'ატამი'];

// for (var i = fruit1.length - 1; i > -1; i-- ) {

//     document.write(fruit1[i] + ',');
// }

function User(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.displayInfo = function(){
    document.write("სახელი: " + this.name + "; ასაკი: " + this.age + "<br/>");
    };
    };
    User.prototype.hello = function(){
    document.write(this.name + " ამბობს: 'გამარჯობა!'<br/>");
    };
    User.prototype.maxAge = 110;
    var tom = new User("ტომი", 26);
    tom.hello();
    var john = new User("ჯონი", 28);
    john.hello();
    console.log(tom.maxAge); // 110
