import React from 'react'; 
//css
import '../../assets/scss/page/work.scss';
//component
import PortfolioList from '../../component/contents/PortfolioList';


function Work() {

	return (
		<>
			<main className="work">
				<section className="section_work">
					<div className="com_center_wrap">
							
						{/* 포트폴리오 리스트 */}
						<PortfolioList page="work" />
					</div>
				</section>
			</main >
		</>
	);
}

export default Work;
