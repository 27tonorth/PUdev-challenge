import React from 'react';
import { Container } from 'reactstrap';

function Stat() {
  return (
    <section id="stat" className="section stat">
        <Container fluid>
            <h2 className="heading2">จำนวนคดีที่เกิดขึ้น</h2>
            <p className="paragraph2">มาตรา 112 มีการตีความการกระทำอย่างไร้ขอบเขต แต่ทุกคนสามารถผู้กล่าวโทษให้ดำเนินคดีได้ จึงมีการกล่าวหากันเป็นจำนวนมากในช่วงที่มีความขัดแย้งทางการเมืองหลังจากปี 2548 เป็นต้นมา</p>
            {/* Add graph  or details here */}
        </Container>
    </section>
  );
}

export default Stat;