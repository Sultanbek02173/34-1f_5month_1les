import Card from '../../featers/Card';
import './episodes.scss';
import esp1 from '../../imgs/eprisodes/Episode.png'
import esp2 from '../../imgs/eprisodes/Episode(1).png'
import esp3 from '../../imgs/eprisodes/Episode(2).png'

export default function Episodes() {
  const cards =  [
    {
      id: 1,
      img: esp1,
      type: 'Gear',
      title: 'Should you get outboard audio gear?',
      decription: 'Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.'
    },
    {
      id: 2,
      img: esp2,
      type: 'Tips & Tricks',
      title: 'Mic tricks to take you to the next level',
      decription: 'Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.'
    },
    {
      id: 3,
      img: esp3,
      type: 'Gear',
      title: 'The best microphone under $200',
      decription: 'With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.'
    },
  ]
  return (
    <section className='episodes'>
        <div className='row episodes__top'>
            <h2>Latest episodes</h2>
            <button className='button'>View all episodes</button>
        </div>

        {
          cards && 
          cards.map((card) => (
            <Card key={card.id} card={card} />
          ))
        }
        {/* <Card img={esp2} type={'Tips & Tricks'} />
        <Card img={esp3} type={'Gear'} /> */}
    </section>
  )
}
