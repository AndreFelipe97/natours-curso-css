import GlobalStyle from './styles/global';
import { Header,
  About,
  Features,
  Tours,
  Stories,
  Booking,
  Footer
} from './Components';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <About />
      <Features />
      {/* <Tours />
      <Stories />
      <Booking />
      <Footer /> */}

      {/* <section className='grid-test'>
        <div className='row'>
          <div className='col-1-of-2'>
            Col 1 of 2
          </div>
          <div className='col-1-of-2'>
            Col 1 of 2
          </div>
        </div>
        <div className='row'>
          <div className='col-1-of-3'>
            Col 1 of 3
          </div>
          <div className='col-1-of-3'>
            Col 1 of 3
          </div>
          <div className='col-1-of-3'>
            Col 1 of 3
          </div>
        </div>
        <div className='row'>
          <div className='col-1-of-3'>
            Col 1 of 3
          </div>
          <div className='col-2-of-3'>
            Col 2 of 3
          </div>
        </div>
        <div className='row'>
          <div className='col-1-of-4'>
            Col 1 of 4
          </div>
          <div className='col-1-of-4'>
            Col 1 of 4
          </div>
          <div className='col-1-of-4'>
            Col 1 of 4
          </div>
          <div className='col-1-of-4'>
            Col 1 of 4
          </div>
        </div>
        <div className='row'>
          <div className='col-1-of-4'>
            Col 1 of 4
          </div>
          <div className='col-1-of-4'>
            Col 1 of 4
          </div>
          <div className='col-2-of-4'>
            Col 2 of 4
          </div>
        </div>
        <div className='row'>
          <div className='col-1-of-4'>
            Col 1 of 4
          </div>
          <div className='col-3-of-4'>
            Col 2 of 4
          </div>
        </div>
      </section> */}
    </>
  );
}

export default App;
