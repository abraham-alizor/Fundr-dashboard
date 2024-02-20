import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Zoom } from 'react-reveal';
import { useMediaQuery } from '../../hooks';

export interface MainChartTypes {
	data: {
		name: string;
		uv: number;
	}[];
}

function MainChart({ data }: MainChartTypes) {
	const isMobileView = useMediaQuery('(max-width: 640px)');
	const isTabletView = useMediaQuery('(max-width: 840px)');
	return (
		<Zoom>
			<div style={{ width: '100%', height: 200 }}>
				<ResponsiveContainer>
					<BarChart
						width={500}
						height={200}
						data={data}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<CartesianGrid horizontal={true} vertical={false} stroke='#E4E4E7' />
						<XAxis dataKey='name' tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
						<YAxis dataKey={'uv'} axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
						<Tooltip />
						<Bar dataKey='uv' fill='#FFC145' barSize={isMobileView && isTabletView ? 10 : 25} />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</Zoom>
	);
}

export default MainChart;
