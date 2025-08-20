// import esp1 from '../imgs/eprisodes/Episode.png'

export default function Card({card}) {
  return (
    <div className='row episodes__card'>
        <div>
            <img src={card.img} alt="" />
        </div>

        <div>
            <span className='type'>{card.type}</span>
            <p className='episode_number'>Episode {card.id}</p>

            <h2>{card.title}</h2>
            <p className='description'>{card.decription}</p>
            <button className='button'>View Episode Details</button>
        </div>
    </div>
  )
}
