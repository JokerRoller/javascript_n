// რევერსი, პირველი ვარიანტი

var fruit1 = ['ვაშლი', 'მსხალი', 'ატამი'];

document.write(fruit1.reverse() + '</br>');

// რევერსი, მეორე ვარიანტი

var fruit1 = ['ვაშლი', 'მსხალი', 'ატამი'];

for (var i = fruit1.length - 1; i > -1; i-- ) {

    document.write(fruit1[i] + ',');
}

document.write('</br>'); // კოდის სილამაზისთვის

// სეზონის კალკულატორი

let respond = 'პირველი კოდი არ მუშაობს!'

let months = ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'];

let currentdate = new Date();

if ( currentdate.getMonth() >= 0 && currentdate.getMonth() <= 3 ) {
    respond = 'ძალიან ცივა';
}
else if ( currentdate.getMonth() >= 4 && currentdate.getMonth() <= 8 ) {
    respond = 'ცხავს';
}
else {
    respond = 'ცივა';
}

document.write(respond + '</br>');

let respond2 = 'მეორე კოდი არ მუშაობს!'

if ( respond === 'ძალიან ცივა' && currentdate.getDay() >= 4 && currentdate.getDay() <= 6 ) {
    respond2 = 'საგუნდაო ამინდია გუნდა კეთდება!';
}
else if ( respond === 'ცხავს' && currentdate.getDay() >= 4 && currentdate.getDay() <= 6 ) {
    respond2 = 'Summer Time!';
}
else {
    respond2 = 'წავედით ლექციაზე!'
}

document.write(respond2);

