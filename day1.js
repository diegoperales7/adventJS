function wrapping(gifts) {
  let tam;
  let env="*"
  let w;
  let wrappe=[];
  let giftsEnv=gifts.map(x=>"*"+x+"*");
  for(let g of giftsEnv){
    tam=g.length;
    w=env.repeat(tam)+"\n"+g+"\n"+env.repeat(tam);
    wrappe.push(w);
  }
  return wrappe
}
