import '../../styles/global-styles.css';
import { Component } from 'react';
import { loadPosts } from '../../tools/load-posts'
import { Posts } from '../../componentes/Posts';
import { Button } from '../../componentes/Button';
import { TextInput } from '../../componentes/TextInput';

export class Home extends Component {
  // Forma antiga
  constructor (props) {
    super(props);
    // Se usar dessa forma, com o bind não é necessário usar a arrow function.
    this.handleClick= this.handleClick.bind(this);
    this.state = {
      name: 'Rodrigo Rauen',
      counter: 0,
      posts: [],
      allPosts: [],
      page: 0,
      postsPerPage: 10,
      searchValue:'',
    };
  }
  // Usado para quando o componente for montado,
  // nesse exemplo como é um async, ela retorna uma promise e precisa ser asíncrona
  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const {page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState ({ 
      posts: postsAndPhotos.slice(page, postsPerPage), 
      allPosts: postsAndPhotos,
    })
  }

// Lógica para a páginação
  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    this.setState({posts, page: nextPage})
  }
  // Forma antiga usando bind
  handleClick(){
    this.setState({name: 'Jarbas'})
  }
// Esta é a forma com arrow function, assim, não é necessário fazer a amarração com o constructor.
  handleCounterClick = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({counter : counter + 1});
  }

  handleChange = (e) => {
    const {value} = e.target;
    this.setState({searchValue : value});
  }

  render(){
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    // Filtro a partir dos posts armazenados localmente
    const filteredPosts = !!searchValue ? 
    allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase());
    })
    : posts;

    return(
      <div className='App'>
        <section className='container'>
          <div>
            <TextInput searchValue={searchValue} handleChange={this.handleChange}/>
          </div>
          <div>
            {filteredPosts.length > 0 && (<Posts posts={filteredPosts}/>)}

            {filteredPosts.length === 0 && (<p>Não existem posts</p>)}
          </div> 
          <div className='button-container'>
            {!searchValue && (
              <Button 
              text='Mostrar mais' 
              onClickProps={this.loadMorePosts}
              disabledProps={noMorePosts}
              />
            )}
          </div>
        </section>
      </div>
    )
  }
}
