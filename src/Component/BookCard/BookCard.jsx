import PropTypes from 'prop-types';
import { BsFillPeopleFill } from "react-icons/bs";
import { AiFillFile } from "react-icons/ai";
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
    const {bookId, bookName, author, image, rating, tags, publisher, category, pages } = book
    return (
        <div>
            <div className=" border border-gray-300 rounded-2xl" >
                <div className=" flex flex-col md:flex-row gap-x-10 p-5">
                    <div className='bg-gray-100 p-5 px-8 rounded-2xl mb-5 md:mb-0 flex justify-center'>
                        <img src={image} />
                        </div>
                    <div className='flex-1'>
                        <h1 className="text-2xl font-bold">{bookName}</h1>
                        <p className="py-2">By : {author}</p>
                        <div className=" space-x-4 mb-4"> <span className='font-bold'>Tags</span>
                            {
                                tags.map((tag, i) => <div key={i} className="badge badge-outline text-[#23BE0A]">{tag}</div>)
                            }
                        </div>
                        <div className=' flex space-x-8 border-b-2 border-gray-200 pb-4'>
                            <h2 className='flex gap-x-2 items-center'> <BsFillPeopleFill /> Publisher : {publisher}</h2>
                            <h2 className='flex gap-x-2 items-center'> <AiFillFile />Pages : {pages}</h2>
                        </div>
                        <div className='space-x-6 mt-4'>
                        <button className="btn btn-sm bg-[#bad3ec] text-[#388fe5] rounded-full">Category : {category}</button>
                        <button className="btn btn-sm bg-[#f1f3e4d0] text-[#b0c032] rounded-full">Rating : {rating}</button>
                        <Link to={`/book/${bookId}`}><button className="btn btn-sm bg-[#23BE0A] text-white rounded-full">View Details</button></Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

BookCard.propTypes = {
    book: PropTypes.object
};

export default BookCard;