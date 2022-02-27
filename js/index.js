//JavaScript object

const user={name:'abul',id:16,age:16,address:'rajshahi'}
//console.log(user.address);

const shop={
    name:'alia store',
    address:'ranbir road',
    ownwer:{name:'alia bhatt',profession:'acting'},
    products:['snow','cream','facewash'],
    profit:4000
}

//console.log(shop);
const shopStringified=JSON.stringify(shop);
console.log(shopStringified);

const converted=JSON.parse(shopStringified);
console.log(converted);
