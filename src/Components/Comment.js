import React from 'react';
import { Container } from 'reactstrap';

function Comment() {
  return (
    <section id="comment" className="section comment">
        <Container fluid>
            <h2 className="heading2">ความเห็นจากนักวิชาการ</h2>
            <p className="paragraph">Here are some of the projects I've worked on:</p>
            {/* Add project cards or details here */}
        </Container>
    </section>
  );
}

export default Comment;