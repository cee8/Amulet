import React, { useState } from 'react'

import BasicLineChart from '../common/BasicLineChart'

function Home() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>We've noticed you've been...</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <div>
                <BasicLineChart xAxisData={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} seriesData={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default Home