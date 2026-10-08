import { Bookmark } from 'lucide-react';
const Cards = (props) => {
    return (
        <div className="card">
            <div className="top">
                <div className="logo">
                    <img src={props.logo} alt="logo" />
                </div>
                <button>Save <Bookmark size={16} color="#636363" strokeWidth={1.5} /></button>
            </div>

            <div className="center">
                <div className="company">{props.company} <span>{props.period}</span></div>
                <div className="passion">{props.passion}</div>
                <div className="tag">
                    <button>{props.time}</button>
                    <button>{props.type}</button>
                </div>
            </div>

            <div className="bottom">
                <div className="details">
                    <div className="pay">{props.pay}</div>
                    <div className="location">{props.location}</div>
                </div>
                <button>Apply now</button>
            </div>
        </div>
    )
}

export default Cards
