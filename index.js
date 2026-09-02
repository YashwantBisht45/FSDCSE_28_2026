<<<<<<< HEAD
console.log("Hello world");
=======
const myPromise=new Promise((resolve,reject)=>{
let username="raz";
let password="1234";
if(username=="raz" && password=="1234"){
    resolve("success");
}
else{
    reject("unsucess");
}
})
// console.log(myPromise);
// myPromise.then((msg)=>{console.log(msg)})
// .catch(msg=>{console.log(msg)})
// .finally(console.log("Resource closed"))

async function orderreciev(){
return await new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("one order recieve")
    },1000)
})
}


async function orderprepared(){
    return await new Promise((resolve)=>{
        setTimeout(()=>{
resolve("order prepared");
        },1000)
    })
}
 async function handler(){
    return await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("order handeled");
        },1000)
    })
 }
 
 async function diliever(){
    return await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("order delivered");
        },1000)
    })
 }
 let otp1;
 function otp(){
     otp1= Math.floor(Math.random()*10000);
    return otp1;
 }


async function handelLogin(){
    const status=await myPromise;
    console.log(status)
    if(status=="success"){
const orderstatus=await orderreciev();
console.log(orderstatus)
const  preparestatus=await orderprepared();
console.log( preparestatus);
    
    const handel=await handler();
    console.log(handel);
const ot=await otp();
if(otp1==ot){
console.log("OTP MATCHED");
    const dil=await diliever();
    console.log(dil);
    }
}
}
handelLogin();
>>>>>>> fc8a9bb (learned Promises)
