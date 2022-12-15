import React from 'react'

import { goToAnchor, configureAnchors } from 'react-scrollable-anchor'

import AboutMe from './components/AboutMe/AboutMe'
import MyWorks from './components/MyWorks/MyWorks'
import Greetings from './components/Greetings/Greetings'
import BackgroundBlock from './components/BackgroundBlock'


import { useAppDispatch, useAppSelector } from './hooks/redux'

import { decrement, increment } from './store/reducers/WheelSlice'

import './App.scss'

export enum Sections {
    greetings,
    aboutMe,
    myWorks,
}

const App = () => {

    const { indexAnchor } = useAppSelector(state => state.WheelSlice)

    const dispatch = useAppDispatch()

    const wheelTimeout: React.MutableRefObject<any> = React.useRef(null)

    const wheelEvent = (event: React.WheelEvent) => {
        const { deltaY } = event || {}

        clearTimeout(wheelTimeout.current)

        wheelTimeout.current = setTimeout(() => {
            wheelTimeout.current = false

            if (deltaY >= 100 && deltaY <= 225) {
                if (indexAnchor !== 2) {
                    dispatch(increment())
                }
            }

            if (deltaY <= -100 && deltaY >= -225) {
                if (indexAnchor !== 0) {
                    dispatch(decrement())
                }
            }
        }, 400)
    }


    React.useEffect(() => {
        document.body.addEventListener('wheel', (event) => { wheelTimeout.current && event.preventDefault() }, { passive: false })

        goToAnchor(Sections[indexAnchor], false)

        return () => {
            document.body.removeEventListener('wheel', (event) => {
                wheelTimeout.current && event.preventDefault()
            })
        }
    }, [indexAnchor])


    React.useEffect(() => {
        configureAnchors({ offset: -50, scrollDuration: 400 })
    }, [])



    return (
        <div ref={wheelTimeout} onWheel={(event) => wheelEvent(event)} className={'wrapper'}>

            <Greetings/>

            <AboutMe/>

            <MyWorks/>

            <BackgroundBlock/>

        </div>
    )
}

export default App