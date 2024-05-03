
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getStoredWishList } from '../../../Utility/WishLocalStorage';
import BookCard from '../../../Component/BookCard/BookCard';

const WishList = ({allBook}) => {
    const [wishlist, setWishlist] = useState([])
    useEffect(()=>{
        const showWishList = getStoredWishList()
        const filterWishList = allBook?.filter(wishBook => showWishList.includes(JSON.stringify(wishBook.bookId)))
        setWishlist(filterWishList)
    },[allBook])
    // console.log(wishlist)
    return (
        <div className="space-y-10 mt-8">
            {
                wishlist.map((wishItem, i) => <BookCard key={i}  book={wishItem}></BookCard>)
            }
        </div>
    );
};

WishList.propTypes = {
    allBook: PropTypes.array
};

export default WishList;