import './App.css';
import Main from './Main';
import Footer from './Footer';

const App = () => {

  const divStyle = {
    textAlign: 'center',
  }

  return (
    <div style={divStyle}>
      <Main />
      <Footer />
    </div>
  );
};

export default App;
