import React from "react";
import telegram from '../../assets/SubscribeNews/telegram.svg';

const SubscribeNews = () => {
  return (
    <div className="SubscribeNews">
      <div className="SubscribeNews__title">
        Subscribe to get the Latest News
      </div>
      <div className="SubscribeNews__info">
        We recommended you to subscribe to our newspaper,drop your email below
        to get daily update about us
      </div>
      <form >
			<div className="SubscribeNews__input">
				<input type="email" placeholder="Enter your email addres" />
				<button type="submit">
                    <img src={telegram} alt="Telegram" />
					<span class="text">Subscribe</span>
					{/* <span class="material-icons">
                    Enter your email addres
					</span> */}
				</button>
			</div>
		</form>
    </div>
  );
};

export default SubscribeNews;
