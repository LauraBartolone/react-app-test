import VideoHero from '../components/video-hero';
import BgPanel from '../components/bg-panel';
import TextPanel from '../components/text-panel';
import video from '../assets/video/hero.mp4';
import sicily from '../assets/images/sicily.jpg';
import sicily2 from '../assets/icons/sicily.svg';
import bg1 from '../assets/images/bg1.svg';
import IconPanel from '../components/icon-panel';
import SwiperCarousel from '../components/swiper-carousel';
import Card from '../components/card';

import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import Reviews from '../components/reviews';

const Home = () => {
    return (
        <>
            <div className="container-md">
                <VideoHero videoUrl={video} text="Lorem ipsum dolor sit amet consectetur adipiscing"> </VideoHero>
            </div>
            <div className="container">
                <BgPanel bgImage={sicily} cols="col-12 col-md-6" imgOpt="container-right">
                    <TextPanel 
                        title="Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus" 
                        description="Lorem ipsum dolor sit amet consectetur adipiscing elit sociosqu gravida, posuere mi sapien proin donec vehicula fusce. Class eu mollis pellentesque eleifend in orci netus gravida felis libero quam, habitant leo arcu litora est iaculis inceptos molestie rhoncus nibh. Per pellentesque molestie venenatis tellus ultricies nascetur himenaeos felis lacus, eros accumsan tortor augue magnis facil"
                        cta={{
                            label: 'villas in sicily',
                            url: '#'
                        }}
                    >
                    </TextPanel>
                </BgPanel>
            </div>

            <BgPanel bgImage={bg1} 
                imgOpt='full'
                imgAlt='shape'

            >
                <SwiperCarousel title="Perchè scegliere" type="icon-panel">
                    <IconPanel icon={DiamondOutlinedIcon} 
                        title="Hight Quality Assured" 
                        description="Lorem ipsum dolor sit amet consectetur adipiscing elit, elementum"
                    ></IconPanel>
                    <IconPanel icon={StarBorderOutlinedIcon} 
                        title="Hight Quality Assured" 
                        description="Lorem ipsum dolor sit amet consectetur adipiscing elit, elementum"
                    ></IconPanel>
                    <IconPanel icon={PeopleOutlineIcon} 
                        title="Hight Quality Assured" 
                        description="Lorem ipsum dolor sit amet consectetur adipiscing elit, elementum"
                    ></IconPanel>
                    <IconPanel icon={AutoFixHighOutlinedIcon} 
                        title="Hight Quality Assured" 
                        description="Lorem ipsum dolor sit amet consectetur adipiscing elit, elementum"
                    ></IconPanel>
                    <IconPanel icon={RedeemOutlinedIcon} 
                        title="Hight Quality Assured" 
                        description="Lorem ipsum dolor sit amet consectetur adipiscing elit, elementum"
                    ></IconPanel>
                </SwiperCarousel>
            </BgPanel>

            <div className='container'>
                <TextPanel 
                    classes='text-center mt-5 text-panel--default'
                    title="Choose your next destination" 
                    description="Lorem ipsum dolor sit amet consectetur adipiscing elit sociosqu gravida, posuere mi sapien proin donec vehicula fusce. Class eu mollis pellentesque eleifend in orci netus gravida felis libero quam, habitant leo arcu litora est iaculis inceptos molestie rhoncus nibh. Per pellentesque molestie venenatis tellus ultricies nascetur himenaeos felis lacus, eros accumsan tortor augue magnis facil"
                ></TextPanel>

                <SwiperCarousel type='card-image' classes='swiper--card-image'>
                    <Card
                        cta={{
                            url: '#',
                            label: 'view all villas'
                        }}
                        type="image"
                        classes="card--image"
                        bodyIcon={sicily2}
                        image="https://www.hotel-quelle.com/images/content/1368232_67898_2_C_1920_1080_967_476468147/qsm23-0969.jpg"
                        title="Titolo della Card"
                        description="Questa è la descrizione della Card."
                    />
                    <Card
                        cta={{
                            url: '#',
                            label: 'view all villas'
                        }}
                        type="image"
                        classes="card--image"
                        bodyIcon={sicily2}
                        image="https://www.hotel-quelle.com/images/content/1368232_67898_2_C_1920_1080_967_476468147/qsm23-0969.jpg"
                        title="Titolo della Card"
                        description="Questa è la descrizione della Card."
                    />
                    <Card
                        cta={{
                            url: '#',
                            label: 'view all villas'
                        }}
                        type="image"
                        classes="card--image"
                        bodyIcon={sicily2}
                        image="https://www.hotel-quelle.com/images/content/1368232_67898_2_C_1920_1080_967_476468147/qsm23-0969.jpg"
                        title="Titolo della Card"
                        description="Questa è la descrizione della Card."
                    />
                    <Card
                        cta={{
                            url: '#',
                            label: 'view all villas'
                        }}
                        type="image"
                        classes="card--image"
                        bodyIcon={sicily2}
                        image="https://www.hotel-quelle.com/images/content/1368232_67898_2_C_1920_1080_967_476468147/qsm23-0969.jpg"
                        title="Titolo della Card"
                        description="Questa è la descrizione della Card."
                    />
                </SwiperCarousel>

            </div>

            <BgPanel bgImage={bg1} 
                imgOpt='full--inverted'
                imgAlt='shape'
            >
                <Reviews title="What they say about"></Reviews>
            </BgPanel>
        </>
    );
  };
  
  export default Home;