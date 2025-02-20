// .length
// .toUpperCase()
// .toLowerCase()
// .charAt()
// .indexOf()
// .lastincexOf()
// .slice()
// .substring()
// .trim()
// .replace()
// .replaceall()
// .concat()
// .startswith
// .endswith
// .includes()
// .split()
// .join()


// .length --> it use to find the length number of the words
let len = "iam mohan from chennai";
console.log(len.length);

// touppercase --> it use to small letter to capitalletter 
let up = "mohan";
console.log(up.toUpperCase());

// tolowercase --> it use to capitalletter to small letter
let low = "JAVASCRIPT";
console.log(low.toLowerCase());

// charat --> it use to find the cheracter index value

let at = "javascript";
console.log(at.charAt(2));

// indexof --> it use to find the index value of the character in the beginning
let of = "javascript";
console.log(of.indexOf("a"));

// lastindexof -->it use to find the index value of the character in the end
let last = "hi hello i am in india";
console.log(last.lastIndexOf("i"));

// slice - -->it use to cut the value what we need and then we use - simble

let sl ="hello sir";
console.log(sl.slice(8));

// substring --> use to get the particular value in the front

let aub = "hello world welcome"
console.log(aub.substring(0,4));

// trim  --> it remove the excess spaces 

let tr ="      hello                 ";
console.log(tr.trim());

// replace --> use to replace the particuler value
let re = "hello iam mohan from chennai";
console.log(re.replace("chennai","kovai"));

// replaceall --> it replace the particular value in hole sentance
let all ="iam java and java is a coding language ";
console.log(all.replaceAll("java","javascript"));
 
// conact --> adding some value in the end
let con = "mohan";
console.log(con.concat(".n"));

// startswith
let str = "gajendran";
console.log(str.startsWith("g"));

// endswith
let end = "gajendran";
console.log(end.endsWith("n"));

// includes 
let inc = "hi  java welcome";
console.log(inc.includes("java"));

// split 
let spl = "hello earth";
console.log(spl.split("").join(""));


let task ="chennai city center";
console.log(task.replaceAll("c","C"));


