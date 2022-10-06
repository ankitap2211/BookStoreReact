import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Books from '../../components/booksCard/books'
import Header from '../../components/header/header'
import { getBookList } from '../../components/services/dataService'
import BookSummery from '../../components/bookSummery/bookSummery';
import { makeStyles } from '@mui/styles'
import MyCart from '../../components/myCart/myCart';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import PaginationPage from '../../components/pagination/pagination';
import Footer from '../../components/footer/footer';


const useStyles = makeStyles({
  outerBox: {
    width: '80vw', height: '10vh', position: 'relative', top: '0px', left: '130px', display: 'flex',
    justifyContent: 'space-between', flexDirection: "row"
  },
  title: {
    fontWeight: 'normal', width: '20%', position: 'relative', display: 'flex', justifyContent: 'flex-start'
  },
  subtext: {
    position: 'absolute', top: '35px', left: '70px', fontSize: '10px', color: 'gray'
  },
  dropdown: {
    position: 'relative', display: 'flex', justifyContent: 'flex-end', height: '40%', top: '20px '
  }, 
  numbers: {
    position: 'relative', display: 'flex', top: '130px', width: '50%',
    justifyContent: 'space-between', left: '350px'
  },
  numberStyle: { color: 'lightgray' },
  arrow1: { textAlign: 'center', color: '#E2E2E2' },
  paginationBox: {
    position: 'relative', left: '500px', top: '130px'
  },
  bookContainer: {
    width: '85vw', position: 'relative', top: '0px',
    left: '130px', display: 'flex', flexWrap: 'wrap', 
  },

  '@media only screen and (min-width: 320px) and (max-width: 480px)': {
    outerBox: {
      width: '100%', flexDirection: "row", flexWrap: 'wrap',position:'relative',top:'0px',left:'50px'
    },
    bookContainer: {
      width: '70vw', position: 'relative', top: '0px', 
      left: '50px', display: 'flex', flexWrap: 'wrap',
    },
    title:{
      width:'33%',display:'flex',position:'relative',
    },
    paginationBox: {
      position: 'relative', left: '60px', top: '100px'
    },
    dropdown:{
      display:'none'
    },    
  },

  '@media only screen and (min-width: 481px) and (max-width: 768px)': {
    outerBox: {
      display: 'flex', flexDirection: "row", flexWrap: 'wrap',  left: '10px',
      width:'80vw',
    },
    bookContainer: {
      width: '90vw', flexDirection: 'row', left: '10px',
      display: 'flex', flexWrap: 'wrap', 
    },
    paginationBox: {
      position: 'relative', left: '140px', top: '50px'
    },
    title:{
      width:'35%',display:'flex',position:'relative',
    },
  },

  '@media only screen and (min-width:769px) and (max-width:1024px)': {
    outerBox: {
      display: 'flex', flexDirection: "row", flexWrap: 'wrap', left: '12px'
    },
    bookContainer: {
      width: '90vw', flexDirection: 'row', left: '10px',
      display: 'flex', flexWrap: 'wrap',
    },
    paginationBox: {
      position: 'relative', left: '200px', top: '50px'
    },
  },
})



function Dashboard() {
  const classes = useStyles();

  const [listOfBooks, setListOfBooks] = useState([])

  const [inputField, setInputField] = useState({})
  const [display, setDisplay] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(8)

  const [searchValue, setSearchValue] = useState("")
  // const [footerDisplay,setFooterDisplay] =useState(false)
  const [paginationDisplay, setPaginationDisplay] = useState(false)

  const openSummery = (bookObj) => {
    console.log(bookObj, "this is book details");
    setInputField(bookObj)
    setDisplay(true)
    setPaginationDisplay(true)
    console.log(inputField.bookName, "book data");
  }

  const listenToCart = () => {
    setCartOpen(true)
  }

  useEffect(() => {
    getBookList().then((response) => {
      console.log(response);
      setListOfBooks(response.data.result)
    }).catch((error) => {
      console.log(error);
    })
  }, [])


  const searchHandler = (event) => {
    setSearchValue(event.target.value)
  }
  console.log(setSearchValue, '....value searched');

  // 9 =20-11
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;  //21=30-11
  const currentPost = listOfBooks.filter(book => book.bookName.toLowerCase().includes(searchValue))
  .slice(firstPostIndex, lastPostIndex)
  console.log(currentPost, '.......');

  console.log(listOfBooks, "printed...");


  return (
    <React.Fragment>
      <Header searchHandler={searchHandler} searchValue={searchValue} />

      <Box className={classes.outerBox}>
        <Box className={classes.title}>
          <Box><h2 className={classes.title1}>Books</h2></Box>
          <Box><span className={classes.subtext}> (128 items)</span></Box>
        </Box>
        <Box className={classes.dropdown}>
          <select>
            <option value="volvo">sort by relevance</option>
            <option value="saab">sort by book name</option>
            <option value="opel">sort by author</option>
            <option value="audi">sort by price</option>
          </select>
        </Box>
      </Box>



      <Box className={classes.bookContainer}>
        {
          display ? <BookSummery bookName={inputField.bookName} id={inputField._id}
            author={inputField.author}
            quantity={inputField.quantity}
            price={inputField.price}
            discountPrice={inputField.discountPrice} description={inputField.description} /> :

            currentPost
              .map(
                (books) => (<Box onClick={() => openSummery(books)}><Books books={books} /></Box>)
              )
        }

        {
          cartOpen ? <MyCart listenToCart={listenToCart} /> : ""
        }
      </Box>


      {
        paginationDisplay ? null :
          <Box className={classes.paginationBox}>
            <PaginationPage setCurrentPage={setCurrentPage} />
          </Box>
      }

    <Footer/>
    </React.Fragment>
  )
}

export default Dashboard