import { PostCard } from "../PostCard";
import './styles.css'

export const Posts = ({posts}) => (
    <div className='posts'>
        {posts.map(e => 
        <PostCard 
            title={e.title} 
            body={e.body} 
            key={e.id} 
            cover={e.cover}
            id={e.id}
        />
        )}
    </div>
)