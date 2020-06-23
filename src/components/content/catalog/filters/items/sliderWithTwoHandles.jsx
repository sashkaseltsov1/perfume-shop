import Slider from "react-compound-slider/Slider";
import Handles from "react-compound-slider/Handles";
import React from "react";
import {Rail, Tracks} from "react-compound-slider";
import styles from './sliderWithTwoHandles.module.css'

const SliderWithTwoHandles = (props)=>{
    const sliderStyle = {
        position: 'relative',
        width: 'calc(90% - 20px)',
        height: 30,
        margin:'0 auto'
    };
    const railStyle = {
        position: 'absolute',
        width: '100%',
        height: 2,
        marginTop: 14,
        backgroundColor: '#d4d4d4',
    };

    return(
        <div>
            <div>
                <div className={styles.fields}>
                    <div className={styles.cost}>
                        <span>от </span>
                        <input type={'text'} value={props.item.fieldState[0]}
                               onBlur={(event)=>{
                                   props.setRangeOptionActionCreator(
                                       {...props.item, sliderState:[event.target.value, props.item.fieldState[1]]})
                               }}
                               onChange={(event)=>{
                                   /^([0-9]*)$/.test(event.target.value) &&
                                       props.setRangeOptionActionCreator(
                                           {...props.item, fieldState:[event.target.value, props.item.fieldState[1]]})
                                  }} />
                    </div>
                    <div className={styles.cost}>
                        <span>до </span>
                        <input type={'text'} value={props.item.fieldState[1]}
                               onBlur={(event)=>{
                                   props.setRangeOptionActionCreator(
                                       {...props.item, sliderState:[props.item.fieldState[0],event.target.value]})
                               }}
                               onChange={(event)=>{
                                   /^([0-9]*)$/.test(event.target.value) &&
                                   props.setRangeOptionActionCreator(
                                       {...props.item, fieldState:[props.item.fieldState[0],event.target.value]})
                                   }
                               }/>
                    </div>

                </div>
            </div>
            <Slider
                onUpdate={(event)=>props.setRangeOptionActionCreator({...props.item, fieldState:event})}
                rootStyle={sliderStyle}
                domain={props.item.domain}
                step={1}
                mode={2}
                values={props.item.sliderState }
            >
                <Rail>
                    {({ getRailProps }) => (
                        <div style={railStyle} {...getRailProps()} />
                    )}
                </Rail>
                <Handles >
                    {({ handles, getHandleProps }) => (
                        <div className="slider-handles">
                            {handles.map(handle => (
                                <Handle
                                    key={handle.id}
                                    handle={handle}
                                    getHandleProps={getHandleProps}
                                />
                            ))}
                        </div>
                    )}
                </Handles>
                <Tracks left={false} right={false}>
                    {({ tracks, getTrackProps }) => (
                        <div className="slider-tracks">
                            {tracks.map(({ id, source, target }) => (
                                <Track
                                    key={id}
                                    source={source}
                                    target={target}
                                    getTrackProps={getTrackProps}
                                />
                            ))}
                        </div>
                    )}
                </Tracks>
            </Slider>
            <div className={styles.minmax}>
                <span>{props.item.domain[0]} руб.</span>
                <span>{props.item.domain[1]} руб.</span>
            </div>
        </div>
    )
};
const Track = ({ source, target, getTrackProps })=> {
    return (
        <div
            style={{
                position: 'absolute',
                height: 2,
                zIndex: 1,
                marginTop: 14,
                backgroundColor: 'cornflowerblue',
                borderRadius: 0,
                cursor: 'pointer',
                left: `${source.percent}%`,
                width: `${target.percent - source.percent}%`,
            }}
            {...getTrackProps() }
        />
    )
}
const Handle=({handle: { id, value, percent },getHandleProps}) =>{

    return (

        <div
            style={{
                left: `${percent}%`,
                position: 'absolute',
                marginLeft: -10,
                marginTop: 5,
                zIndex: 2,
                width: 20,
                height: 20,
                border: 0,
                textAlign: 'center',
                cursor: 'pointer',
                borderRadius: '50%',
                backgroundColor: '#828282',
            }}
            {...getHandleProps(id)}
        >

        </div>
    )
};

export default SliderWithTwoHandles;