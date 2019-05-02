import React, { Component } from 'react';

import Header from './Header';
import Post from './Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Elon Musk',
        avatar: '../images/ElonMusk.jpg',
        time: 'há 3 min',
        body:
          'Elon Reeve Musk é um empreendedor, filantropo e visionário sul-africano-canadense-americano. Ele é o fundador, CEO e CTO da SpaceX; CEO da Tesla Motors; vice-presidente da OpenAI; fundador e CEO da Neuralink; e co-fundador e presidente da SolarCity. Até outubro de 2018 a fortuna de Musk é estimada em 22,1 bilhões de dólares, o que o posiciona como a 36ª pessoa mais rica do mundo segundo a Forbes.',
      },
      {
        id: 2,
        name: 'Michael Jackson',
        avatar: '../images/MichaelJackson.jpg',
        time: 'há 10 min',
        body:
          'Michael Joseph Jackson foi um cantor, compositor, dançarino, produtor, empresário, arranjador vocal, filantropo, pacifista e ativista estadunidense.',
      },
      {
        id: 3,
        name: 'Jackie Chan',
        avatar: '../images/JackieChan.jpg',
        time: 'há 10 min',
        body:
          'Chan Kong-sang, mais conhecido como Jackie Chan, é um ator, produtor, roteirista, coreógrafo, diretor de cinema e cantor honconguês especialista em artes marciais, tendo estudado hapkido e vários estilos de Kung Fu, como Drunken Fist, Wing Chun, Shaolin do Norte, Monkey Style e Wushu moderno.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <div className="content">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </div>
    );
  }
}
