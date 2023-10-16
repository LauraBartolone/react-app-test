import Card from '../../components/card';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';

const VillaCard = ({villa}) => {

    return (
    villa ?

    <Card
        cta={{
        url: '#',
        }}
        type="default"
        classes="card--default"
        image={villa?.image}
        imageAlt={villa?.imageAlt}
        title={villa?.name}
        subtitle={villa?.place}
        description={villa?.description}
        bodyContent={
            <div className="card__body--villa">
                <p className="card__info-prize">
                    From  <span className="card__prize">{villa?.prize?.currency}{villa?.prize?.total}</span> per week
                </p>
                <div className='icons'>
                    <p>
                        <PeopleOutlineIcon className="icon"></PeopleOutlineIcon>6
                    </p>
                    <p>
                        <BedOutlinedIcon className="icon"></BedOutlinedIcon>6
                    </p>
                    <p>
                        <BathtubOutlinedIcon className="icon"></BathtubOutlinedIcon>6
                    </p>
                </div>
                <p className='card__description'>{villa.description}</p>
            </div>
        }
    ></Card>
        : <></>
    );

};

export default VillaCard;