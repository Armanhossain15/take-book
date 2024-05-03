const getStoredWishList =()=>{
    const stroredWishList = localStorage.getItem('wishlist')
    if(stroredWishList){
        return JSON.parse(stroredWishList)
    }
    return []
}


const saveWishList = (id)=>{
    // const stroredWishList  = getStoredWishList()
    // const stroedReadBook = getStroedReadBook()
    // const isExistOnWish = stroredWishList.find(bookId => bookId=== id) 
    // const isExistOnRead = stroedReadBook.find(bookId => bookId=== id) 
    // if(!isExistOnWish && !isExistOnRead){
    //     stroredWishList.push(id)
    //     localStorage.setItem('wishlist', JSON.stringify(stroredWishList))
    // }
    const stroredWishList  = getStoredWishList()
    stroredWishList.push(id)
    localStorage.setItem('wishlist', JSON.stringify(stroredWishList))

 }



export {getStoredWishList, saveWishList}