import React, { useCallback, useRef, useState } from 'react'

interface IRenderCounterProps {}

export const RenderCounter: React.FC<IRenderCounterProps> = () => {
    const [, setForceRender] = useState(false)
    
    const renderCounterRef = useRef(0)

    const handleForceReRender = useCallback(() => {
        setForceRender(forceRender => !forceRender)
    }, [setForceRender])

    return (
        <div className='functional-render-counter'>
            <div className='functional-render-counter__numberOfRenders'>
                {++renderCounterRef.current}
            </div>

            <button onClick={handleForceReRender}>
                Force Re-render
            </button>
        </div>
    )
}