const getName = () => {
    let name = 'null';
    setTimeout(() => {
        name = 'kalai';
        console.log(name);
    }, 2000);
};
const getPastOrders = () => {
    let orderDetails = 'null';
    setTimeout(() => {
        orderDetails = {
            id: 1,
            name: 'kalai',
            order: 'pizza'
        };
        console.log(orderDetails);

    }, 2000);
};
getName();
getPastOrders();