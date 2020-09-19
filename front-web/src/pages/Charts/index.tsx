import React, { useEffect, useState } from 'react';
import Filters from '../../components/Filters'
import './styles.css';
import { barOptions, pieOptions } from './chart-options';
import Chart from 'react-apexcharts';
import axios from 'axios';
import { buildBarSeries, getPlatformChartData, getGenderChartData } from './Helpers'
type PieChartData = {
    labels: string[];
    series: number[];
}
type BarChartData = {
    x: string;
    y: number;
}
const initialPieData = {
    labels: [],
    series: []
}
const BASE_URL = 'https://sds1-joaov.herokuapp.com';


const Charts = () => {
    const [BarChartData, setBarChartData] = useState<BarChartData[]>([]);
    const [platformData, setplatformData] = useState<PieChartData>(initialPieData);
    const [genderData, setgenderformData] = useState<PieChartData>(initialPieData);

    useEffect(() => {
        async function getData() {
            const recordsResponse = await axios.get(`${BASE_URL}/records`);
            const gamesResponse = await axios.get(`${BASE_URL}/games`);

            const barData = buildBarSeries(gamesResponse.data, recordsResponse.data.content)
            setBarChartData(barData);

            const platformChartData = getPlatformChartData(recordsResponse.data.content);
            setplatformData(platformChartData);

            const genreChartData = getGenderChartData(recordsResponse.data.content);
            setgenderformData(genreChartData);

        }



        getData();
    }, [])

    return (<div className="page-container">
        <Filters link="/records" linkText="Ver tabela" />
        <div className="chart-container">
            <div className="top-related">
                <h1 className="top-related-title">
                    Jogos mais votados
                </h1>
                <div className="games-container">
                    <Chart
                        options={barOptions}
                        type="bar"
                        width="600"
                        height="590"
                        series={[{ data: BarChartData }]}
                    />
                </div>

            </div>
            <div className="charts">
                <div className="platform-chart">
                    <h2 className="chart-title">Plataformas  </h2>
                    <Chart
                        options={{ ...pieOptions, labels: platformData?.labels }}
                        type="donut"
                        series={platformData?.series}
                        width="290"
                        height="270"

                    />
                </div>
                <div className="gender-chart">
                    <h2 className="chart-title">
                        Gêneros
                    </h2>
                    <Chart
                        options={{ ...pieOptions, labels: genderData?.labels }}
                        type="pie"
                        series={genderData?.series}
                        width="290"
                        height="270"
                    />
                </div>

            </div>

        </div>
    </div>
    );
}
export default Charts;