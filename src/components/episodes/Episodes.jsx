import Card from '../../featers/Card';
import './episodes.scss';
import esp1 from '../../imgs/eprisodes/Episode.png'
import esp2 from '../../imgs/eprisodes/Episode(1).png'
import esp3 from '../../imgs/eprisodes/Episode(2).png'

export default function Episodes() {
  return (
    <section className='episodes'>
        <div className='row episodes__top'>
            <h2>Latest episodes</h2>
            <button className='button'>View all episodes</button>
        </div>

        <Card img={esp1} type={'Gear'} />
        <Card img={esp2} type={'Tips & Tricks'} />
        <Card img={esp3} type={'Gear'} />
    </section>
  )
}
