import projects from '../../../../data/projects';
import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
//css
import '../../assets/scss/component/portfolio.scss';
//component
import PortfolioItem from '../../component/contents/PortfolioItem';

import ModalDetail from './ModalDetail';

function PortfolioList({ page = 'work' }) {
    const items = projects;

    //탭
    const [tabIdx, setTabIdx] = useState(0);
    const tab = [
        { text: '전체', link: '' },
        { text: '아임웹', link: '' },
        { text: '이러닝', link: '' },
        { text: '쇼핑몰', link: '' },
        { text: '홈페이지', link: '' },
        { text: '모바일', link: '' },
        { text: 'B2B', link: '' },
        { text: 'React · Vue', link: '' }
        //{text: '리디자인', link: ''}
    ];

    const selectedTabText = tab[tabIdx].text;

    function handleTabClick(idx) {
        setTabIdx(idx);
        // 기존 애니메이션 중지
        gsap.killTweensOf('.portfolio__item');

        // 새로운 애니메이션 실행
        gsap.fromTo('.portfolio__item', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'Power.easeInOut' });
    }

    useEffect(() => {
        if (page === 'main') return;
        new SplitType('.section_work .motion_txt span', {
            types: 'chars'
            // optional: line/word도 원하면 추가
        });

        const tl = gsap.timeline();

        tl.fromTo(
            '.motion_txt .char',
            { y: '100%', opacity: 0 },
            {
                y: '0%',
                opacity: 1,
                stagger: 0.05,
                duration: 1.2,
                ease: 'expo.inOut'
            },
            0
        ).fromTo(
            '.filter',
            { y: '100%', opacity: 0 },
            {
                y: '0%',
                opacity: 1,
                stagger: 0.05,
                duration: 0.6,
                ease: 'expo.inOut'
            },
            '<0.'
        );

        //tl.fromTo('.portfolio__item', { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger: 0.1, ease: 'Power.easeInOut' }, '<0.4');

        return () => {
            //split.revert(); // SplitType이 만든 span 구조 제거
            tl.kill(); // GSAP 타임라인 제거
        };
    }, []);

    const [selectedItem, setSelectedItem] = useState(null);

    const handleOpenDetail = (item) => {
        setSelectedItem(item);
    };

    const handleCloseDetail = () => {
        setSelectedItem(null);
    };

    return (
        <>
            {page === 'work' ? (
                <section className="tit_wrap">
                    <h2 className="tit motion_txt">
                        <span>WORK</span>
                    </h2>
                    <div className="filter_list ">
                        {tab.map((v, idx) => (
                            <button key={idx} className={`filter ${tabIdx === idx ? 'active' : ''}`} onClick={() => handleTabClick(idx)}>
                                <span>{v.text}</span>
                            </button>
                        ))}
                    </div>
                </section>
            ) : null}

            <div className={`portfolio__list type_${page}`}>
                {items
                    .filter((item) => {
                        if (selectedTabText === '전체') return true;
                        // 예: item.type가 ['홈페이지', '쇼핑몰', ...]인 경우
                        return item.type?.some((keyword) =>
                            selectedTabText
                                .toLowerCase()
                                .split(' ')
                                .some((filterWord) => keyword.toLowerCase().includes(filterWord))
                        );
                    })
                    .map((item, index) => (
                        <>
                            <PortfolioItem key={index} index={index} item={item} onOpen={() => handleOpenDetail(item)} />
                        </>
                    ))}
            </div>
            {selectedItem && <ModalDetail item={selectedItem} open={true} close={handleCloseDetail} />}
        </>
    );
}

export default PortfolioList;

