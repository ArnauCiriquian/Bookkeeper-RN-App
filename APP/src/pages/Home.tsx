import React from 'react';
import {useState} from 'react';
import Books from '../components/Books';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewBook from '../components/NewBook';
import BookInfo from '../components/BookInfo';
import { styles } from '../styles';
import {
  View,
} from 'react-native';
import UpdateBook from '../components/UpdateBook';

const Home = () => {
  const [modal, setModal] = useState<string>('');
  const [bookId, setBookId] = useState<string>('');

  const handleNewBookModal = () => {
    setModal('newBook');
  };

  const handleCloseModal = () => {
    setModal('');
  };

  const handleGoToBookInfo = (id: string) => {
    setModal('bookInfo');
    setBookId(id);
  };

  const handleGoToEditBook = (id: string) => {
    setModal('bookEdit');
    setBookId(id);
  };

  return (
    <>
      <Header />
      <View style={styles.homeContainer}>
        {!modal && <Books onBookInfoClicked={handleGoToBookInfo} />}
        {modal === 'newBook' && (
          <NewBook
            onNewBookCreated={handleCloseModal}
            onCancel={handleCloseModal}
          />
        )}
        {modal === 'bookInfo' && (
          <BookInfo id={bookId} onGoBack={handleCloseModal} onGoToEditBook={handleGoToEditBook} />
        )}
        {modal === 'bookEdit' && (
          <UpdateBook id={bookId} onCancelUpdate={handleGoToBookInfo} onBookUpdated={handleCloseModal}/>
        )}
      </View>
      {!modal && <Footer onNewBookClicked={handleNewBookModal} />}
    </>
  );
};

export default Home;
