
import { Link } from 'react-router-dom'
import bannerImg from '../assets/restauranfood.jpg'

export const Header = () => {
  return (
    <header className='header'>
        <section className='banner'>
            <div>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are a family owned  mediterranean restaurand, focused on traditional recipes with a modern twist</p>
                <Link to='/booking'><button aria-label='on Click'>Reserve a Tabble</button></Link>
            </div>
            <div className='banner-img'>
              <img src={bannerImg} alt='banner Image' />
            </div>
        </section>
    </header>
  )
}
