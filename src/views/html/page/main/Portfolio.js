import React from 'react';
/*css*/
import '../../assets/scss/page/main.scss';
//component
import PortfolioItem from '../../component/contents/PortfolioItem';
//img
function Portfolio() {
  return (
    <>
      <main className="p_main">
        {/*  포트폴리오 */}
        <section className="main_cont_sec">
          <div className="pf_center_wrap">
            <div className="pf_sec_tit__wrap">
              <h2 className="pf_sec_tit">
                <i className="png_icon icon_ai"></i>
                포트폴리오
              </h2>
            </div>
            <section className="pf_swiper_wrap">
						<PortfolioItem type="ai_training" index={10} />
            </section>
          </div>
        </section>
      </main>    
    </>
  );
}

export default Portfolio;
