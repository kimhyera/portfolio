import React, {useState} from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
/*css*/
import '../../assets/scss/page/main.scss';
//component
import PortfolioItem from '../../component/contents/PortfolioItem';
//img
function Main() {
  //탭
  const [tabIdx, setTabIdx] = useState(0);
  const tab = [
    {text: '2024~', link: ''},
    {text: '2015~2023', link: ''}
  ];
  return (
    <>
      <main className="p_main">
        <section className="pf_tab__wrap">
          <div className="pf_tab ">
            {tab.map((v, idx) => (
              <button key={idx} className={`tab ${tabIdx === idx ? 'active' : ''}`} onClick={() => setTabIdx(idx)}>
                {v.text}
              </button>
            ))}
          </div>
					 
        </section>
        {/*  포트폴리오 */}
        <section className="main_cont_sec">
          {tabIdx === 0 && (
            <>
						<div className="portfolio__list">
							
						{[...Array(3)].map((_, index) => (
                <PortfolioItem type="ai_training" index={index} />
              ))}
						</div>
            </>
          )}

          {tabIdx === 1 && (
            <>
            </>
          )}
        </section>
      </main>
    </>
  );
}

export default Main;
