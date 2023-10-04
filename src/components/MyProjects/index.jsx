import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ContainerProjects } from './style';
import { useEffect, useState } from 'react';

import imgPokedex from '../../img/pokedex.png'
import imgTodo from '../../img/to-do.png'
import imgGitHub from '../../img/git-hub.png'

export function MyProjects() {

  const [contPerView, setContPerView] = useState(2)

  useEffect(() => {
    const verificarTela = () => {
      if (window.innerWidth <= 420) {
        setContPerView(1);
      } else {
        setContPerView(2);
      }
    };
    window.addEventListener('resize', verificarTela);
    verificarTela();
    return () => {
      window.removeEventListener('resize', verificarTela);
    };
  }, []);

  return (
    <ContainerProjects id='containerProjects'>
      <h2>Projetos</h2>

      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={contPerView}
          navigation

          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className='projectCont'
        >

          <SwiperSlide className='projectContainer'>
            <img src={imgPokedex} alt="" />

            <h3>Pokedex</h3>

            <div>
              <button>
                <a href="https://github.com/SamueLVitor1/quest-POKEDEX" target='_blank'>
                  GitHub
                </a>
              </button>

              <button>
                <a href="https://quest-pokedex.vercel.app/" target='_blank'>
                  Site
                </a>
              </button>
            </div>

          </SwiperSlide>

          <SwiperSlide className='projectContainer'>
            <img src={imgTodo} alt="" />

            <h3>Todo</h3>

            <div>
              <button>
                <a href="https://github.com/SamueLVitor1/Todo" target='_blank'>
                  GitHub
                </a>
              </button>

              <button>
                <a href="https://todo-coral-three.vercel.app/" target='_blank'>
                  Site
                </a>
              </button>
            </div>

          </SwiperSlide>

          <SwiperSlide className='projectContainer'>
            <img src={imgGitHub} alt="" />

            <h3>GitHub api</h3>

            <div>
              <button>
                <a href="https://github.com/SamueLVitor1/Quest-GitHub-API" target='_blank'>
                  GitHub
                </a>
              </button>

              <button>
                <a href="https://samuelvitor1.github.io/Quest-GitHub-API/" target='_blank'>
                  Site
                </a>
              </button>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>

    </ContainerProjects>
  );
};
