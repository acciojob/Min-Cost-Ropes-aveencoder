function mincost(arr1)
{ 
  arr1.sort((a,b)=> a-b );
      sum = 0;
     while(arr1.length>1){
      const  first = arr1.shift();
      const  second = arr1.shift();
      const  cost = first+second;

      sum+= cost;

     arr1.push(cost);
     arr1.sort((a,b)=>a-b);
}
     
     return sum;
  
}

module.exports=mincost;
