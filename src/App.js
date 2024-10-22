import styles from './App.module.scss';
import classNames from 'classnames/bind';
import Images from './image';
import { useState } from 'react';
const cx = classNames.bind(styles)

function App() {
  const [isActive, setIsActive] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFinal, setIsFinal] = useState(false)
  const [isDark, setIsDark] = useState(false)

  const toggleDark = () => {
    setIsDark(prev => !prev);
};

  const toggleFlip = () => {
      setIsFlipped(prev => !prev);
  };

  const toggleFlip2 = () => {
    setIsFlipped2(prev => !prev);
  };

  const toggleFlip3 = () => {
    setIsFlipped3(prev => !prev);
  };

  const toggleClick = () =>{
    setIsActive(!isActive)
    if(isActive == false){
      setIsFlipped(false);
      setIsFlipped2(false);
      setIsFlipped3(false);
    }
  }

  const toggleSetFinal = () =>{
    setIsFinal(!isFinal)
    if(isFinal == false)
      setIsDark(false)
  }

  return (
    <div className={cx('App')}>
        <div className={cx('top', {active : isActive})}>
          <p>Mời Em Pé ấn vào logo ở giữa</p>
        </div>

        <div className={cx('tomato__wrapper', {active : isActive})}>
          <div className={cx('tomato__center', {active : isActive})} >
          </div>
        </div>

        <div className={cx('div__img', {active : isActive})} onClick={toggleClick}>
          <img className={cx('tomato__img', {active : isActive})} src={Images.tomato} alt='tomato'></img>
        </div>

        <div className={cx('bottom', {active : isActive})}></div>

        <div className={cx('container', {active : isActive})}>
          <div className={cx('content')}>
            <p>Pé</p>
            <img className={cx('cua__img')} src={Images.cua}></img>
            <p>Thích Ăn</p>

          </div>
        </div>

        <div className={cx('flip', {active : isActive})}>
          <div className={cx('flip-container')} onClick={toggleFlip}>
            <div className={cx('flipper', { flipped: isFlipped })}>
              <div className={cx('front1')}>
                <p>Thẻ bí ẩn</p>
              </div>
          
              <div className={cx('back')}>
                <img className={cx('pe')} src={Images.pe2} alt="Cua" />
              </div>
            </div>
          </div>
          
          <div className={cx('flip-container')} onClick={toggleFlip2}>
              <div className={cx('flipper', { flipped: isFlipped2 })}>
                <div className={cx('front2')}>
                  <p>Thẻ bí ẩn</p>
                </div>
            
             
                <div className={cx('back2')}>
                  {isFlipped && isFlipped3 ? (
                    <p>Pé ấn vào nút dưới nha!</p>
                  ) : (
                    <p>Em Pé muốn mở thẻ này phải mở 2 thẻ 2 bên é</p>
                  )}

                </div>
              </div>
          </div>
                    
          <div className={cx('flip-container')} onClick={toggleFlip3}>
            <div className={cx('flipper', { flipped: isFlipped3 })}>
              <div className={cx('front3')}>
                <p>Thẻ bí ẩn</p>
              </div>
          
              <div className={cx('back')}>
                <img className={cx('pe')} src={Images.pe3} alt="Cua" />
              </div>
            </div>
          </div>
        </div>

        
      {isFlipped && isFlipped2 && isFlipped3 && isActive ? (
            <div className={cx('button__back')} onClick={toggleSetFinal}>Ấn vào đây nìiiii</div>
          ): (<div></div>)}

      {isFinal ? (
        <div className={cx('final', {active: isDark})}>
          {/* <p className={cx('title')}>Cảm ơn Em Pé của mặp vì tất cả!</p>
          <p className={cx('content__final')}>Cảm ơn Em Pé của mặp vì tất cả!</p> */}
          <div  className={cx('heart__container')}>
            <div className={cx('heart1')}></div>
          </div>
        </div>
        ) : (<div></div>)}
      
      {isFinal ? (
          <div>
            <div className={cx('toBack')} onClick={toggleSetFinal}>Trở về</div>
            <div className={cx('dark',{active: isDark})} onClick={toggleDark}>
              {isDark ? ('Chế độ Sáng') : ('Chế độ tối')}
            </div>
            <div className={cx('direct')}><p>Ấn vào đây nì ➪</p></div>
            <div className={cx('content__final')}>Cảm ơn Em Pé và Mặp yêu Pé nhiều lắm!</div>

          </div>
      ): (<div></div>)}
    </div>
  );
}

export default App;
