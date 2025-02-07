/* eslint-disable */
import React from "react";
import { Link } from 'react-router-dom';

import ArrowRight from '../../assets/img/icon_arrow_next.png';
import ArrowRightEnd from '../../assets/img/icon_arrow_last.png';

function Paging() {
  return (
    <div className="pf_paging">
      <Link to="#" className="btn_first"><img src={ArrowRightEnd} alt="end" /></Link>
      <Link to="#" className="btn_prev"><img src={ArrowRight} alt="prev" /></Link>
      <Link to="#" className="btn_page active">1</Link>
      <Link to="#" className="btn_page">2</Link>
      <Link to="#" className="btn_page">3</Link>
      <Link to="#" className="btn_page">4</Link>
      <Link to="#" className="btn_page">5</Link>
      <Link to="#" className="btn_next"><img src={ArrowRight} alt="next" /></Link>
      <Link to="#" className="btn_last"><img src={ArrowRightEnd} alt="end" /></Link>
    </div>
  );
} 

export default Paging;