import React, { useState, useEffect, useRef } from 'react';
import '../../assets/scss/page/diet.scss';

function DietDiary() {
  const [diaryData, setDiaryData] = useState({
    date: new Date().toISOString().split('T')[0],
    sleep: '',
    condition: '',
    morningWeight: '',
    morningMeal: '',
    afternoonMeal: '',
    dinner: '',
    snack: '',
    afternoonWeight: '',
    memo: ''
  });

  const [diaryList, setDiaryList] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [viewMode, setViewMode] = useState('form'); // 'form' or 'list'
  const dateInputRef = useRef(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const calendarRef = useRef(null);

  // 초기 로드 시 데이터 불러오기
  useEffect(() => {
    const savedData = localStorage.getItem('dietDiary');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      // 날짜순으로 정렬 (최신순)
      const sortedData = [...parsedData].sort((a, b) => new Date(b.date) - new Date(a.date));
      setDiaryList(sortedData);
    }
  }, []);

  // 선택된 날짜가 변경될 때만 데이터 로드
  useEffect(() => {
    const savedData = localStorage.getItem('dietDiary');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      // 선택된 날짜의 데이터가 있으면 로드
      const todayData = parsedData.find(item => item.date === selectedDate);
      if (todayData) {
        setDiaryData(todayData);
      } else {
        // 선택된 날짜의 데이터가 없으면 초기화
        setDiaryData({
          date: selectedDate,
          sleep: '',
          condition: '',
          morningWeight: '',
          morningMeal: '',
          afternoonMeal: '',
          dinner: '',
          snack: '',
          afternoonWeight: '',
          memo: ''
        });
      }
    } else {
      // 저장된 데이터가 없으면 초기화
      setDiaryData({
        date: selectedDate,
        sleep: '',
        condition: '',
        morningWeight: '',
        morningMeal: '',
        afternoonMeal: '',
        dinner: '',
        snack: '',
        afternoonWeight: '',
        memo: ''
      });
    }
  }, [selectedDate]);

  // 날짜 변경 핸들러 (기존 - 사용 안 함)
  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    // useEffect에서 자동으로 해당 날짜의 데이터를 로드하므로 여기서는 날짜만 변경
  };

  // 날짜 텍스트 입력 핸들러
  const handleDateTextChange = (e) => {
    const value = e.target.value;
    // YYYY-MM-DD 형식 검증
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (value === '' || dateRegex.test(value)) {
      setSelectedDate(value);
    }
  };

  // 달력 표시/숨김
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
    if (!showCalendar) {
      // 달력을 열 때 선택된 날짜의 월로 설정
      if (selectedDate) {
        setCurrentMonth(new Date(selectedDate));
      }
    }
  };

  // 달력 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target) && 
          dateInputRef.current && !dateInputRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };

    if (showCalendar) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCalendar]);

  // 날짜 선택 핸들러
  const handleDateSelect = (date) => {
    const dateStr = date.toISOString().split('T')[0];
    setSelectedDate(dateStr);
    setShowCalendar(false);
  };

  // 달력 월 변경
  const changeMonth = (direction) => {
    setCurrentMonth(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  // 달력 날짜 생성
  const getCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // 이전 달의 마지막 날들
    const prevMonth = new Date(year, month, 0);
    const prevMonthDays = prevMonth.getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, prevMonthDays - i),
        isCurrentMonth: false
      });
    }

    // 현재 달의 날들
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        date: new Date(year, month, day),
        isCurrentMonth: true
      });
    }

    // 다음 달의 첫 날들 (총 42개 셀)
    const remainingDays = 42 - days.length;
    for (let day = 1; day <= remainingDays; day++) {
      days.push({
        date: new Date(year, month + 1, day),
        isCurrentMonth: false
      });
    }

    return days;
  };

  // 입력 필드 변경 핸들러
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDiaryData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 다른 input에 포커스가 갈 때 달력 닫기
  const handleOtherInputFocus = (e) => {
    setShowCalendar(false);
  };

  // 다른 input을 클릭할 때 달력 닫기
  const handleOtherInputMouseDown = (e) => {
    setShowCalendar(false);
  };

  // 저장 핸들러
  const handleSave = () => {
    const updatedList = [...diaryList];
    const existingIndex = updatedList.findIndex(item => item.date === diaryData.date);
    
    if (existingIndex >= 0) {
      updatedList[existingIndex] = diaryData;
    } else {
      updatedList.push(diaryData);
    }
    
    // 날짜순으로 정렬 (최신순)
    updatedList.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    setDiaryList(updatedList);
    localStorage.setItem('dietDiary', JSON.stringify(updatedList));
    alert('저장되었습니다.');
  };

  // 리스트 아이템 클릭 핸들러
  const handleListItemClick = (date) => {
    setSelectedDate(date);
    setViewMode('form');
  };

  // 날짜 포맷팅
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
    const weekday = weekdays[date.getDay()];
    return `${year}.${month}.${day} (${weekday})`;
  };

  // 컨디션 아이콘
  const getConditionIcon = (condition) => {
    switch (condition) {
      case '매우좋음':
        return '😊';
      case '좋음':
        return '🙂';
      case '보통':
        return '😐';
      case '나쁨':
        return '😞';
      case '매우나쁨':
        return '😢';
      default:
        return '';
    }
  };

  // 삭제 핸들러
  const handleDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      const updatedList = diaryList.filter(item => item.date !== selectedDate);
      setDiaryList(updatedList);
      localStorage.setItem('dietDiary', JSON.stringify(updatedList));
      
      setDiaryData({
        date: selectedDate,
        sleep: '',
        condition: '',
        morningWeight: '',
        morningMeal: '',
        afternoonMeal: '',
        dinner: '',
        snack: '',
        afternoonWeight: '',
        memo: ''
      });
      
      alert('삭제되었습니다.');
    }
  };

  return (
    <div className="diet-diary">
      <div className="com_center_wrap">
        <div className="diet-title-section">
          <h1 className="diet-title">식단 일지</h1>
          <div className="view-toggle">
            <button
              onClick={() => setViewMode('form')}
              className={viewMode === 'form' ? 'active' : ''}
            >
              작성하기
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={viewMode === 'list' ? 'active' : ''}
            >
              목록보기
            </button>
          </div>
        </div>

        {viewMode === 'list' ? (
          <div className="diet-list-view">
            {diaryList.length === 0 ? (
              <div className="empty-state">
                <p>저장된 일지가 없습니다.</p>
                <button onClick={() => setViewMode('form')} className="btn-add">
                  첫 일지 작성하기
                </button>
              </div>
            ) : (
              <div className="diary-items">
                {diaryList.map((item) => (
                  <div
                    key={item.date}
                    className="diary-item"
                    onClick={() => handleListItemClick(item.date)}
                  >
                    <div className="diary-item-header">
                      <h3 className="diary-date">{formatDate(item.date)}</h3>
                      {item.condition && (
                        <span className="condition-badge">
                          {getConditionIcon(item.condition)} {item.condition}
                        </span>
                      )}
                    </div>
                    <div className="diary-item-content">
                      <div className="diary-item-row">
                        {item.sleep && (
                          <div className="info-item">
                            <span className="label">수면</span>
                            <span className="value">{item.sleep}시간</span>
                          </div>
                        )}
                        {item.morningWeight && (
                          <div className="info-item">
                            <span className="label">오전 체중</span>
                            <span className="value">{item.morningWeight}kg</span>
                          </div>
                        )}
                        {item.afternoonWeight && (
                          <div className="info-item">
                            <span className="label">오후 체중</span>
                            <span className="value">{item.afternoonWeight}kg</span>
                          </div>
                        )}
                      </div>
                      {(item.morningMeal || item.afternoonMeal || item.dinner || item.snack) && (
                        <div className="meal-summary">
                          <span className="label">식사:</span>
                          {item.morningMeal && <span className="meal-tag">아침</span>}
                          {item.afternoonMeal && <span className="meal-tag">점심</span>}
                          {item.dinner && <span className="meal-tag">저녁</span>}
                          {item.snack && <span className="meal-tag">간식</span>}
                        </div>
                      )}
                      {item.memo && (
                        <div className="memo-preview">
                          <span className="label">메모:</span>
                          <span className="memo-text">{item.memo.length > 50 ? item.memo.substring(0, 50) + '...' : item.memo}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="diet-header">
              <div className="date-selector">
                <label htmlFor="date">날짜 선택</label>
                <div className="date-input-wrapper">
                  <input
                    ref={dateInputRef}
                    type="text"
                    id="date"
                    name="date"
                    value={selectedDate}
                    onChange={handleDateTextChange}
                    onFocus={toggleCalendar}
                    placeholder="YYYY-MM-DD"
                    className="date-input"
                    readOnly
                  />
                  <button 
                    type="button" 
                    className="calendar-toggle-btn"
                    onClick={toggleCalendar}
                  >
                    📅
                  </button>
                  {showCalendar && (
                    <div ref={calendarRef} className="calendar-popup">
                      <div className="calendar-header">
                        <button 
                          type="button" 
                          className="calendar-nav-btn"
                          onClick={() => changeMonth(-1)}
                        >
                          ‹
                        </button>
                        <span className="calendar-month">
                          {currentMonth.getFullYear()}년 {currentMonth.getMonth() + 1}월
                        </span>
                        <button 
                          type="button" 
                          className="calendar-nav-btn"
                          onClick={() => changeMonth(1)}
                        >
                          ›
                        </button>
                      </div>
                      <div className="calendar-weekdays">
                        <div className="calendar-weekday">일</div>
                        <div className="calendar-weekday">월</div>
                        <div className="calendar-weekday">화</div>
                        <div className="calendar-weekday">수</div>
                        <div className="calendar-weekday">목</div>
                        <div className="calendar-weekday">금</div>
                        <div className="calendar-weekday">토</div>
                      </div>
                      <div className="calendar-days">
                        {getCalendarDays().map((day, index) => {
                          const dateStr = day.date.toISOString().split('T')[0];
                          const isSelected = dateStr === selectedDate;
                          const isToday = dateStr === new Date().toISOString().split('T')[0];
                          
                          return (
                            <button
                              key={index}
                              type="button"
                              className={`calendar-day ${!day.isCurrentMonth ? 'other-month' : ''} ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''}`}
                              onClick={() => handleDateSelect(day.date)}
                              disabled={!day.isCurrentMonth}
                            >
                              {day.date.getDate()}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="diet-actions">
                <button onClick={handleSave} className="btn-save">저장</button>
                <button onClick={handleDelete} className="btn-delete">삭제</button>
              </div>
            </div>

        <div className="diet-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="sleep">수면 시간 (시간)</label>
              <input
                type="number"
                id="sleep"
                name="sleep"
                value={diaryData.sleep}
                onChange={handleInputChange}
                onFocus={handleOtherInputFocus}
                onMouseDown={handleOtherInputMouseDown}
                placeholder="예: 7.5"
                step="0.5"
                min="0"
                max="24"
              />
            </div>
            <div className="form-group">
              <label htmlFor="condition">컨디션</label>
              <select
                id="condition"
                name="condition"
                value={diaryData.condition}
                onChange={handleInputChange}
                onFocus={handleOtherInputFocus}
                onMouseDown={handleOtherInputMouseDown}
              >
                <option value="">선택하세요</option>
                <option value="매우좋음">매우 좋음</option>
                <option value="좋음">좋음</option>
                <option value="보통">보통</option>
                <option value="나쁨">나쁨</option>
                <option value="매우나쁨">매우 나쁨</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="morningWeight">오전 체중 (kg)</label>
              <input
                type="number"
                id="morningWeight"
                name="morningWeight"
                value={diaryData.morningWeight}
                onChange={handleInputChange}
                onFocus={handleOtherInputFocus}
                onMouseDown={handleOtherInputMouseDown}
                placeholder="예: 65.5"
                step="0.1"
                min="0"
              />
            </div>
            <div className="form-group">
              <label htmlFor="afternoonWeight">오후 체중 (kg)</label>
              <input
                type="number"
                id="afternoonWeight"
                name="afternoonWeight"
                value={diaryData.afternoonWeight}
                onChange={handleInputChange}
                onFocus={handleOtherInputFocus}
                onMouseDown={handleOtherInputMouseDown}
                placeholder="예: 66.2"
                step="0.1"
                min="0"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="morningMeal">오전 식사</label>
            <textarea
              id="morningMeal"
              name="morningMeal"
              value={diaryData.morningMeal}
              onChange={handleInputChange}
              onFocus={handleOtherInputFocus}
              onMouseDown={handleOtherInputMouseDown}
              placeholder="아침 식사 내용을 입력하세요"
              rows="3"
            />
          </div>

          <div className="form-group">
            <label htmlFor="afternoonMeal">오후 식사</label>
            <textarea
              id="afternoonMeal"
              name="afternoonMeal"
              value={diaryData.afternoonMeal}
              onChange={handleInputChange}
              onFocus={handleOtherInputFocus}
              onMouseDown={handleOtherInputMouseDown}
              placeholder="점심 식사 내용을 입력하세요"
              rows="3"
            />
          </div>

          <div className="form-group">
            <label htmlFor="dinner">저녁 식사</label>
            <textarea
              id="dinner"
              name="dinner"
              value={diaryData.dinner}
              onChange={handleInputChange}
              onFocus={handleOtherInputFocus}
              onMouseDown={handleOtherInputMouseDown}
              placeholder="저녁 식사 내용을 입력하세요"
              rows="3"
            />
          </div>

          <div className="form-group">
            <label htmlFor="snack">간식</label>
            <textarea
              id="snack"
              name="snack"
              value={diaryData.snack}
              onChange={handleInputChange}
              onFocus={handleOtherInputFocus}
              onMouseDown={handleOtherInputMouseDown}
              placeholder="간식 내용을 입력하세요"
              rows="3"
            />
          </div>

          <div className="form-group">
            <label htmlFor="memo">메모</label>
            <textarea
              id="memo"
              name="memo"
              value={diaryData.memo}
              onChange={handleInputChange}
              onFocus={handleOtherInputFocus}
              onMouseDown={handleOtherInputMouseDown}
              placeholder="추가 메모를 입력하세요"
              rows="4"
            />
          </div>
        </div>
          </>
        )}
      </div>
    </div>
  );
}

export default DietDiary;

