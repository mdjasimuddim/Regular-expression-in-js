// contact@zonayed.me
// example123@gmail.com
// IAmNothing-123@weird.edu
// uid-1996@cu-mail.acu

// [A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}


// .[{()\^$|?*+

//     0123456789
    
//     ABCDEFGHIJKLMNOPQRSTUVWXYZ
//     abcdefghijklmnopqrstuvwxyz
    
//     !@#$%^&*()_+{}|~:"<>?"
    
//     hello there! how are you? 
//         I am fine



//character classes
//.-> use for select all character
//\d -> use for select digit
//\D -> use for select Non-digit
// \w -> use for select word character(0-9a-zA-Z_)
//\W  -> use for select non word character
//\s -> select for whitespace or tab or newline
//\S -> without select whitespace or tab or newline

// hello there! how are you? 
//     I am fine
    
// Hello World! How Are you? HelloJane, Hello Jake, How Are you? Hello



//anchors
// /b /b word boundary
// /B non word boundary 

// ^ start with the line 
// $ end with the line
// A start with for all text in a file
// Z end with for all text in a file


//Range
// (a|b) a or b 
//M(r|dr|s|e) M with r or dr or s or e
//M[abc] a or b or c
//M[^abc] without a or b or c
//[0-9]  //0 to 9
//[a-z]   // a to z



//Quantifier
//* means 0 or more
//+ means 1 or more
//? means one or 0
// \d{5} 5 number of digit
// {3,5}  minimum 3 or maximum 5



//Assertions
// d(?=r)  select d to see r
// d(?!r) select d to not see r


//Back references
// (\w)(\s)(\w)
// 1    2    3

// to find 
// Zonayed Zonayed 

//string replacement
//$&, $1


// Pattern of phone Number

//text string
// +8801814274346
// 01814274346
// 19223834032
// 01814274346098
// +880181427434698

// (\+88)?01\d{9}

//pattern of name
// Md Firoz Khan
// Mr. Tmnt
// Mr Abul Miah
// Mrs. Takla Akhter
// Mrs Takia Rahman
// MD Sayeed Munshi

// M(d|r|rs|D)\.?\s\w*(\s\w*)?

//declaration Regular expression
// const regex = /ab+c/i
//another way
//const regexCons = new RegExp('ab+c', i);

// const regexToMatch = /Mydesh/;

//replace method
// const regexToMatch = /Mydesh/;
// const aText = 'I am from Mydesh';

// const newText = aText.replace(regexToMatch, 'Bangladesh');


