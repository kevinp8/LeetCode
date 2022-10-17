var productExceptSelf = function(nums) {
    let products = []
    for (let i=0; i<nums.length; i++) products.push(1)

    let temp = 1;
    for (i = 0; i < nums.length; i++) {
        products[i] = temp;
        temp *= nums[i];
    }
 
    temp = 1;
    for (i = nums.length - 1; i >= 0; i--) {
        products[i] *= temp;
        temp *= nums[i];
    }
 
    return products;
};