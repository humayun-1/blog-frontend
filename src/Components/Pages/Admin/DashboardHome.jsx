import React from 'react'
import DashboardWrapper from '../../Elements/Layout/DashboardWrapper'
import FlexCol from '../../Elements/Layout/FlexCol'
import PieChart from './PieChart'
import LineChart from './LineChart'
import BarChart from './BarChart'


const DashboardHome = () => {
    return (
        <DashboardWrapper active="dashboard">
            <FlexCol className={'gap-8'}>
                <div className="">
                    <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
                    <div className="grid grid-cols-2 gap-4">
                        <BarChart />
                        <LineChart />
                        <PieChart />
                    </div>
                </div>
            </FlexCol>
        </DashboardWrapper>
    )
}

export default DashboardHome