
import PropTypes from 'prop-types';

const Item=(props) =>{
    return (
        <div className="col-12  col-sm-6 col-lg-4 col-xl-3 mb-3">
            <div className="card shadow elevation-3 rounded overflow-hidden h-100  animate__animated animate__bounce" >
                <img src={props.url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">{props.title}</p>
                </div>
            </div>
        </div> 
    )
}
  
Item.propTypes={
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default Item;