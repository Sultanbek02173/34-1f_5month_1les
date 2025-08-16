// import esp1 from '../imgs/eprisodes/Episode.png'

export default function Card({img, type}) {
  return (
    <div className='row episodes__card'>
        <div>
            <img src={img} alt="" />
        </div>

        <div>
            <span className='type'>{type}</span>
            <p className='episode_number'>Episode 3</p>

            <h2>Should you get outboard audio gear?</h2>
            <p className='description'>Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.</p>
            <button className='button'>View Episode Details</button>
        </div>
    </div>
  )
}
