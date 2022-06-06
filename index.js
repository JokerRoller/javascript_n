// რევერსი, პირველი ვარიანტი

var fruit1 = ['ვაშლი', 'მსხალი', 'ატამი'];

document.write(fruit1.reverse() + '</br>');

// რევერსი, მეორე ვარიანტი

var fruit1 = ['ვაშლი', 'მსხალი', 'ატამი'];

for (var i = fruit1.length - 1; i > -1; i-- ) {

    document.write(fruit1[i] + ',');
}

