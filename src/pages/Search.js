import SideModal from '../components/side-modal';
import SearchFilter from '../project-components/search-filter';
import VillaCard from '../project-components/villa-card';


const Search = () => {

  let results= 12;
  const villas = [
    {
      image:"https://www.hotel-quelle.com/images/content/1368232_67898_2_C_1920_1080_967_476468147/qsm23-0969.jpg",
      imageAlt:"alt image",
      name: "Barresa",
      place: "Titolo della Card",
      prize: {
        total: 5.12,
        currency: '€'
      },
      description: "Lorem / Ipsum dolor / sit",
      beds: 4,
      guests: 4,
      bathroom: 2
    },
    {
      image:"https://www.hotel-quelle.com/images/content/1368232_67898_2_C_1920_1080_967_476468147/qsm23-0969.jpg",
      imageAlt:"alt image",
      name: "Barresa",
      place: "Titolo della Card",
      prize: {
        total: 5.12,
        currency: '€'
      },
      description: "Lorem / Ipsum dolor / sit",
      beds: 4,
      guests: 4,
      bathroom: 2
    },
    {
      image:"https://www.hotel-quelle.com/images/content/1368232_67898_2_C_1920_1080_967_476468147/qsm23-0969.jpg",
      imageAlt:"alt image",
      name: "Barresa",
      place: "Titolo della Card",
      prize: {
        total: 5.12,
        currency: '€'
      },
      description: "Lorem / Ipsum dolor / sit",
      beds: 4,
      guests: 4,
      bathroom: 2
    },
    {
      image:"https://www.hotel-quelle.com/images/content/1368232_67898_2_C_1920_1080_967_476468147/qsm23-0969.jpg",
      imageAlt:"alt image",
      name: "Barresa",
      place: "Titolo della Card",
      prize: {
        total: 5.12,
        currency: '€'
      },
      description: "Lorem / Ipsum dolor / sit",
      beds: 4,
      guests: 4,
      bathroom: 2
    },
  
  ]
    return (
    <>
      <div className="container filter-list">
        <div className="row">
          <div className="col-12 col-md-6">
            <h1 className='t-headline-1 mt-5'>Villas in East Sicily</h1>
            <p>{results} result(s) found</p>
          </div>
          <div></div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-1 filter-list__filter-col'>
            <button className="btn btn-primary btn-search" data-bs-toggle="modal" data-bs-target="#filterModal">
              Filter search
            </button>
            <SideModal id="filterModal" title="Filter">
                <SearchFilter></SearchFilter>
                
                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </p>
            </SideModal>
            
           


          </div>
          <div className='col-12 col-md-11'>

            <div className="row"> 
                
                {villas && villas.map(villa => (
                  <div className='col-12 col-md-6'>
                    <VillaCard
                      cta={{
                        url: '#',
                      }}
                      villa={villa}
                      
                    ></VillaCard>
                  </div>
                ))
                }
            </div>
         
          </div>
          
          
        </div>
      </div>
    </>
    );

  };
  
  export default Search;