import { ImArrowDown2 } from "react-icons/im";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBooks from "./ReadBooks/ReadBooks";
import WishList from "./WishList/WishList";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStroedReadBook } from "../../Utility/LocalStorage";

const ListedBooks = () => {
    const allBook = useLoaderData()
    const [showBooks, setShowBooks] = useState([])

    useEffect(() => {
        const showBookData = getStroedReadBook()
        // console.log(showBookData)
        if (allBook?.length > 0) {
            const filterBooks = allBook?.filter(book => showBookData.includes(JSON.stringify(book.bookId)))
            // setBooks(filterBooks)
            setShowBooks(filterBooks)
        }
    }, [allBook, setShowBooks])

    const handleSort = (type) => {
        if (type === 'rating') {
            const shortedRating = [...showBooks].sort((a, b) => a.rating - b.rating)
            setShowBooks(shortedRating)
            // console.log(shortedRating)
        }
        else if (type === 'page') {
            const shortedRating = [...showBooks].sort((a, b) => a.pages - b.pages)
            setShowBooks(shortedRating)
            console.log(shortedRating)
        }
        else if (type === 'year') {
            const shortedRating = [...showBooks].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing)
            setShowBooks(shortedRating)
            // console.log(shortedRating)
        }
    }



    return (
        <div className="mb-16">
            <h1 className="bg-gray-200 text-3xl text-center font-bold  p-5 rounded-xl">Books</h1>
            <div className="text-center py-6">
                <details className="dropdown ">
                    <summary className="m-1 btn bg-[#23BE0A] hover:bg-[#228413] text-white ">Sort By <ImArrowDown2 /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={()=>handleSort('rating')}><a>Rating</a></li>
                        <li onClick={()=>handleSort('page')}><a>Number of pages</a></li>
                        <li onClick={()=>handleSort('year')}><a>Publisher year</a></li>
                    </ul>
                </details>
            </div>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>

                    <TabPanel>
                        <ReadBooks
                            showBooks={showBooks}
                            setShowBooks={setShowBooks}
                            allBook={allBook}></ReadBooks>
                    </TabPanel>
                    <TabPanel>
                        <WishList allBook={allBook}></WishList>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ListedBooks;