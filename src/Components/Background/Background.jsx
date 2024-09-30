import './Background.css'
import video1 from '../../assets/video1.mp4'
import video2 from '../../assets/video2.mp4'
import video3 from '../../assets/video3.mp4'

const Background = ({ playStatus }) => {
  return (
    <video className='background' autoPlay loop muted>
      <source src={video2} type='video/mp4' />
    </video>
  );
}

export default Background;
