import React, {FC, useEffect} from 'react';
import "./MyWorks.scss";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {fetchWorks} from "../../store/reducers/WorkAction";
import MyWorkItem from "./MyWorkItem/MyWorkItem";
import {IWork} from "../../models/IWork";
import ContentLoader from "react-content-loader";

const MyWorks: FC = () => {
	const {works, isLoading, error} = useSelector((state: RootState) => state.WorkSlice)
	const dispatch = useDispatch()
	
	useEffect(() => {
		dispatch(fetchWorks())
	}, [dispatch])
	
	console.log(works)
	
	return (
		<div className="myWorks">
			<div className="myWorks__content">
				<div className="myWorks__content-area">
					<p className="myWorks__content-area-heading">
						Мои работы
						{error &&
                        <p style={{color: '#d60000', marginLeft: '5px'}}>
							{error}
                        </p>
						}
					</p>
					<div className="myWorks__content-area-block">
						{isLoading ?
							Array.from(Array(10).keys()).map(() =>
								<div>
									<ContentLoader
										speed={2}
										width={250}
										height={100}
										viewBox="0 0 250 100"
										backgroundColor="#f3f3f3"
										foregroundColor="#ecebeb"
									>
										<rect x="0" y="0" rx="3" ry="3" width="85" height="15" />
										<rect x="0" y="20" rx="3" ry="3" width="52" height="15" />
										<rect x="0" y="40" rx="3" ry="3" width="380" height="30" />
										<rect x="0" y="75" rx="3" ry="3" width="30" height="15" />
										<rect x="40" y="75" rx="3" ry="3" width="30" height="15" />
									</ContentLoader>
								</div>
							) :
						works && works.map((work: IWork) =>
							<MyWorkItem key={work.id} work={work}/>
							)
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyWorks;
