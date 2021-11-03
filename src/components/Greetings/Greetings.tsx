import React, {FC} from 'react';
import {useAppDispatch} from "../../hooks/redux";
import {incrementByAmount} from "../../store/reducers/WheelSlice";

import './Greetings.scss';

//@ts-ignore
import ScrollableAnchor from 'react-scrollable-anchor';

const Greetings: FC = () => {
	const dispatch = useAppDispatch()
	
	const handleAnchor = () => {
		dispatch(incrementByAmount(0))
		dispatch(incrementByAmount(2))
	}
	
	return (
		<ScrollableAnchor id={'greetings'}>
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
								Вы можете посмотреть <i onClick={() => handleAnchor()} className="greetings__content-area-text-italic">
									мои работы
								</i> сразу, или продолжайте прокручивать :)
							</p>
						</div>
					</div>
				</div>
			</div>
		</ScrollableAnchor>
	);
};

export default Greetings;
