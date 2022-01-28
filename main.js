// 1. Простое сообщение: сохраните текстовое сообщение в переменной и выведите его в браузере

// let str = "Hello World";
// document.writeln(str);


// 2. Простые сообщения: сохраните сообщение в переменной и выведите это сообщение. Затем замените значение переменной другим сообщением и выведите новое сообщение

// let str2 = "message";
// document.writeln(str2);

// str2 = "New message";
// document.writeln(str2);


// 3. Напишите несколько строк кода, выводящих на экран ваше имя и почтовый адрес.

// let name = "Azim";
// let email = "azim.zhasynov.kk@gmail.com";
// document.writeln(`Имя: ${name}, почта: ${email}`);


// 4. Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.

// let suvenir = +prompt("Сколько сувениров вам нужно?");
// let bezdelushki = +prompt("Сколько безделушек вам нужно?");

// let sumSuvenir = suvenir * 75;
// let sumBezdelushki = bezdelushki * 112;

// result = sumBezdelushki + sumSuvenir
// document.writeln(result + "гр.")


// 5. Создайте программу, которая запрашивает у пользователя два целых числа **a** и **b**, после чего выводит на экран результаты следующих математических операций: 
    
//     - сумма a и b; 
    
//     - разница между a и b;
    
//     - произведение a и b; 
    
//     - частное от деления a на b; 
    
//     - остаток от деления a на b;  
    
//     - результат возведения числа a в степень b

let zapros1 = +prompt('Выберите целое число');
let zapros2 = +prompt('Выберите второе целое число');

document.writeln('Сумма: ' + (zapros1 + zapros2));
document.writeln('Разница: ' + (zapros1 - zapros2));
document.writeln('Произведение: ' + (zapros1 * zapros2));
document.writeln('Деление: ' + (zapros1 / zapros2));
document.writeln('Остаток от деления: ' + (zapros1 % zapros2));
document.writeln(`Степень: ` + (zapros1 ** zapros2));
