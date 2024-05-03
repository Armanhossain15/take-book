import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStroedReadBook, saveReadBook } from "../../Utility/LocalStorage";
import { getStoredWishList, saveWishList } from "../../Utility/WishLocalStorage";

const ShowDetails = () => {
    const ALlData = useLoaderData()
    const { bookId } = useParams()
    // console.log(bookId, ALlData)
    const clikeData = ALlData.filter(data => data.bookId === parseInt(bookId))
    // console.log(clikeData[0])
    const { image, bookName, author, review, tags, category, publisher, yearOfPublishing, rating } = clikeData[0]

    const handleAddRead = () => {
        const stroedReadBook = getStroedReadBook()
        const isExist = stroedReadBook.find(id => id === bookId)
        if (!isExist) {
            saveReadBook(bookId)
            toast("Read Added successfully");
        }
        else {
            toast.error("ALready Exist");
        }
    }

    const handleAddWish = () => {

        const stroredWishList = getStoredWishList()
        const stroedReadBook = getStroedReadBook()
        const isExistOnWish = stroredWishList.find(id => id === bookId)
        const isExistOnRead = stroedReadBook.find(id => id === bookId)
        if (!isExistOnWish && !isExistOnRead) {
            saveWishList(bookId)
            toast("Wish Added successfully");
        }
        else{
            toast.error("Already Exist");
        }


        
    }
    return (
        <div className="  hero">
            <div className="hero-content max-w-4xl gap-x-16 flex-col lg:flex-row">
                <div className="bg-gray-100 w-2/3 flex justify-center py-[85px] px-8 rounded-2xl">
                    <img src={image} className="w-4/6" />
                </div>
                <div>
                    <h1 className="text-[26px] font-bold">{bookName}</h1>
                    <p className="py-2">By : {author}</p>
                    <h2 className="py-3 border-y-2 border-gray-300">{category}</h2>
                    <p className="py-6"><span className="font-bold">Review :</span> {review}</p>
                    <div className="space-x-3 border-b-2 border-gray-300 pb-4"> <span className="font-bold">Tags :</span>
                        {
                            tags.map((tag, i) => <div key={i} className="badge badge-outline text-[#23BE0A]">{tag}</div>)
                        }
                    </div>
                    <div className="flex gap-x-14 py-5">
                        <div>
                            <ul className="space-y-2">
                                <li>Publisher:</li>
                                <li>Year of Publishing:</li>
                                <li>Rating:</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-2">
                                <li>{publisher}</li>
                                <li>{yearOfPublishing}</li>
                                <li>{rating}</li>
                            </ul>
                        </div>
                    </div>
                    <button onClick={handleAddRead} className="btn  btn-outline mr-6">Read</button>
                    <button onClick={handleAddWish} className="btn  bg-[#4eb1bc] text-white mr-6">Wishlist</button>
                    <Link to={-1}><button className="bg-gray-800 hover:bg-gray-600 text-white btn">Back</button></Link>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ShowDetails;