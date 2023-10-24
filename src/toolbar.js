import React, { useState } from "react";

const ToolBar = (props) => {
    const rotateAntiClock = () => {
        props.meshRef.current.rotation.y += 0.2;
    }

    const rotateClockWise = () => {
        props.meshRef.current.rotation.y -= 0.2;
    }

    const zoomIn = () => {
        if (props.camera.position.z > .2) {
            props.camera.position.z -= .4
        }
        
    }

    const zoomOut = () => {
        if (props.camera.position.z < 4) {
            props.camera.position.z += .4
        }
        
    }

    return <>
        <div style={styles.toolbar}>
        <div>
                <img onClick={zoomOut} style={styles.icon} src="icons/toolbox-zoom-out.svg"/>
            </div>
            <br />
            <div>
                <img onClick={zoomIn} style={styles.icon} src="icons/toolbox-zoom-in.svg" />
            </div>
            <br />
            <div>
                <img onClick={rotateClockWise} style={styles.icon} src="icons/toolbox-drehen-rechts.svg" />
            </div>
            <br />
            <div>
                <img onClick={rotateAntiClock} style={styles.icon} src="icons/toolbox-drehen-links.svg" />
            </div>
            <br />
        </div>
    </>
}

const styles = {
    toolbar: {
        background: '#f6f6f6',
        border: 'black', 
        position:'fixed',
        top: '200px',
        left: '400px', 
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    icon: {
        height: '20px',
        width: '30px',
        cursor: 'pointer'
    }
}

export default ToolBar;