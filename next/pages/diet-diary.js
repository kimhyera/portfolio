import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'

export default function DietDiaryPage() {
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
    memo: '',
  })
  const [diaryList, setDiaryList] = useState([])
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
  const [viewMode, setViewMode] = useState('form')

  // calendar state (간단 버전)
  const dateInputRef = useRef(null)
  const [showCalendar, setShowCalendar] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const calendarRef = useRef(null)

  useEffect(() => {
    const saved = localStorage.getItem('dietDiary')
    if (saved) {
      const parsed = JSON.parse(saved)
      setDiaryList([...parsed].sort((a, b) => new Date(b.date) - new Date(a.date)))
    }
  }, [])

  useEffect(() => {
    const saved = localStorage.getItem('dietDiary')
    if (saved) {
      const parsed = JSON.parse(saved)
      const found = parsed.find(x => x.date === selectedDate)
      if (found) setDiaryData(found)
      else setDiaryData(prev => ({ ...prev, date: selectedDate, sleep: '', condition: '', morningWeight: '', morningMeal: '', afternoonMeal: '', dinner: '', snack: '', afternoonWeight: '', memo: '' }))
    } else {
      setDiaryData(prev => ({ ...prev, date: selectedDate, sleep: '', condition: '', morningWeight: '', morningMeal: '', afternoonMeal: '', dinner: '', snack: '', afternoonWeight: '', memo: '' }))
    }
  }, [selectedDate])

  const handleDateSelect = (date) => {
    const s = date.toISOString().split('T')[0]
    setSelectedDate(s)
    setShowCalendar(false)
  }
  const changeMonth = (d) => {
    setCurrentMonth(prev => { const nd = new Date(prev); nd.setMonth(prev.getMonth()+d); return nd })
  }
  const getCalendarDays = () => {
    const y = currentMonth.getFullYear(); const m = currentMonth.getMonth()
    const first = new Date(y, m, 1); const last = new Date(y, m+1, 0)
    const daysInMonth = last.getDate(); const startDay = first.getDay()
    const arr = []
    const prevLast = new Date(y, m, 0).getDate()
    for (let i=startDay-1;i>=0;i--) arr.push({ date: new Date(y, m-1, prevLast - i), isCurrentMonth:false })
    for (let d=1; d<=daysInMonth; d++) arr.push({ date: new Date(y, m, d), isCurrentMonth:true })
    while (arr.length < 42) arr.push({ date: new Date(y, m+1, arr.length - (startDay + daysInMonth) + 1), isCurrentMonth:false })
    return arr
  }

  const handleSave = () => {
    const list = [...diaryList]
    const idx = list.findIndex(x => x.date === diaryData.date)
    if (idx >= 0) list[idx] = diaryData; else list.push(diaryData)
    list.sort((a, b) => new Date(b.date) - new Date(a.date))
    setDiaryList(list)
    localStorage.setItem('dietDiary', JSON.stringify(list))
    alert('저장되었습니다.')
  }
  const handleDelete = () => {
    if (!confirm('정말 삭제하시겠습니까?')) return
    const list = diaryList.filter(x => x.date !== selectedDate)
    setDiaryList(list)
    localStorage.setItem('dietDiary', JSON.stringify(list))
    setDiaryData(prev => ({ ...prev, date: selectedDate, sleep: '', condition: '', morningWeight: '', morningMeal: '', afternoonMeal: '', dinner: '', snack: '', afternoonWeight: '', memo: '' }))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setDiaryData(prev => ({ ...prev, [name]: value }))
  }

  const weekdays = ['일','월','화','수','목','금','토']

  return (
    <main className="container">
      <Head>
        <title>식단 일지 | 김혜라 포트폴리오</title>
        <meta name="description" content="하루 식단, 수면, 컨디션, 체중을 기록하고 날짜별로 확인하세요." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="식단 일지" />
        <meta property="og:description" content="간단한 식단/컨디션 기록, 로컬 저장, 날짜별 조회 지원" />
        <meta property="og:image" content="/img/og_img.png" />
        <meta property="og:locale" content="ko_KR" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="card">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, flexWrap:'wrap'}}>
          <h1 style={{margin:0}}>식단 일지</h1>
          <div style={{display:'flex', gap:8}}>
            <button onClick={()=>setViewMode('form')} style={{padding:'8px 12px', background:viewMode==='form'?'#4a90e2':'#eee', color:viewMode==='form'?'#fff':'#333', border:'none', borderRadius:6}}>작성하기</button>
            <button onClick={()=>setViewMode('list')} style={{padding:'8px 12px', background:viewMode==='list'?'#4a90e2':'#eee', color:viewMode==='list'?'#fff':'#333', border:'none', borderRadius:6}}>목록보기</button>
          </div>
        </div>

        {viewMode === 'list' ? (
          <div style={{marginTop:16}}>
            {diaryList.length === 0 ? (
              <p style={{color:'#666'}}>저장된 일지가 없습니다.</p>
            ) : (
              <div style={{display:'flex', flexDirection:'column', gap:12}}>
                {diaryList.map(item => (
                  <button key={item.date} onClick={()=>{ setSelectedDate(item.date); setViewMode('form') }} style={{textAlign:'left', padding:16, border:'1px solid #eee', borderRadius:8, background:'#fff', cursor:'pointer'}}>
                    <b>{item.date}</b>
                    {item.condition ? <span style={{marginLeft:8, color:'#4a90e2'}}>{item.condition}</span> : null}
                    <div style={{marginTop:8, color:'#666', fontSize:14}}>
                      {(item.morningMeal||item.afternoonMeal||item.dinner||item.snack) && '식사 기록 있음'}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div style={{marginTop:16}}>
            <div style={{display:'flex', gap:12, alignItems:'center', marginBottom:16, flexWrap:'wrap'}}>
              <div style={{position:'relative'}}>
                <input ref={dateInputRef} type="text" value={selectedDate} readOnly onFocus={()=>{ setShowCalendar(true); setCurrentMonth(new Date(selectedDate)) }} placeholder="YYYY-MM-DD" style={{padding:'10px 40px 10px 12px', border:'1px solid #ddd', borderRadius:6}}/>
                <button type="button" onClick={()=>{ setShowCalendar(v=>!v); if(!showCalendar) setCurrentMonth(new Date(selectedDate)) }} style={{position:'absolute', right:8, top:6, border:'none', background:'none', fontSize:18, cursor:'pointer'}}>📅</button>
                {showCalendar && (
                  <div ref={calendarRef} style={{position:'absolute', top:'110%', left:0, background:'#fff', border:'1px solid #eee', borderRadius:8, padding:12, zIndex:20, boxShadow:'0 6px 24px rgba(0,0,0,.12)'}}>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8}}>
                      <button onClick={()=>changeMonth(-1)} style={{border:'none', background:'none', fontSize:20, cursor:'pointer'}}>‹</button>
                      <b>{currentMonth.getFullYear()}년 {currentMonth.getMonth()+1}월</b>
                      <button onClick={()=>changeMonth(1)} style={{border:'none', background:'none', fontSize:20, cursor:'pointer'}}>›</button>
                    </div>
                    <div style={{display:'grid', gridTemplateColumns:'repeat(7,1fr)', gap:6, marginBottom:6, color:'#666', fontSize:12}}>
                      {weekdays.map(w=> <div key={w} style={{textAlign:'center'}}>{w}</div>)}
                    </div>
                    <div style={{display:'grid', gridTemplateColumns:'repeat(7,1fr)', gap:6}}>
                      {getCalendarDays().map((d, i)=>{
                        const s = d.date.toISOString().split('T')[0]
                        const selected = s === selectedDate
                        const today = s === new Date().toISOString().split('T')[0]
                        return (
                          <button key={i} disabled={!d.isCurrentMonth} onClick={()=>handleDateSelect(d.date)} style={{aspectRatio:'1', border:'none', borderRadius:6, cursor: d.isCurrentMonth ? 'pointer':'not-allowed', background: selected ? '#4a90e2' : (today ? '#e3f2fd' : '#f6f7f8'), color: selected ? '#fff' : (d.isCurrentMonth ? '#333' : '#bbb')}}>
                            {d.date.getDate()}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
              <div style={{marginLeft:'auto', display:'flex', gap:8}}>
                <button onClick={handleSave} style={{padding:'8px 14px', border:'none', borderRadius:6, background:'#4a90e2', color:'#fff'}}>저장</button>
                <button onClick={handleDelete} style={{padding:'8px 14px', border:'none', borderRadius:6, background:'#e74c3c', color:'#fff'}}>삭제</button>
              </div>
            </div>

            <div className="card" style={{border:'1px solid #eee'}}>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16}}>
                <div>
                  <label>수면 (시간)</label>
                  <input type="number" name="sleep" value={diaryData.sleep} onChange={handleInputChange} placeholder="예: 7.5" step="0.5" min="0" max="24" style={{display:'block', width:'100%', padding:'10px', border:'1px solid #ddd', borderRadius:6}}/>
                </div>
                <div>
                  <label>컨디션</label>
                  <select name="condition" value={diaryData.condition} onChange={handleInputChange} style={{display:'block', width:'100%', padding:'10px', border:'1px solid #ddd', borderRadius:6}}>
                    <option value="">선택하세요</option>
                    <option value="매우좋음">매우 좋음</option>
                    <option value="좋음">좋음</option>
                    <option value="보통">보통</option>
                    <option value="나쁨">나쁨</option>
                    <option value="매우나쁨">매우 나쁨</option>
                  </select>
                </div>
                <div>
                  <label>오전 체중 (kg)</label>
                  <input type="number" name="morningWeight" value={diaryData.morningWeight} onChange={handleInputChange} placeholder="예: 65.5" step="0.1" min="0" style={{display:'block', width:'100%', padding:'10px', border:'1px solid #ddd', borderRadius:6}}/>
                </div>
                <div>
                  <label>오후 체중 (kg)</label>
                  <input type="number" name="afternoonWeight" value={diaryData.afternoonWeight} onChange={handleInputChange} placeholder="예: 66.2" step="0.1" min="0" style={{display:'block', width:'100%', padding:'10px', border:'1px solid #ddd', borderRadius:6}}/>
                </div>
                <div style={{gridColumn:'1 / -1'}}>
                  <label>오전 식사</label>
                  <textarea name="morningMeal" value={diaryData.morningMeal} onChange={handleInputChange} rows={3} placeholder="아침 식사 내용을 입력하세요" style={{display:'block', width:'100%', padding:'10px', border:'1px solid #ddd', borderRadius:6}}/>
                </div>
                <div style={{gridColumn:'1 / -1'}}>
                  <label>오후 식사</label>
                  <textarea name="afternoonMeal" value={diaryData.afternoonMeal} onChange={handleInputChange} rows={3} placeholder="점심 식사 내용을 입력하세요" style={{display:'block', width:'100%', padding:'10px', border:'1px solid #ddd', borderRadius:6}}/>
                </div>
                <div style={{gridColumn:'1 / -1'}}>
                  <label>저녁 식사</label>
                  <textarea name="dinner" value={diaryData.dinner} onChange={handleInputChange} rows={3} placeholder="저녁 식사 내용을 입력하세요" style={{display:'block', width:'100%', padding:'10px', border:'1px solid #ddd', borderRadius:6}}/>
                </div>
                <div style={{gridColumn:'1 / -1'}}>
                  <label>간식</label>
                  <textarea name="snack" value={diaryData.snack} onChange={handleInputChange} rows={3} placeholder="간식 내용을 입력하세요" style={{display:'block', width:'100%', padding:'10px', border:'1px solid #ddd', borderRadius:6}}/>
                </div>
                <div style={{gridColumn:'1 / -1'}}>
                  <label>메모</label>
                  <textarea name="memo" value={diaryData.memo} onChange={handleInputChange} rows={4} placeholder="추가 메모를 입력하세요" style={{display:'block', width:'100%', padding:'10px', border:'1px solid #ddd', borderRadius:6}}/>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}


