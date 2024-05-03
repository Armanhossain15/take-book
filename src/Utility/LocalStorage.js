
const getStroedReadBook=()=>{
    const stroedReadBook = localStorage.getItem('readBook')
    if(stroedReadBook){
        return JSON.parse(stroedReadBook)
    }
    return []
}

const saveReadBook=(id)=>{
    
    const stroedReadBook = getStroedReadBook()
    // const isExist = stroedReadBook.find(bookId=> bookId=== id)
    // if(!isExist){
    //     stroedReadBook.push(id)
    //     localStorage.setItem('readBook', JSON.stringify(stroedReadBook))
    // }
        stroedReadBook.push(id)
        localStorage.setItem('readBook', JSON.stringify(stroedReadBook))

    
}
export {getStroedReadBook, saveReadBook}