export const check=(req, res, next) =>{
    const status= true;
    if(status){
        console.log("chao Admin !");
        next();
    }else{
        console.log("khong du quyen !");
    }
}