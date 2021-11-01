import React, {FC} from 'react';

import './Greetings.scss';

const Greetings: FC = () => {
	return (
		<div className="greetings">
			<div className="greetings__block">
				<div className="greetings__logo">
					<p className="greetings__logo-text">
						hi
					</p>
				</div>
				<div className="greetings__content">
					<div className="greetings__content-area">
						<p className="greetings__content-area-text">
							Меня зовут Егор, я работаю и занимаюсь саморозвитием в следующих областях:
						</p>
						<p className="greetings__content-area-text">
							1. Frontend разработка;
						</p>
						<p className="greetings__content-area-text">
							2. Web-design.
						</p>
						<br/>
						<p className="greetings__content-area-text">
							Я родом из Украины, но в данный момент живу в России, г. Санкт-Петербург.
						</p>
						<br/>
						<p className="greetings__content-area-text">
							Вы можете посмотреть <i className="greetings__content-area-text-italic">мои
							работы</i> сразу, или продолжайте прокручивать :)
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Greetings;
