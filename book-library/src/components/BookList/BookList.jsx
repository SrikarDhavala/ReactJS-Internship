import React from "react";
import { useGlobalContext } from "../../context";
import Book from './Book'
import Loading from '../Loader/Loader'
import coverImg from '../../../public/cover_not_found.jpg'
import "./BookList.css"

function BookList() {

    const { books, loading, resultTitle } = useGlobalContext();
    const booksWithCovers = books.map((singleBook) => {
        return {
            ...singleBook,
            id: (singleBook.id).replace("/works/", ""),
            cover_img: singleBook.cover_id ? `` : coverImg
        }
    });

    if (loading) return <Loading />;

    return (
        <section className='booklist'>
            <div className='container'>
                <div className='section-title'>
                    <h2>{resultTitle}</h2>
                </div>
                <div className='booklist-content grid'>
                    {
                        booksWithCovers.slice(0, 30).map((item, index) => {
                            return (
                                <Book key={index} {...item} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default BookList