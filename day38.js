//learn about how to use arrays and its different functionalities
let sportsperson= ['VIRATKHOLI ', ' MS.DHONI ', ' MESSI ', ' CR7 '];// declaration of the array

// document.write(sportsperson);//printing of the array
// document.write(sportsperson[3]);// to print the specific value of the array

sportsperson[3]='SKY';//to change a specific value of the array.....

document.write(sportsperson);
console.log(sportsperson[1]);//it will only prinnt the first element in the console

console.log(sportsperson.length)// thiswill give he lenght of array in the console
document.write(sportsperson.length);

sportsperson.push('rashwin');//adds the new element at the last

sportsperson.unshift('lewandoshki');// puts new element in the beginning
document.write(sportsperson);
console.log(sportsperson);

sportsperson.pop();//pops the last element at the last;

sportsperson.shift();// pops the first element of the array every time when called

sportsperson.splice(1,1);// the slice in btw element so  in the bracket the first element is from where do we have to start to pop ,and the second element is to write how many we have to pop

sportsperson=[];//the arrray will get emptty
sportsperson.length=0;

let position = sportsperson.indexOf('MS.DHONI');
console.log(position);

let text='MY NAME IS MERWIN REBELLO';
let sentencearray = text.split(' ');// after every space eac word will bwcome an element of an array;
console.log(sentencearray);

let sportsperson= ['VIRATKHOLI ', ' MS.DHONI ', ' MESSI ', ' CR7 '];
let textarray= sportsperson.join(' ');// this will oin diffreen elwmnwts of the aray in a single text
//(' ') join after every space


let sportsperson= ['VIRATKHOLI ', ' MS.DHONI ', ' MESSI ', ' CR7 '];
let sportsperson2= ['tigger woods ', ' sachin'];
let newsportsperson= sportsperson.concat(sportsperson2);//joining of arrays
console.log(newsportsperson)

//MULTIDIMENSTIONAL ARRAY
let software=[
    ['illustrator','5months'], //0  //overall array ka size is 3
    ['photoship','months'],   //1//individual ka size is 2, 2, 3.
    ['java','js','python'],//2
];
console.log(software[1],[0])//this will print the array 1 ka 0th element