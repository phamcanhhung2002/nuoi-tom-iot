import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import '../../styles/data.css'
const data = [
    {
        "name": "Page A",
        "uv": 4000,
        "pv": 2400,
        "amt": 2400
    },
    {
        "name": "Page B",
        "uv": 3000,
        "pv": 1398,
        "amt": 2210
    },
    {
        "name": "Page C",
        "uv": 2000,
        "pv": 9800,
        "amt": 2290
    },
    {
        "name": "Page D",
        "uv": 2780,
        "pv": 3908,
        "amt": 2000
    },
    {
        "name": "Page E",
        "uv": 1890,
        "pv": 4800,
        "amt": 2181
    },
    {
        "name": "Page F",
        "uv": 2390,
        "pv": 3800,
        "amt": 2500
    },
    {
        "name": "Page G",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100
    }
]

const renderLineChart = (
    <div className='time-temp'>
        <h5>Daily temp</h5>
        <div class="mb-4"></div>
        <ResponsiveContainer style={{ marginLeft: 0 }} width="100%" aspect={3}>
            <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="1" horizontal="" vertical="true" />
                <XAxis dataKey="name" tick={{ fill: "black" }} />
                <YAxis tick={{ fill: "black" }} />
                <Tooltip />
                <Legend />
                {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" /> */}
                <Line dataKey="uv" stroke="#82ca9d" activeDot={{ r: 6 }} />
            </LineChart>
        </ResponsiveContainer>
    </div>

);

function Data() {
    return (
        <div>
            <div className='current-temp'>
                <h5>Current temp</h5>
                <h1>36 °C</h1>
            </div>
            {renderLineChart}
        </div>
    )
}

export default Data