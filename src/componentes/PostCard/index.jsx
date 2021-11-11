import './styles.css'

export const PostCard = (props) => (
    <div key={props.id} className= 'post'>
        <img src= {props.cover} alt={props.title} />
        <div className='post-content'>
            <h3>{props.title}</h3>
            <h5>{props.id}</h5>
            <p>{props.body}</p>
        </div>
    </div>    
)