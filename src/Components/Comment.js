import React from 'react';
import { Container } from 'reactstrap';
import FeatureCard from './FeatureCard';
import image1 from '../asset/images/person-1.png';
import image2 from '../asset/images/person-2.png';
import image3 from '../asset/images/person-3.png';

function Comment() {
  const featureCardsData = [
    {
      dialogue: '“ปัญหาใหญ่มากๆ ของมาตรา 112 คือมันมีนโยบายที่ให้ใช้อย่างร้ายแรงที่สุด ให้เป็นความลับ มันทำให้ภาพลักษณ์ของระบบยุติธรรมในคดี 112 เป็นกฎหมายที่ไม่ชัดเจนแน่นอน กฎหมายไม่มีความโปร่งใส และไม่สมเหตุสมผล  ไม่ว่าต่อไปนี้คุณจะตัดสินคดีอื่น คดีไหนก็ตาม คนก็จะเกิดความไม่เชื่อถือ เกิดความสงสัยในการกระทำของสถาบันตุลาการ ถ้าเป็นอย่างนั้นสังคมไทยอยู่ไม่ได้”',
      image: image1,
      // image: require('../asset/images/person-1.png').default,
      name: 'ดร. เข็มทอง ต้นสกุลรุ่งเรือง',
      position: 'คณะนิติศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย'
    },
    {
      dialogue: '“เราสามารถมีระบอบประชาธิปไตยอันมีพระมหากษัตริย์ทรงเป็นประมุขได้ แต่เราก็สามารถทำให้กฏหมายนั้น มันไม่ขัดแย้งต่อหลักการพื้นฐาน สิทธิ และเสรีภาพของประชาชนในสังคมประชาธิปไตยได้ และนั่นก็ควรเป็นสิ่งที่ควรจะทำ”',
      image: image2,
      name: 'รองศาสตราจารย์ ดร. วาสนา วงศ์สุรวัฒน์',
      position: 'คณะอักษรศาสตร์ ภาควิชาประวัติศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย'
    },
    {
      dialogue: '“ควรมีบุคคลหรือองค์กรในระดับสูง ซึ่งไม่เกี่ยวกับพระมหากษัตริย์โดยทางหนึ่งทางใด อาจเป็นองค์กรที่มีอยู่แล้วเช่น อัยการสูงสุด รัฐมนตรีกระทรวงวัฒนธรรม นายกรัฐมนตรี หรือตั้งองค์กรใหม่ขึ้นกลั่นกรองก่อนจะอนุมัติให้ดำเนินคดีได้ อย่าปล่อยให้ใครๆ ก็สามารถตั้งตัวเป็นโจทย์ฟ้องร้องได้ และปล่อยให้ตำรวจชั้นผู้น้อยและอัยการชั้นผู้น้อย ต้องใช้วินิจฉัยของตนเองว่าจะดำเนินคดีหรือไม่ ซึ่งยากที่จะใช้อำนาจวินิจฉัยนั้นอย่างเที่ยงธรรม”',
      image: image3,
      name: 'นิธิ เอียวศรีวงศ์',
      position: 'อดีตอาจารย์ประจำภาควิชาประวัติศาสตร์ คณะมนุษยศาสตร์ มหาวิทยาลัยเชียงใหม่'
    },
    // Add more feature card data objects as needed
  ];

  return (
    <section id="comment" className="section comment">
        <Container fluid>
            <h2 className="sub-heading">ความเห็นนักวิชาการ</h2>
          <div >
            {featureCardsData.map((card, index) => (
              <FeatureCard
                key={index}
                image={card.image}
                name={card.name}
                position={card.position}
                dialogue={card.dialogue}
              />
            ))}
          </div>
        </Container>
    </section>
    
  );
}

export default Comment;