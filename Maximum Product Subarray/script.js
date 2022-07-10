/**
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct(arr)
{
    let maxProduct = arr[0]
    for (let i=0;i<arr.length; i++) {
        let subProduct = arr[i]
        maxProduct = Math.max(maxProduct, subProduct)
        for (let j=i+1; j<arr.length; j++) {
            subProduct *= arr[j]
            maxProduct = Math.max(maxProduct, subProduct)
        }
    }
    return maxProduct
}