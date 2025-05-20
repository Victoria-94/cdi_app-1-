import React from "react";
import { Card, Row, Col, Input, Button } from "antd";

const NivelesPage = () => {
  const niveles = [
    { nombre: "Sala Cuna", edad: "0 - 1 Año", color: "#ff7875" },
    { nombre: "Inicial 1 Subnivel 1", edad: "1 - 3 Años", color: "#52c41a" },
    { nombre: "Inicial 2 Subnivel 2", edad: "3 - 4 Años", color: "#faad14" },
    { nombre: "Inicial 2 Subnivel 2", edad: "4 - 5 Años", color: "#ff7875" },
  ];

  return (
    <div>
      <Input.Search placeholder="Buscar..." style={{ marginBottom: 20 }} />
      <Row gutter={[16, 16]}>
        {niveles.map((nivel, index) => (
          <Col xs={24} sm={12} md={12} lg={8} key={index}>
            <Card
              title={`${nivel.nombre}`}
              extra={nivel.edad}
              style={{ borderTop: `4px solid ${nivel.color}` }}
            >
              <Button style={{ background: nivel.color, color: "#fff", marginRight: 10 }}>Ingresar</Button>
              <Button>Notas</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default NivelesPage;