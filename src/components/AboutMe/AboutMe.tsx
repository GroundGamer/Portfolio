import React, {FC} from 'react';

import "./AboutMe.scss";

const AboutMe: FC = () => {
	return (
		<div className="aboutMe">
			<div className="aboutMe__block">
				<img src="./img/logo-1.svg" alt="" className="aboutMe__logo-1"/>
				<img src="./img/logo-2.svg" alt="" className="aboutMe__logo-2"/>
				<div className="aboutMe__content">
					<div className="aboutMe__content-area">
						<div className="aboutMe__content-area-text-block_bio">
							<p className="aboutMe__content-area-text-block_bio-bio">
								Биография
							</p>
							<div className="aboutMe__content-area-text-block_bio-swipe">
								<p className="aboutMe__content-area-text-block_bio-swipe-text">
									Вы можете свайпнуть вправо
								</p>
								<p className="aboutMe__content-area-text-block_bio-swipe-arrow">&rarr;</p>
							</div>
						</div>
						<p className="aboutMe__content-area-text-aBitMore">
							Ещё немного обо мне
						</p>
						<div className="aboutMe__content-area-text-grid">
							<div className="aboutMe__content-area-text-block">
								<div className="aboutMe__content-area-text-block-item">
									<p className="aboutMe__content-area-text-block-item-year">2014</p>
									<p className="aboutMe__content-area-text-block-item-story">
										Мне всегда нравилось проводить слишком много времени за компьютером, и в 14 лет
										я начал творить свои “шедевры” в Photoshop.
									</p>
								</div>
								<div className="aboutMe__content-area-text-block-item">
									<p className="aboutMe__content-area-text-block-item-year">
										2016
										<br/>
										-
										<br/>
										2017
									</p>
									<p className="aboutMe__content-area-text-block-item-story">
										В школе, в 10 классе я начал изучать книгу по C#,на тот момент я ещё не понимал
										как
										устроено программирование. На уроках информатики практиковал создание простых
										одностроничных WEB-проектов,без применения JavaScript, в частности это был
										однофайловый проект (странно вообще звучит), с одним файлом index.html, в
										котором
										длинна кода не привышала 500 строк.
									</p>
								</div>
								<div className="aboutMe__content-area-text-block-item">
									<p className="aboutMe__content-area-text-block-item-year">
										2017
										<br/>
										-
										<br/>
										2020
									</p>
									<p className="aboutMe__content-area-text-block-item-story">
										После окончания школы я поступил учиться в колледж, по специальности
										“Программирование в компьютерных системах”. Изучая там такие языки
										программирование
										как C# и C++, я уже начинал понимать что такое ООП, а также типы данных и
										условные
										операции.
									</p>
								</div>
								<div className="aboutMe__content-area-text-block-item">
									<p className="aboutMe__content-area-text-block-item-year">
										2019
										<br/>
										-
										<br/>
										2020
									</p>
									<p className="aboutMe__content-area-text-block-item-story">
										Учась на 3 курсе в колледже, я начал изучать активно Python на Udemy, а также
										купил
										пару книг по этому языку. Сделал несколько небольших приложений, таких как
										генератор
										паролей, музыкальный плеер, программа для сбора email адресов, а также
										консольную
										текстовую игру - висилица. Написав эти приложения, я уже намного осознаней и
										лучше
										начал понимать ООП. Через несколько месяцев я приобрёл книгу по Django и
										тренировался на ней разрабатывать Backend-приложения.
									</p>
								</div>
							</div>
							<div className="aboutMe__content-area-text-divider"/>
							<div className="aboutMe__content-area-text-block">
								<div className="aboutMe__content-area-text-block-item">
									<p className="aboutMe__content-area-text-block-item-year">2020</p>
									<p className="aboutMe__content-area-text-block-item-story">
										К окончанию своего обучения в колледже, я сделал Backend-приложение для
										дипломного проекта, суть этого приложения была проста, дать возможность учителям
										создавать вопросы, а ученикам отвечать на них.
									</p>
								</div>
								<div className="aboutMe__content-area-text-block-item">
									<p style={{width: '36.11px'}}
									   className="aboutMe__content-area-text-block-item-year">
										2020
										- <br/>
										2021
									</p>
									<p className="aboutMe__content-area-text-block-item-story">
										Сдав диплом на отлично, меня забрали в армию...
									</p>
								</div>
								<div className="aboutMe__content-area-text-block-item">
									<p className="aboutMe__content-area-text-block-item-year">2021</p>
									<p className="aboutMe__content-area-text-block-item-story">
										По возвращению, я начал активно интересоваться Frontend разработкой, изучать
										язык программирования
										<i className="aboutMe__content-area-text-block-item-story-italic"> JavaScript </i>
										паралелльно изучая
										<i className="aboutMe__content-area-text-block-item-story-italic"> фреймворк
											React и вспомогательные библиотеки: Redux (Redux-toolkit), Typescript,
											SASS/SCSS, Axios </i>
										. На данный момент это мой основной стэк технологий, и я позиционирую себя как
										<i className="aboutMe__content-area-text-block-item-story-italic"> Junior React
											разработчик</i>.
									</p>
								</div>
								<div className="aboutMe__content-area-text-block-social">
									<div className="aboutMe__content-area-text-block-social-group">
										<div className="aboutMe__content-area-text-block-social-github">
											<img src="./img/git.svg" alt="git"
											     className="aboutMe__content-area-text-block-social-img"/>
											<a target='_blank' href="https://github.com/GroundGamer?tab=repositories"
											   className="aboutMe__content-area-text-block-social-link"
											   rel="noreferrer">
												<i>GitHub</i>
											</a>
										</div>
										<div className="aboutMe__content-area-text-block-social-hh">
											<img src="./img/hh.svg" alt="hh"
											     className="aboutMe__content-area-text-block-social-img"/>
											<a target='_blank'
											   href="https://spb.hh.ru/resume/c94181f1ff044f3aac0039ed1f754d55655136"
											   className="aboutMe__content-area-text-block-social-link"
											   rel="noreferrer">
												<i>HeadHunter</i>
											</a>
										</div>
										<div className="aboutMe__content-area-text-block-social-codewars">
											<img src="./img/codewars.svg" alt="codewars"
											     className="aboutMe__content-area-text-block-social-img"/>
											<a target='_blank' href="https://www.codewars.com/users/Ground_Gamer"
											   className="aboutMe__content-area-text-block-social-link"
											   rel="noreferrer">
												<i>CodeWars</i>
											</a>
										</div>
										<div className="aboutMe__content-area-text-block-social-vk">
											<img src="./img/vk.svg" alt="vk"
											     className="aboutMe__content-area-text-block-social-img"/>
											<a target='_blank' href="https://vk.com/e.parfenyuk"
											   className="aboutMe__content-area-text-block-social-link"
											   rel="noreferrer">
												<i>Vkontakte</i>
											</a>
										</div>
										<div className="aboutMe__content-area-text-block-social-stackoverflow">
											<img src="./img/so.svg" alt="stackoverflow"
											     className="aboutMe__content-area-text-block-social-img"/>
											<a target='_blank'
											   href="https://stackoverflow.com/users/12204830/ground-gamer"
											   className="aboutMe__content-area-text-block-social-link"
											   rel="noreferrer">
												<i>Stack Overflow</i>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;