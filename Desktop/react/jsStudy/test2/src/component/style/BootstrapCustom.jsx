import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";

const BootstrapCustom = () => {
  const [show, setShow] = useState(false);
  return (
    <Container>
      <Row>
        <Col xs={2}>
          <Button block outline>
            홈으로
          </Button>
        </Col>
        <Col xs={2}>
          <Button block outline>
            페이지
          </Button>
        </Col>
        <Col xs={6}></Col>
        <Col xs={2}>
          <Button block outline>
            로그아웃
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={() => setShow(!show)}>modal open</Button>
        </Col>
      </Row>

      <Modal isOpen={show} toggle={() => setShow(!show)}>
        <ModalHeader toggle={() => setShow(!show)}>hello Modal</ModalHeader>
        <ModalBody> content.......</ModalBody>
      </Modal>
    </Container>
  );
};

export default BootstrapCustom;