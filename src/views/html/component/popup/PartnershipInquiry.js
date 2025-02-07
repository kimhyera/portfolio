import React from 'react';

function PartnershipInquiry() {
  return (
    <>
      <h2 className="pop_tit">제휴 제안 문의</h2>
      <div className="content_container scroll">
        <ul className="pf_input_sec type_mini">
          <li className="tit_field">유형</li>
          <li className="input_field">
            <select name="" id="">
              <option value="">유형선택</option>
            </select>
          </li>
          <li className="tit_field">제목</li>
          <li className="input_field">
            <input type="text" placeholder="제목을 입력해주세요" />
          </li>
          <li className="tit_field">작성자</li>
          <li className="input_field">
            <input type="text" placeholder="작성자를 입력해주세요" />
          </li>
          <li className="tit_field">연락처</li>
          <li className="input_field">
            <div className="input_wrap wrap">
              <select name="" id="" className="select ws">
                <option value="+82">+82</option>
              </select>
              <input type="tel" className="input" placeholder="핸드폰번호(‘-’제외)" />
            </div>
          </li>
          <li className="tit_field">내용</li>
          <li className="input_field">
            <textarea placeholder="상담 내용을 입력해 주세요"></textarea>
          </li>
        </ul>
      </div>
    </>
  );
}
export default PartnershipInquiry;
