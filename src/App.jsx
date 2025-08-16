import './app.scss';
import Banner from './components/banner/Banner';
import Episodes from './components/episodes/Episodes';
import Header from './components/header/Header';

export default function App() {
  return (
    <div className='container'>
        <Header />
        <Banner />
        <Episodes />
    </div>
  )
}
