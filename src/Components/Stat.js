import React ,{ PureComponent } from 'react';
import { Container } from 'reactstrap';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    year: '2548',
    cases: 0,
  },
  {
    year: '2549',
    cases: 1,
  },
  {
    year: '2550',
    cases: 0,
  },
  {
    year: '2551',
    cases: 4,
  },
  {
    year: '2552',
    cases: 4,
  },
  {
    year: '2553',
    cases: 10,
  },
  {
    year: '2554',
    cases: 9,
  },
  {
    year: '2555',
    cases: 5,
  },
  {
    year: '2556',
    cases: 2,
  },
  {
    year: '2557',
    cases: 51,
  },
  {
    year: '2558',
    cases: 32,
  },
  {
    year: '2559',
    cases: 15,
  },
  {
    year: '2560',
    cases: 14,
  },
  {
    year: '2561',
    cases: 0,
  },
  {
    year: '2562',
    cases: 0,
  },
  {
    year: '2563',
    cases: 35,
  },
  {
    year: '2564',
    cases: 79,
  },
];

function Stat() {
  return (
    <section id="stat" className="section stat">
        <Container fluid>
            <h2 className="sub-heading">จำนวนคดีที่เกิดขึ้น</h2>
            <p className="paragraph2">มาตรา 112 มีการตีความการกระทำอย่างไร้ขอบเขต แต่ทุกคนสามารถผู้กล่าวโทษให้ดำเนินคดีได้ จึงมีการกล่าวหากันเป็นจำนวนมากในช่วงที่มีความขัดแย้งทางการเมืองหลังจากปี 2548 เป็นต้นมา</p>
            
            <div className="chart-container"> 
              <ResponsiveContainer width={500} height={300}>
                <ComposedChart
                  width={200}
                  height={200}
                  data={data}
                  margin={{
                    top:40,
                    right: 20,
                    bottom: 20,
                    left: 20,
                  }}
                  
                >
                  {/* <CartesianGrid stroke="#f5f5f5" /> */}
                  <XAxis
                    tickCount={2}
                    dataKey="year"
                    scale="band"
                    label={{
                      value: 'ปี',
                      position: 'right',
                      offset: 7,
                      style: { fontSize: 14, fontFamily: 'IBM Plex Sans Thai' },
                    }}
                    tick={{ fontSize: 12, fontFamily: 'IBM Plex Sans Thai' }} 
                  />
                  <YAxis
                    tickCount={2} 
                    label={{
                      value: 'จำนวนคดี',
                      position: 'top',
                      offset: 15,
                      style: { fontSize: 14, fontFamily: 'IBM Plex Sans Thai' },
                    }}
                    tick={{ fontSize: 12, fontFamily: 'IBM Plex Sans Thai' }} 
                  />
                  <Tooltip  />
                  {/* <Legend /> */}
                  <Bar dataKey="cases" barSize={10} fill="#000000" tick={{ fontSize: 12, fontFamily: 'IBM Plex Sans Thai' }}  />
                  {/* <Line type="monotone" dataKey="cases" stroke="#222222" /> */}
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <p className="linked" > ที่มา: <a href="https://freedom.ilaw.or.th/node/817">ilaw</a></p>
        </Container>

        
    </section>
  );
}

export default Stat;
