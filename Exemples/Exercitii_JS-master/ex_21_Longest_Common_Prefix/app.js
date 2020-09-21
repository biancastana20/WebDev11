// document.getElementById("button").addEventListener("click", longestPrefix);

// function longestPrefix(){
//     var n = document.getElementById("string").value;
//     console.log(n);
//     var x = n.toString();
//     console.log(x);

//     var pref = "";

//     if(n.length > 0){
//         pref = n[0];
//         for(var i = 1; i < n.length; i++){
//             for(var j = 0; j < pref.length; j++){
//                 if(n[i][j] != pref[j]){
//                     pref = pref.slice(0, j);
//                     break;
//                 } 
//             }
//         }
//     }
//     console.log(pref);
//     document.getElementById("result").innerHTML = pref;
// }//nu merge

// document.getElementById("button").addEventListener("click", longestCommonPrefix);


// function longestCommonPrefix(){
//     var n = document.getElementById("string").value;
//     const len = n.length;
//     console.log(len);

//     if (len === 0){
//         // return "";
//         prefix = "";
//     } 
//     let prefix = n[0];
//     console.log(prefix);

//     for (let i = 1; i < len; i++) {
//         while (n[i].indexOf(prefix) !== 0) {
//             prefix = prefix.substring(0, prefix.length - 1);
//             if (prefix === ""){
//                 // return "";
//                 prefix = "";
//             }
//         }
//     }
//     console.log(prefix);
//     // return prefix;
//     document.getElementById("result").innerHTML = prefix;
// };

// var longestCommonPrefix = function(strs) {
//     const len = strs.length;
//     if (len === 0) return "";
//     let prefix = strs[0];
//     for (let i = 1; i < len; i++) {
//       while (strs[i].indexOf(prefix) !== 0) {
//         prefix = prefix.substring(0, prefix.length - 1);
//         if (prefix === "") return "";
//       }
//     }
//     return prefix;
// }; //mergeeee

// document.getElementById("button").addEventListener("click", longest_common_starting_substring);

// function longest_common_starting_substring(){
//     var n = document.getElementById("string").value;

//     // var arr = n.sort();

//     const a1 = n[0], a2 = n[n.length-1], L = a1.length; 
//     let i = 0;

//     while(i < L && a1.charAt(i) === a2.charAt(i)){
//         i++;
//     }    
//     var x = a1.substring(0, i);
//     document.getElementById("result").innerHTML = x;
// }

// document.getElementById("button").addEventListener("click", longestCommonPrefix);

// function longestCommonPrefix () {
//     var x = document.getElementById("string1").value;
//     var y = document.getElementById("string2").value;
//     var z = document.getElementById("string3").value;

//     var prefix = "";

//     if(x.length >= y.length && x.length >= z.length){
//         for(var i = 0; i < x.length; i++){
//             if(x[i] === y[i] && x[i] === z[i]){
//                 prefix += x[i];
//             }
//             else{
//                 prefix = "";
//             }
//         }
//         document.getElementById("result").innerHTML = prefix;
//     }
//     else if(y.length >= x.length && y.length >= z.length){
//         for(var j = 0; j < y.length; j++){
//             if(x[j] === y[j] && x[j] === z[j]){
//                 prefix += x[j];
//             }
//             else{
//                 prefix = "";
//             }
//         }
//         document.getElementById("result").innerHTML = prefix;
//     }
//     else{
//         for(var m = 0; m < z.length; m++){
//             if(x[m] === y[m] && x[m] === z[m]){
//                 prefix += x[m];
//             }
//             else{
//                 prefix = "";
//             }
//         }
//         document.getElementById("result").innerHTML = prefix;
//     }
// };



// document.getElementById("button").addEventListener("click",longestCommonPrefix);
// function longestCommonPrefix() {
//     var strs = document.getElementById("string").value;
//     const len = strs.length;
//     if (len === 0){
//         prefix = "";
//     }
//     var prefix = strs[0];
//     for (let i = 1; i < len; i++) {
//       while (strs[i].indexOf(prefix) !== 0) {
//         prefix = prefix.substring(0, prefix.length - 1);
//         if (prefix === ""){
//             prefix = "";
//         }
//       }
//     }
//     // return prefix;
//     document.getElementById("result").innerHTML = prefix;
// };
   

var longestCommonPrefix = function(strs) {
    var strs = document.getElementById("string").value;
    if(strs==null||strs.length==0){return "";}
    let res=[];
	let pp=strs[0];
	for(var i=0;i<pp.length;i++){
		let flag=0;
		for(let j=1;j<strs.length;j++){
			if(strs[j][i]!=pp[i]){
				flag=1;
			}
		}
		if(flag==0){
			res.push(pp[i]);
		}else{
			break;
		}
	}
    var x = res.join("");
    document.getElementById("result").innerHTML = x;
    
};
