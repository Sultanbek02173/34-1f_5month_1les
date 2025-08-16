import banner from '../../imgs/Banner.png';

export default function Banner() {
  return (
    <section className='row banner'>
        <div>
            <img src={banner} alt="" />
        </div>
        <div>
            <h1>Take your podcast to the next level</h1>
        </div>

        
    </section>
  )
}
