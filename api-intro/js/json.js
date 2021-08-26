const user = { id: 11, name: "md hablu chodhury", jod: "khet developer" };
const stringfied = JSON.stringify(user);
// console.log("user js object", user, "json object", stringfied);

//shop object
const shop = {
  name: "boltu store",
  profit: 12000,
  adress: "pahartali",
  products: ["mobie", "computer", "laptop"],
  owner: {
    name: "md boltu",
    profession: "khet developer",
  },
  isExpensive: true,
};
const shopStringfied = JSON.stringify(shop);
//convert js object
const shopConvertObject = JSON.parse(shopStringfied);
console.log(shopStringfied.owner);
console.log(shopConvertObject.owner);
